import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/store'

import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/welcome',
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user !== null) {
      next()
    } else {
      next({ name: 'Welcome' })
    }
  } else {
    next()
  }
})

export default router
