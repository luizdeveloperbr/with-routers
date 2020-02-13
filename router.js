import Vue from 'vue'
import Router from 'vue-router'
import Mensal from './views/Mensal.vue'
import Interjornada from './views/Interjornada.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mensal',
      component: Mensal
    },
    {
      path: '/interjornada',
      name: 'interjornada',
      component: Interjornada
    }
  ]
})
