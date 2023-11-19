<script setup>
import { RouterLink } from 'vue-router'
import { students, courses } from '../../data'

const { dni, name, lastname, birthdate, age, address } = students[students.length - 1]
</script>

<script>
export default {
  data() {
    return {
      selectedValues: [],
      link: ''
    }
  },

  methods: {
    toggleButton(course) {
      if (this.selectedValues.includes(course)) {
        this.selectedValues = this.selectedValues.filter(
          (courseInArray) => courseInArray !== course
        )
      } else {
        this.selectedValues.push(course)
      }
    },

    addCourses() {
      if (this.selectedValues.length == 0) {
        return alert('You must select at least 1 course to complete your registration.')
      } else {
        this.link = '/registered-students'
        students[students.length - 1].courses = this.selectedValues
      }
    }
  }
}
</script>

<template>
  <section class="w-[300px] lg:w-[1000px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
    <section class="mb-5">
      <div className="bg-clases h-48 text-white rounded-xl overflow-hidden">
        <div
          className="h-full backdrop-blur-lg flex items-center justify-center flex-col gap-3 px-5"
        >
          <i class="lni lni-home text-4xl" />
          <h2 className="text-3xl font-semibold text-center">Welcome! Tekton Student</h2>
        </div>
      </div>
    </section>
    <div
      class="font-bold bg-white w-full drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 rounded-xl"
    >
      <p class="font-medium">Student Data</p>
      <div class="gap-4 flex flex-col md:flex-row md:justify-center md:gap-10">
        <p class="font-normal">
          DNI:
          <span class="font-light">{{ dni }}</span>
        </p>
        <p class="font-normal">
          Name:
          <span class="font-light">{{ name }}</span>
        </p>
        <p class="font-normal">
          Lastname:
          <span class="font-light">{{ lastname }}</span>
        </p>
        <p class="font-normal">
          Birthdate:
          <span class="font-light">{{ birthdate }}</span>
        </p>
        <p class="font-normal">
          Age:
          <span class="font-light">{{ age }}</span>
        </p>
        <p class="font-normal">
          Address:
          <span class="font-light">{{ address }}</span>
        </p>
      </div>
    </div>

    <div
      class="font-bold bg-white w-full drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 mt-10 mb-16 rounded-xl"
    >
      <h2 class="font-medium">Choose the courses you want to enroll in</h2>

      <div class="flex flex-col gap-4 md:gap-8">
        <!--doinde se reenderean los cursos-->

        <div
          v-for="course in courses"
          class="w-full border border-black rounded-xl md:p-4 p-2 flex gap-2 items-center justify-between"
        >
          <div class="flex gap-6">
            <p class="hidden font-normal md:flex gap-1">
              Course:
              <span class="font-light">{{ course.name }}</span>
            </p>
            <p class="hidden font-normal md:flex gap-1">
              Professor in charge:
              <span class="font-light">{{ course.professor }}</span>
            </p>
            <p class="font-normal md:hidden">{{ course.name }}</p>
          </div>
          <button
            :key="course.name"
            @click="toggleButton(course.name)"
            class="transition ease-in duration-100 bg-[#034752] md:hover:bg-[#3e7982] font-normal rounded-xl h-[35px] px-4 text-[#e6edee]"
          >
            {{ selectedValues.includes(course.name) ? 'Cancel' : 'Select' }}
          </button>
        </div>
        <p>
          Selected Courses: <br /><span class="font-normal">{{
            selectedValues.length > 0 ? null : 'Not courses selected'
          }}</span>
        </p>
        <div class="w-full flex flex-wrap gap-4">
          <div
            v-for="course in selectedValues"
            class="text-md px-3 py-1 font-normal text-white bg-[#034752] w-fit rounded-md"
          >
            {{ course }}
          </div>
        </div>
      </div>

      <RouterLink class="mx-auto w-full max-w-[500px]" :to="link">
        <button
          @click="addCourses"
          class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl w-full max-w-[500px] h-[45px] px-4 bg-[#034752] text-[#e6edee]"
        >
          REGISTER
        </button>
      </RouterLink>
    </div>
  </section>
</template>
