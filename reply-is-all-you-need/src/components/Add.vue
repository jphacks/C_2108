<template>
  <div>
    <v-card width="100%" height="100%" class="mx-auto" color="grey lighten-4">
      <v-card-title class="justify-center">
        <v-card width="100%" height="100%" class="mx-auto">
          <v-textarea
            v-model="inputTxt"
            outlined
            label="メモ内容"
            width="300px"
            height="300px"
          />
        </v-card>
      </v-card-title>
      <v-card-actions class="text-right">
        <v-btn icon color="grey darken-3" @click="addMemo">
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import firebase, { db } from '@/plugins/firebase'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Add',
  data() {
    return {
      inputTxt: '',
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async addMemo() {
      const reqUrl = process.env.VUE_APP_API_URL
      const textObj = { input_text: this.inputTxt }
      const newMemoRef = db.collection('memos').doc()
      await axios
        .post(reqUrl, textObj, {
          headers: {
            // eslint-disable-next-line
            'accept': 'application/json',
            // eslint-disable-next-line
            'Access-Control-Allow-Origin': '*',
            // eslint-disable-next-line
            'Content-Type': 'application/json'
            // eslint-disable-next-line
          }
        })
        .then(res => {
          newMemoRef
            .set({
              userId: this.user.uid,
              memoId: newMemoRef.id,
              input: this.inputTxt,
              date: firebase.firestore.Timestamp.now(),
              replyTexts: res.data.replies,
            })
            .then(() => {
              this.inputTxt = ''
            })
            .catch(() => {})
        })
    },
  },
}
</script>
