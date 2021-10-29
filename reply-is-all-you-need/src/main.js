import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import store from '@/store/store'
import firebase from '@/plugins/firebase'
import router from '@/router'
import moment from 'moment'
// UIコンポーネントの読み込み
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

Vue.use(moment)
Vue.use(Vuex)

new Vue({
  vuetify,
  router,
  store,
  firebase,
  render: h => h(App),
}).$mount('#app')
