import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentHomeView from '../views/StudentHomeView.vue'
import AdminHomeView from '../views/AdminHomeView.vue'
import StudentRegister from '../views/student-views/StudentRegister.vue'
import CoursesRegister from '../views/student-views/CoursesRegister.vue'
import RegisteredStudents from '../views/student-views/RegisteredStudents.vue'
import ProfessorManagment from '../views/admin-views/ProfessorManagment.vue'
import EditProfessor from '../views/admin-views/EditProfessor.vue'
import CourseManagment from '../views/admin-views/CourseManagment.vue'
import EditCourse from '../views/admin-views/EditCourse.vue'

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
    },
    {
      path: '/registered-students',
      component: RegisteredStudents
    },
    {
      path: '/professors-managment',
      component: ProfessorManagment
    },
    {
      path: '/edit-professors/:id',
      component: EditProfessor
    },
    {
      path: '/courses-managment',
      component: CourseManagment
    },
    {
      path: '/edit-courses/:id',
      component: EditCourse
    }
  ]
})

export default router
