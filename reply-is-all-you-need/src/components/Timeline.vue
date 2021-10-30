<template>
  <v-container>
    <template v-for="(comment, index) in comments" class="mt-n12">
      <v-divider :key="`divider-${index}`" />
      <v-list-item :key="`item-${index}`" class="mt-2">
        <v-row>
          <v-list-item-content>
            <v-row align="center">
              <v-col cols="3">
                <v-avatar>
                  <img :src="user.photoURL" />
                </v-avatar>
              </v-col>
              <v-col cols="9">
                <v-card-title class="comment text-body-1">
                  {{ comment.input }}
                </v-card-title>
              </v-col>
              <v-spacer />
            </v-row>
            <v-list-item-action class="mt-n5">
              <v-row>
                <v-col align-self="center" cols="2">
                  <v-btn
                    icon
                    color="rgba(255, 255, 240, 0.8)"
                    @click="showReply(comment)"
                  >
                    <v-icon>mdi-comment-outline</v-icon>
                  </v-btn>
                </v-col>
                <v-col align-self="center" cols="2">
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
            <v-expand-transition>
              <v-card
                v-if="nowMemoId == comment.memoId"
                v-show="isShowReply"
                class="pl-4"
                color="rgba(0, 0, 0, 0.2)"
                elevation="5"
              >
                <v-row
                  v-for="(replyText, replyIndex) in replyTexts"
                  :key="replyIndex"
                  align="center"
                >
                  <v-col cols="3">
                    <v-avatar rounded>
                      <img :src="comment.replyCharas[replyIndex].src" />
                    </v-avatar>
                  </v-col>
                  <v-col cols="9" class="py-5">
                    <v-card-title class="comment text-body-2">
                      {{ replyText.reply_text }}
                    </v-card-title>
                  </v-col>
                </v-row>
              </v-card>
            </v-expand-transition>
          </v-list-item-content>
        </v-row>
      </v-list-item>
    </template>
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
    setTimeout(() => {
      const memosRef = db.collection('memos')
      const query = memosRef.where('userId', '==', this.user.uid)
      this.unsubscribe = query.orderBy('date', 'asc').onSnapshot(snapShot => {
        snapShot.docChanges().forEach(change => {
          // 追加
          if (change.type === 'added') {
            const comment = change.doc.data()
            comment.formattedDate = moment(
              change.doc.data().date.toDate()
            ).format('YYYY/MM/DD hh:mm:ss')
            this.comments.unshift(comment)
            this.replyTexts = comment.replyTexts
            this.nowMemoId = comment.memoId
            this.isShowReply = true
          }
          // 削除
          else if (change.type === 'removed') {
            this.comments.splice(
              this.comments.findIndex(
                ({ memoId }) => memoId === change.doc.data().memoId
              ),
              1
            )
          }
        })
      })
    }, 200)
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    showReply(comment) {
      if (this.nowMemoId === comment.memoId || this.isShowReply === false) {
        this.isShowReply = !this.isShowReply
      }
      this.nowMemoId = comment.memoId
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
