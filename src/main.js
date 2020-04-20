import Vue from 'vue'
import App from './views/App.vue'
import router from './core/router'
import store from './core/store'
import initVue from './core'

Vue.config.productionTip = false

initVue({
  router,
  store,
  App
})
