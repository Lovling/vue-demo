// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from 'flexible.js'
import fastClick from 'fastclick'
import Cube from 'cube-ui'

Vue.config.productionTip = false
flexible(750, 640)
fastClick.attach(document.body)
Vue.use(Cube)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
