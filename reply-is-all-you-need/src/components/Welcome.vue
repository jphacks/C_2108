<template>
  <v-app>
    <v-main>
      <v-container class="bg fill-height" fluid>
        <v-row class="text-h3" align="center" justify="center">
          Reply is all you need
        </v-row>
        <v-row align="center" justify="center">
          <v-progress-circular
            v-show="isLoading"
            :size="70"
            :width="7"
            color="white"
            indeterminate
          />
        </v-row>
        <v-row align="center" justify="center">
          <v-container>
            <v-row>
              <v-col>
                <img
                  :src="googleButtonRef"
                  class="google-button"
                  @click="googleLogin"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  name: 'Welcome',
  components: {},
  data() {
    return {
      isLoading: false,
      googleButtonRef: require('@/assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png'),
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push({ name: 'Home' })
      }
    })
  },
  methods: {
    googleLogin() {
      this.isLoading = true
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    },
  },
}
</script>

<style>
.bg {
  height: 100%; /* 全画面表示 */

  background: linear-gradient(
    to bottom left,
    rgba(0, 5, 30, 0.8),
    rgba(25, 32, 72, 0.7)
  );
  /* background-image: url('@/assets/background.jpeg'); */
}
.google-button {
  cursor: pointer;
}
</style>
