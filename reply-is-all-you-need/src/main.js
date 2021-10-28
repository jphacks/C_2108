import Vue from 'vue'
import App from '@/App.vue'
import firebase from '@/plugins/firebase'
import router from '@/router'
// UIコンポーネントの読み込み
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  firebase,
  render: h => h(App),
}).$mount('#app')
