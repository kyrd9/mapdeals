import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import plugins from './plugins'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict,
  plugins,
  modules
})

export default store
