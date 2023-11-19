<script setup>
import { faker } from '@faker-js/faker'
</script>
<script>
import CoursesRegister from './CoursesRegister.vue'
import { RouterLink } from 'vue-router'
import { students } from '../../data'
export default {
  data() {
    const name = faker.person.firstName()

    const lastname = faker.person.lastName()

    const birthdateFaker = new Date(faker.date.birthdate())
    const year = birthdateFaker.getFullYear()
    const month = birthdateFaker.getMonth() + 1
    const day = birthdateFaker.getDate()
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const age = currentYear - year

    const address = faker.location.streetAddress({ useFullAddress: true })

    console.log(name, lastname)
    console.log(formattedDate)
    console.log(age)
    console.log(address)

    return {
      dni: '',
      name,
      lastname,
      birthdate: formattedDate,
      age,
      address,
      link: ''
    }
  },
  methods: {
    addStudent() {
      console.log(this.dni.toString().length)
      if (this.dni.toString().length !== 8) {
        return alert('Your DNI needs to be 8 characters long. Try again.')
      } else {
        this.link = '/courses-register'

        students.push({
          dni: this.dni,
          name: this.name,
          lastname: this.lastname,
          birthdate: this.birthdate,
          age: this.age,
          address: this.address,
          courses: []
        })
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
          <h2 className="text-3xl font-semibold text-center">
            Enter your information to continue with registration
          </h2>
        </div>
      </div>
    </div>
    <div
      class="font-bold bg-white w-full md:h-[200px] border border-black drop-shadow-2xl gap-7 flex-col flex py-6 px-12 md:flex-row md:justify-center md:items-center rounded-xl"
    >
      <div>
        <p class="font-normal">Choose your semester</p>
        <select
          name="select"
          class="w-full mb-5 border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light"
        >
          <option class="font-light" value="2023-1" selected>2023-1</option>
          <option class="font-light" value="2023-2">2023-2</option>
          <option class="font-light" value="2024-1">2024-1</option>
          <option class="font-light" value="2024-2">2024-2</option>
          <option class="font-light" value="2025-1">2025-1</option>
        </select>
      </div>
      <div>
        <p class="font-normal">Enter your DNI</p>
        <input
          v-model="dni"
          type="number"
          class="w-full border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"
        />
      </div>
      <RouterLink :to="link">
        <button
          v-on:click="addStudent"
          class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]"
        >
          Continue
        </button>
      </RouterLink>
    </div>
  </section>
</template>
