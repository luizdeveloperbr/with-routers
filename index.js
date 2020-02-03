import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// Vuefire
import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)
// vue-flat-pickr-component
import VueFlatPickr from 'vue-flatpickr-component'
Vue.use(VueFlatPickr)

new Vue({
  router,
  render: h => h(App)
 }).$mount('#app')