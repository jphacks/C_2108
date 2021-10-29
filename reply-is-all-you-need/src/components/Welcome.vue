<template>
  <v-app>
    <v-main>
      <v-container class="bg fill-height" fluid>
        <v-row class="text-h3" align="center" justify="center">
          Reply is all you need
        </v-row>
        <v-row align="center" justify="center">
          <button-google-login />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import ButtonGoogleLogin from '@/components/ButtonGoogleLogin.vue'

export default {
  name: 'Welcome',
  components: {
    ButtonGoogleLogin,
  },
  data() {
    return {}
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push({ name: 'Home' })
      }
    })
  },
  methods: {},
}
</script>

<style>
/* .bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
} */
.bg {
  height: 100vh; /* 全画面表示 */

  background: linear-gradient(
    to bottom left,
    rgba(0, 5, 30, 0.8),
    rgba(25, 32, 72, 0.7)
  );
  /* background-image: url('@/assets/background.jpeg'); */
}
</style>
