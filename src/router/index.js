import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/pages/Login.vue';
import Home from '../views/pages/Home.vue';

import middleware from '@/middleware';

const routes = [
  {
    path: '/',
    name: 'login-page',
    component: Login,
    beforeEnter:middleware.guest
  },
  {
    path: '/home',
    name: 'home-page',
    component: Home,
    beforeEnter:middleware.user
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
