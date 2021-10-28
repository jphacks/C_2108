<template>
  <div>
    <h1>MEMO</h1>
    <div>
      <textarea v-model="inputTxt" />
      <button @click="addMemo">追加</button>
    </div>
  </div>
</template>

<script>
import firebase, { db } from '@/plugins/firebase'

export default {
  name: 'Add',
  data() {
    return {
      inputTxt: '',
    }
  },
  methods: {
    addMemo: function() {
      // memosコレクションにドキュメントを追加
      db.collection('memos')
        .add({
          input: this.inputTxt,
          date: firebase.firestore.Timestamp.now(),
        })
        .then(() => {
          this.inputTxt = ''
        })
        .catch(() => {
          // エラー時の処理
        })
    },
  },
}
</script>
