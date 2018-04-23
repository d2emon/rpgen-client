import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'
// import Empty from '@/containers/Empty'

// Views
import HelloWorld from '@/views/HelloWorld'
import Worlds from '@/views/Worlds'
import Aliens from '@/views/Aliens'
import CharGen from '@/views/CharGen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello',
      name: 'Home',
      component: Full,
      children: [
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/worlds',
          name: 'Worlds',
          component: Worlds
        },
        {
          path: '/aliens',
          name: 'Aliens',
          component: Aliens
        },
        {
          path: '/character',
          name: 'CharGen',
          component: CharGen
        }
      ]
    }
  ]
})
