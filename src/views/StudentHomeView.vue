<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="w-[300px] md:w-[800px] md:flex-row md:mt-[200px] mx-auto mt-10 flex flex-col gap-8"
  >
    <RouterLink
      to="/register"
      class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex items-center p-5 rounded-xl"
    >
      <h1 class="hidden md:block">GET REGISTER</h1>
      <p class="md:hidden">Here you can register, enroll in the courses you want</p>
      <img class="h-[140px] w-[140px]" src="../assets/note.png" alt="note image" />
    </RouterLink>

    <RouterLink
      to="/registered-students"
      class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex items-center p-5 rounded-xl"
    >
      <h1 class="hidden md:block">REGISTERED STUDENTS</h1>
      <p class="md:hidden">Here you can see all the enrolled students</p>
      <img class="h-[140px] w-[140px]" src="../assets/id-card.png" alt="id card image" />
    </RouterLink>
  </section>
</template>
