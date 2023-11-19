<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1 class="font-light text-center md:mt-[130px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">
    Please identify yourself
  </h1>

  <section class="w-[300px] md:w-[800px] md:flex-row mx-auto flex flex-col gap-8 mb-10">
    <RouterLink
      to="/student-home"
      class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex justify-center items-center rounded-xl"
    >
      <img class="h-[150px] w-[150px]" src="../assets/student.png" alt="student image" />
      <h1>STUDENT</h1>
    </RouterLink>

    <!--COMPLETAR LA RUTA-->
    <RouterLink
      to="/admin-home"
      class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex justify-center items-center rounded-xl"
    >
      <img class="h-[150px] w-[150px]" src="../assets/admin.png" alt="admin image" />
      <h1>ADMIN</h1>
    </RouterLink>
  </section>
</template>
