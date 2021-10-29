<template>
  <v-container>
    <v-btn rounded color="grey lighten-4" @click="updateComments">
      リスト更新
    </v-btn>
    <v-list>
      <template v-for="(comment, index) in comments">
        <v-divider :key="index" />
        <v-list-item :key="index">
          <v-row>
            <v-list-item-content color="grey lighten-4">
              <v-card-title class="justify-center">
                {{ comment.input }}
              </v-card-title>

              <v-list-item-action class="text-right">
                <v-row justify="space-between">
                  <v-col cols="2">
                    <v-btn
                      icon
                      color="grey darken-3"
                      @click="showReply(comment.date)"
                    >
                      <v-icon>mdi-comment-outline</v-icon></v-btn
                    >
                  </v-col>
                  <v-col cols="2">
                    <v-btn icon @click="deleteMemo(comment.date)">
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col align-self="center">
                    <v-list-item-subtitle class="text-right">
                      {{ comment.date }}
                    </v-list-item-subtitle>
                  </v-col>
                  <v-col cols="1" />
                </v-row>
              </v-list-item-action>
            </v-list-item-content>
            <v-card color="grey lighten-3">
              <div v-show="reply" v-if="id == comment.date">
                <v-card-text class="justify-center">ハロー！</v-card-text>
              </div>
            </v-card>
          </v-row>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import { db } from '@/plugins/firebase'
import moment from 'moment'

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
            const comment = doc.data()
            comment.date = moment(doc.data().date.toDate()).format(
              'YYYY/MM/DD hh:mm:ss'
            )
            this.comments.push(comment)
          })
        })
    },
    showReply: function(date) {
      this.reply = !this.reply
      // this.id = moment(date.toDate()).format()
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
