<script setup>
import { RouterLink } from 'vue-router'
import { courses } from '../../data'
</script>

<script>
export default {
  data() {
    const id = this.$route.params.id

    const course = courses.filter((course) => course.code == id)

    console.log(course)
    return {
      id,
      link: '',
      course: course[0],
      code: course[0].code,
      name: course[0].name,
      summary: course[0].summary,
      professor: course[0].professor
    }
  },
  methods: {
    handdleUpdateCourse(code) {
      if (this.code == '' || this.name == '' || this.summary == '' || this.professor == '') {
        return alert('All blanks are required.')
      } else {
        this.link = '/courses-managment'
        for (let i = 0; i < courses.length; i++) {
          if (courses[i].code == code) {
            courses[i] = {
              code: this.code,
              name: this.name,
              summary: this.summary,
              professor: this.professor
            }
          }
        }
      }
    }
  }
}
</script>

<template>
  <section class="w-[300px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
    <div class="mb-5">
      <div className="bg-clases h-48 text-white rounded-xl overflow-hidden">
        <div
          className="h-full backdrop-blur-lg flex items-center justify-center flex-col gap-3 px-5"
        >
          <i class="lni lni-users text-5xl" />
          <h2 className="text-3xl font-semibold text-center">Edit Information</h2>
        </div>
      </div>
    </div>
    <div
      class="font-bold bg-white w-full drop-shadow-2xl gap-7 flex-col md:flex-row md:items-center md:justify-center flex py-6 px-12 rounded-xl"
    >
      <div>
        <div>
          <p class="font-normal">Code</p>
          <!-- <input type="text" :value=course.code class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"> -->
          <input
            type="text"
            v-model="code"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
        <div>
          <p class="font-normal">Name</p>
          <input
            type="text"
            v-model="name"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
      </div>
      <div>
        <div>
          <p class="font-normal">Summary</p>
          <input
            type="text"
            v-model="summary"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
        <div>
          <p class="font-normal">Professor:</p>
          <input
            type="text"
            v-model="professor"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
      </div>
      <RouterLink :to="link" class="w-full max-w-[200px]">
        <button
          v-on:click="handdleUpdateCourse(course.code)"
          class="transition ease-in duration-100 md:hover:bg-[#66e7da] w-full max-w-[200px] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]"
        >
          Done
        </button>
      </RouterLink>
    </div>
  </section>
</template>
