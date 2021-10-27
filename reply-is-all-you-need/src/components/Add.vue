<template>
  <div>
    <h1>MEMO</h1>
    <div>
      <!-- <ul> -->
      <!-- <li><input v-model="input" /></li>
        <li><button @click="addMemo">追加</button></li> -->
      <!-- </ul> -->
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
      //   const _this = this

      // memosコレクションにドキュメントを追加
      this.db
        .collection('memos')
        .add({
          //   input: _this.input,
          input: this.input,
        })
        .then(function() {
          // 追加に成功したら、inputを空にする
          //   _this.input = ''
          this.input = ''
        })
        .catch(function() {
          // エラー時の処理
        })
    },
  },
}
</script>
