import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
  }, 
  {
    path: '/chooseexercise/:type',
    name: 'chooseExercise',

    component: () => import(/* webpackChunkName: "about" */ '../views/ChooseExercises.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
