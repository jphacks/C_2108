<template>
  <v-container fluid>
    <v-list color="rgba(255, 255, 255, 0.1)">
      <template v-for="(comment, index) in comments">
        <v-divider :key="`divider-${index}`" />
        <v-list-item :key="`item-${index}`" class="pt-5">
          <v-row>
            <v-list-item-content>
              <v-row justify="left" align="center">
                <v-col cols="3">
                  <v-avatar>
                    <img :src="user.photoURL" />
                  </v-avatar>
                </v-col>
                <v-col cols="9">
                  <v-card-title class="comment">
                    {{ comment.input }}
                  </v-card-title>
                </v-col>
                <v-spacer />
              </v-row>
              <v-list-item-action expend="true">
                <v-row justify="space-between">
                  <v-col cols="2">
                    <v-btn
                      icon
                      color="rgba(255, 255, 240, 0.8)"
                      @click="showReply(comment)"
                    >
                      <v-icon>mdi-comment-outline</v-icon></v-btn
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      icon
                      color="rgba(255, 255, 240, 0.8)"
                      @click="deleteMemo(comment.memoId)"
                    >
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col align-self="center">
                    <v-card-text class="text-right">
                      {{ comment.formattedDate }}
                    </v-card-text>
                  </v-col>
                  <v-col cols="1" />
                </v-row>
              </v-list-item-action>
              <v-card color="rgba(0, 0, 0, 0.2)">
                <div v-show="isShowReply" v-if="nowMemoId == comment.memoId">
                  <div
                    v-for="(replyText, replyIndex) in replyTexts"
                    :key="replyIndex"
                  >
                    <v-row>
                      <v-col cols="3">
                        <v-avatar />
                      </v-col>
                      <v-col cols="9">
                        <v-card-title class="comment">
                          {{ replyText.reply_text }}
                        </v-card-title>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-list-item-content>
          </v-row>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import { db } from '@/plugins/firebase'
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'Timeline',
  data() {
    return {
      comments: [],
      isShowReply: false,
      replyTexts: [],
      id: '',
      unsubscribe: null,
      nowMemoId: null,
    }
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    const memosRef = db.collection('memos')
    const query = memosRef.where('userId', '==', this.user.uid.toString())
    this.unsubscribe = query.orderBy('date', 'asc').onSnapshot(snapShot => {
      snapShot.docChanges().forEach(change => {
        // 追加
        if (change.type === 'added') {
          const comment = change.doc.data()
          comment.formattedDate = moment(
            change.doc.data().date.toDate()
          ).format('YYYY/MM/DD hh:mm:ss')
          this.comments.unshift(comment)
        }
        // 削除
        else if (change.type === 'removed') {
          this.comments.splice(
            this.comments.lastIndexOf(change.doc.data().memoId),
            1
          )
        }
      })
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    showReply(comment) {
      this.nowMemoId = comment.memoId
      this.isShowReply = !this.isShowReply
      this.replyTexts = comment.replyTexts
    },
    deleteMemo(memoId) {
      db.collection('memos')
        .doc(memoId)
        .delete()
    },
  },
}
</script>

<style>
.comment {
  color: #eeffff;
  opacity: 0.9;
}
.justify-center {
  color: #eeffff;
  opacity: 0.9;
}
.text-right {
  color: #eeffff;
  opacity: 0.9;
}
.list {
  color: #eeffff;
  opacity: 0.9;
}
.comment {
  color: #eeffff;
  opacity: 0.9;
}
</style>
