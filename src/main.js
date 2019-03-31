// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './util'
import router from './router'
import store from  './store/'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js'
import Mock from './mock'
Mock.start()

Vue.component('v-icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
