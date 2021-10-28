import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
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
//     if (store.state.user !== null) {
//       next()
//     } else {
//       next({ name: 'SignIn' })
//     }
//   } else {
//     next()
//   }
// })

export default router
