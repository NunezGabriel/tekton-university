import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentHomeView from '../views/StudentHomeView.vue'
import AdminHomeView from '../views/AdminHomeView.vue'
import StudentRegister from '../views/student-views/StudentRegister.vue'
import CoursesRegister from '../views/student-views/CoursesRegister.vue'
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
    },
    {
      path: '/register',
      component: StudentRegister
    },
    {
      path: '/courses-register',
      component: CoursesRegister
    }
  ]
})

export default router
