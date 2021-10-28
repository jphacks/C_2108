<template>
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
</template>
<script>
import firebase from '@/plugins/firebase'

export default {
  name: 'Home',
  data() {
    return {
      googleButtonRef: require('@/assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png'),
    }
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    },
  },
}
</script>

<style scoped>
.google-button {
  cursor: pointer;
}
</style>
