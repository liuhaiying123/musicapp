import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listview',
    name: 'listview',
    component: () => import('../views/listview.vue')
  },
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router

