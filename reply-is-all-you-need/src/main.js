import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase'

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: 'AIzaSyDw8BWCt1m9zcjYc_sIvPngZeqFvnGiweg',
  authDomain: 'reply-is-all-you-need.firebaseapp.com',
  projectId: 'reply-is-all-you-need',
  storageBucket: 'reply-is-all-you-need.appspot.com',
  messagingSenderId: '844962270949',
  appId: '1:844962270949:web:f2fa37d5dbe750ed674e0c',
  measurementId: 'G-9SP9QYRXKC',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
}).$mount('#app')
