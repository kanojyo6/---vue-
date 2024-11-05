import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Header from '../components/Header.vue'
import Mail from '../views/Mail.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Header
    },
    {
      path: '/mail',
      name: 'mail',
      component: Mail
    },
  ]
})

export default router