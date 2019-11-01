
import Router from 'vue-router'
import Mensal from './views/Mensal.vue'
import Interjornada from './views/Interjornada.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/mensal',
      name: 'Escala Mensal',
      component: Mensal
    },
    {
      path: '/interjornada',
      name: 'Escala de Interjornada',
      component: Interjornada
    }
  ]
})
