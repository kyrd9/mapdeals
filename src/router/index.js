import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/containers/pages/Dashboard'
import Welcome from '@/containers/pages/Welcome'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: { opened: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const opened = to.matched[0].meta.opened === true
  if (opened === false) {
    if (store.getters['user/signed'] !== true) {
      next({name: 'welcome'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
