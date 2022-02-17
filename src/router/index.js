import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About.vue')
  },
  {
    path: '/DOTA2jia',
    name: 'DOTA2jia',
    component: () => import('../views/DOTA2jia/DOTA2jia.vue')
  },
  {
    path: '/speech',
    name: 'Speech',
    component: () => import('../views/Speech/Speech.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
