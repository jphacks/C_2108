<template>
  <div>
    <v-btn @click="updateComments">リスト更新</v-btn>
    <div v-for="comment in comments" :key="comment.date.seconds">
      <v-card>
        <v-card-text class="text-left">{{ comment.date.toDate() }}</v-card-text>
        <v-card-title class="justify-center">{{ comment.input }}</v-card-title>
        <v-card-text class="text-right">
          <v-btn icon color="grey darken-3" @click="showReply(comment.date)">
            <v-icon>mdi-message-alert</v-icon></v-btn
          >
        </v-card-text>
      </v-card>
      <v-btn @click="showReply(comment.date)">リプ表示</v-btn>
      <v-card color="blue-grey lighten-5">
        <div v-show="reply" v-if="id == comment.date">
          <v-card-text class="justify-center">ハロー！</v-card-text>
        </div>
      </v-card>
      <v-btn @click="deleteMemo(comment.date)">削除</v-btn>
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'

export default {
  name: 'Timeline',
  data() {
    return {
      comments: [],
      reply: false,
      id: '',
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
            // console.log(doc.data())
            this.comments.push(doc.data())
          })
        })
    },
    showReply: function(date) {
      this.reply = !this.reply
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
