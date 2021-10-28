<template>
  <v-container>
    <div>
      <v-app-bar color="gray accent-4" dark>
        <v-app-bar-nav-icon />

        <v-toolbar-title>新規メモ</v-toolbar-title>

        <div class="flex-grow-1" />
      </v-app-bar>
    </div>
    <div>
      <v-textarea v-model="input" solo label="メモ" />
      <v-btn @click="addMemo">追加</v-btn>
    </div>
  </v-container>
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
