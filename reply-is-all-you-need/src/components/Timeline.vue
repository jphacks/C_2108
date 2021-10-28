<template>
  <div>
    <v-btn @click="updateComments">リスト更新</v-btn>
    <div v-for="comment in comments" :key="comment.date">
      {{ comment.input }}
      {{ comment.date }}
      <v-btn @click="showReply(comment.date)">リプ表示</v-btn>
      <div v-show="reply" v-if="id == comment.date">ハロー！</div>
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
  },
}
</script>
