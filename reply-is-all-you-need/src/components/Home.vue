<template>
  <v-app id="app">
    <Appbar />
    <v-main>
      <Add />
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import Appbar from '@/components/Appbar.vue'
import Add from '@/components/Add.vue'

export default {
  name: 'App',
  components: {
    Appbar,
    Add,
  },
  data() {
    return {
      googleButtonRef: require('@/assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png'),
    }
  },
  mounted() {},
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => console.log('Sign out.'))
    },
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
  margin-top: 60px;
}
</style>
