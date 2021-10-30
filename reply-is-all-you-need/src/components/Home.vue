<template>
  <v-app id="app">
    <div class="bg">
      <v-app-bar
        max-height="70px"
        dark
        shrink-on-scroll
        prominent
        fade-img-on-scroll
        app
      >
        <template #img="{ props }">
          <v-img
            v-bind="props"
            gradient="to bottom left, rgba(0,5,30,.8), rgba(25,32,72,.7)"
          />
        </template>
        <v-spacer />
        <v-btn class="mt-3" text @click="logout()">
          log out
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-dialog v-model="dialog">
          <template #activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-tooltip>
                <template #activator="{ toolOn, toolAttrs }">
                  <v-btn
                    class="mb-12"
                    color="pink"
                    v-bind="toolAttrs"
                    fixed
                    bottom
                    dark
                    absolute
                    right
                    fab
                    v-on="toolOn"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </template>
          <span>メモを書く</span>
          <Add @dialogClose="dialog = false" />
        </v-dialog>

        <Timeline />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Add from '@/components/Add.vue'
import Timeline from '@/components/Timeline.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Home',
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
    logout() {
      this.deleteLoginUser()
      this.$router.push({ name: 'Welcome' })
    },
    ...mapActions(['deleteLoginUser']),
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
  min-height: 100%; /* 全画面表示 */
  background: linear-gradient(
    to bottom left,
    rgba(0, 5, 30, 0.8),
    rgba(25, 32, 72, 0.7)
  );
  /* background-image: url('@/assets/background.jpeg'); */
}
</style>
