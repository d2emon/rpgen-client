import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Worlds from '@/components/Worlds'
import CharGen from '@/components/CharGen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/worlds',
      name: 'Worlds',
      component: Worlds
    },
    {
      path: '/character',
      name: 'CharGen',
      component: CharGen
    }
  ]
})
