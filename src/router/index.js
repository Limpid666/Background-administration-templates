import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Layout from '../components/layout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    // redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => {
          import('../views/home')
        }
      },
      {
        path: 'home',
        name: 'home',
        component: () => {
          import('../views/home')
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
