<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {},
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
      } else {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.deleteLoginUser()
          })
      }
    })
  },
  methods: {
    ...mapActions(['setLoginUser', 'logout', 'deleteLoginUser']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
