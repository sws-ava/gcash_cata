import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
