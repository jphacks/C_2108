<template>
  <v-app id="app">
    <div class="bg">
      <v-app-bar
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        app
      >
        <template #img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          />
        </template>
        <v-app-bar-title>Reply is All you need</v-app-bar-title>
        <v-spacer />
        <v-btn class="mt-3" text>
          Add memo
        </v-btn>
      </v-app-bar>
      <v-main>
        <Add />
        <Timeline />
        <v-btn class="mb-12" color="pink" fixed bottom dark absolute right fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import Add from '@/components/Add.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'App',
  components: {
    Add,
    Timeline,
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
        .then()
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
.bg {
  background-image: url('@/assets/background.jpeg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}
</style>
