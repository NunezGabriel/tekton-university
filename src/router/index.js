import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentHomeView from '../views/StudentHomeView.vue'
import AdminHomeView from '../views/AdminHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/student-home',
      component: StudentHomeView
    },
    {
      path: '/admin-home',
      component: AdminHomeView
    }
  ]
})

export default router
