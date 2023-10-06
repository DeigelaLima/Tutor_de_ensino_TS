import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  
  { 
    path: '/', 
    component: HomePage 
  } 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
