<template>
  <div>
    <v-card
      width="100%"
      height="100%"
      class="mx-auto"
      :loading="isLoading"
      color="rgba(255, 255, 240, 1)"
    >
      <v-card-title class="justify-center">
        <v-textarea
          v-model="inputTxt"
          outlined
          no-resize
          :disabled="!availableInputTextArea"
          label="メモ内容"
          width="300px"
          height="200px"
        />
      </v-card-title>
      <v-card-actions class="justify-end align-end">
        <v-btn
          :disabled="!availableInputTextArea"
          text
          color="grey darken-3"
          @click="addMemo"
        >
          メモをする
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
      availableInputTextArea: true,
      isLoading: false,
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async addMemo() {
      this.isLoading = true
      this.availableInputTextArea = false
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
              replyCharas: [
                {
                  characterName: 'きゅーちゃん',
                  src: require('@/assets/ai_icons/きゅーちゃん.png'),
                },
                {
                  characterName: 'こけこ',
                  src: require('@/assets/ai_icons/こけこ.png'),
                },
                {
                  characterName: 'じんべえ',
                  src: require('@/assets/ai_icons/じんべえ.png'),
                },
              ],
            })
            .then(() => {
              this.inputTxt = ''
              this.$emit('dialogClose')
            })
            .catch(() => {})
          this.isLoading = false
          this.availableInputTextArea = true
        })
    },
  },
}
</script>
