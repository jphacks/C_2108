<template>
  <v-app id="app">
    <div class="bg">
      <v-app-bar dark shrink-on-scroll prominent fade-img-on-scroll app>
        <template #img="{ props }">
          <v-img
            v-bind="props"
            gradient="to bottom left, rgba(0,5,30,.8), rgba(25,32,72,.7)"
          />
        </template>
        <v-app-bar-title class="home">Reply is All you need</v-app-bar-title>
        <v-spacer />
        <v-btn class="mt-3" text>
          log out
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-dialog v-model="dialog">
          <template #activator="{ on, attrs }">
            <v-btn
              class="mb-12"
              color="pink"
              v-bind="attrs"
              fixed
              bottom
              dark
              absolute
              right
              fab
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>

          <Add />
        </v-dialog>

        <Timeline />
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
      dialog: false,
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
.bg::before {
  content: '';
  /* ↓暗いオーバーレイを半透明で配置 */
  background-color: rgba(0, 0, 0, 0.6);
  /* ↓全体を覆うように配置 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.bg {
  height: 100vh; /* 全画面表示 */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url('@/assets/background.jpeg');
}
</style>
