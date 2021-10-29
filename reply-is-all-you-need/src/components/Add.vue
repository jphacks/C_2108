<template>
  <div>
    <h1>MEMO</h1>
    <div>
      <v-card
        width="600px"
        height="395px"
        class="mx-auto mt-5"
        color="grey lighten-4"
      >
        <v-card-title class="justify-center">
          <v-card width="400px" height="300px" class="mx-auto mt-5">
            <v-textarea
              v-model="inputTxt"
              outlined
              label="メモ内容"
              width="300px"
              height="300px"
            />
          </v-card>
        </v-card-title>
        <v-card-text class="text-right">
          <v-btn icon color="grey darken-3" @click="addMemo">
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
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
