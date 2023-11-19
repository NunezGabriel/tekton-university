<script setup>
import { RouterLink } from 'vue-router'
import { professors } from '../../data'
</script>

<script>
export default {
  data() {
    const id = this.$route.params.id

    const professor = professors.filter((professor) => professor.dni == id)

    return {
      link: '',
      id,
      professor: professor[0],
      dni: professor[0].dni,
      name: professor[0].name,
      lastname: professor[0].lastname,
      birthdate: professor[0].birthdate,
      age: professor[0].age,
      profession: professor[0].profession
    }
  },
  methods: {
    handdleUpdateProfessor(dni) {
      if (
        this.dni == '' ||
        this.name == '' ||
        this.lastname == '' ||
        this.birthdate == '' ||
        this.age == '' ||
        this.profession == ''
      ) {
        return alert('All blanks are required.')
      } else {
        this.link = '/professors-managment'
        for (let i = 0; i < professors.length; i++) {
          if (professors[i].dni == dni) {
            professors[i] = {
              dni: this.dni,
              name: this.name,
              lastname: this.lastname,
              birthdate: this.birthdate,
              age: this.age,
              profession: this.profession
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
          <h2 className="text-3xl font-semibold text-center">Edit Professors' Profile</h2>
        </div>
      </div>
    </div>
    <div
      class="font-bold bg-white w-full drop-shadow-2xl gap-7 flex-col md:flex-row md:items-center md:justify-center flex py-6 px-12 rounded-xl"
    >
      <div class="">
        <div>
          <h1 class="font-normal">DNI</h1>
          <input
            type="text"
            v-model="dni"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
        <div>
          <h1 class="font-normal">Name</h1>
          <input
            type="text"
            v-model="name"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
        <div>
          <h1 class="font-normal">Lastname</h1>
          <input
            type="text"
            v-model="lastname"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
      </div>
      <div>
        <div>
          <h1 class="font-normal">Birthday</h1>
          <input
            type="text"
            v-model="birthdate"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
        <div>
          <h1 class="font-normal">Age</h1>
          <input
            type="text"
            v-model="age"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
        <div>
          <h1 class="font-normal">Profession</h1>
          <input
            type="text"
            v-model="profession"
            class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
          />
        </div>
      </div>
      <RouterLink :to="link" class="w-full max-w-[200px]">
        <button
          v-on:click="handdleUpdateProfessor(professor.dni)"
          class="transition ease-in duration-100 md:hover:bg-[#66e7da] w-full max-w-[200px] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]"
        >
          Done
        </button>
      </RouterLink>
    </div>
  </section>
</template>
