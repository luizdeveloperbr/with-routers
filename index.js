import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)
new Vue({
  router,
  render: h => h(App)
 }).$mount('#app')