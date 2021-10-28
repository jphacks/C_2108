<template>
  <div>
    <h1>MEMO</h1>
    <div>
      <textarea v-model="input" />
      <button @click="addMemo">追加</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

export default {
  name: 'Add',
  data: function() {
    return {
      db: null,
      input: '',
    }
  },
  created: function() {
    this.db = firebase.firestore()
  },
  methods: {
    addMemo: function() {
      // memosコレクションにドキュメントを追加
      this.db
        .collection('memos')
        .add({
          input: this.input,
          date: firebase.firestore.Timestamp.now(),
        })
        .then(function() {
          this.input = ''
        })
        .catch(function() {
          // エラー時の処理
        })
    },
  },
}
</script>
