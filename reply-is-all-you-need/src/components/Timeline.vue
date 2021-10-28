<template>
  <div>
    <v-btn @click="updateComments">リスト更新</v-btn>
    <div v-for="comment in comments" :key="comment.date">
      <v-card>
        <v-card-text class="text-left">{{ comment.date }}</v-card-text>
        <v-card-title class="justify-center">{{ comment.input }}</v-card-title>
      </v-card>
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
      //  this.comments = db.collection('memos').orderBy('date')
    },
  },
}
</script>
