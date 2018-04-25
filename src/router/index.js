import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'
import Simple from '@/containers/Simple'

// Views
import HelloWorld from '@/views/HelloWorld'
import Worlds from '@/views/Worlds'
import Aliens from '@/views/Aliens'
import CharGen from '@/views/CharGen'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: Full,
      children: [
        {
          path: '/home',
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
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      name: 'Auth',
      component: Simple,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})
