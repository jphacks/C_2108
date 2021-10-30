import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from '@/plugins/firebase'

import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         next()
//       } else {
//         next({ name: 'Welcome' })
//       }
//     })
//   }
// })
export default router
