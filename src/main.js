import Vue from 'vue'

import Host from '@/containers/Host'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/index.scss'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(Host)
})
