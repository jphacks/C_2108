<template>
  <v-container>
    <v-btn rounded color="grey lighten-4" class="list" @click="updateComments">
      リスト更新
    </v-btn>

    <v-list color="rgba(255, 255, 255, 0.2)">
      <template v-for="(comment, index) in comments">
        <v-divider :key="index" />
        <v-list-item :key="index">
          <v-row>
            <v-list-item-content>
              <v-card-title class="justify-center">
                {{ comment.input }}
              </v-card-title>

              <v-list-item-action expend="true">
                <v-row justify="space-between">
                  <v-col cols="2">
                    <v-btn
                      icon
                      color="rgba(255, 255, 240, 0.8)"
                      @click="showReply(comment.date)"
                    >
                      <v-icon>mdi-comment-outline</v-icon></v-btn
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      icon
                      color="rgba(255, 255, 240, 0.8)"
                      @click="deleteMemo(comment.date)"
                    >
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col align-self="center">
                    <v-card-text class="text-right">
                      <!-- {{ comment.date }} -->
                      {{ comment.formattedDate }}
                    </v-card-text>
                  </v-col>
                  <v-col cols="1" />
                </v-row>
              </v-list-item-action>
              <v-card color="rgba(0, 0, 0, 0.2)">
                <div v-show="reply" v-if="id == comment.date">
                  <v-card-title class="comment">ハロー！</v-card-title>
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

export default {
  name: 'Timeline',
  data() {
    return {
      comments: [],
      reply: false,
      id: '',
      // formattedDate: '',
    }
  },
  methods: {
    updateComments: function() {
      // firestoreのcommentsコレクションを参照
      db.collection('memos')
        .orderBy('date')
        .get()
        .then(snapShot => {
          snapShot.forEach(doc => {
            const comment = doc.data()
            // comment.date = doc.data().date
            comment.formattedDate = moment(doc.data().date.toDate()).format(
              'YYYY/MM/DD hh:mm:ss'
            )
            this.comments.push(comment)
          })
        })
    },
    showReply: function(date) {
      this.reply = !this.reply
      // this.id = moment(date.toDate()).format()
      this.id = date
    },
    deleteMemo: function(date) {
      // console.log(date.seconds)
      // db.collection('memos')
      //   .where('date', '==', date)
      //   .get()
      //   .then(doc => {
      //     console.log(doc.data())
      //   })
      //   .catch(() => {})
      // db.collection('memos')
      //   .doc(docName)
      //   .delete()
    },
  },
}
</script>

<style>
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
