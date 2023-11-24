import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ExercisePage from '../views/ExercisePage.vue'
import AboutPage from '../views/AboutPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
  },
  {
    path: '/chooseexercise/:id',
    name: 'chooseExercise',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChooseExercises.vue'),
  },
  {
    path: '/chooseexercise/:id/:idSmell',
    name: 'exercisePage',
    component: ExercisePage
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
