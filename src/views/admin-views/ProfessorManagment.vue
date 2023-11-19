<script setup>
import { professors } from '../../data'
</script>

<template>
  <section class="w-[300px] lg:w-[1000px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
    <div class="mb-5">
      <div className="bg-clases h-48 text-white rounded-xl overflow-hidden">
        <div
          className="h-full backdrop-blur-lg flex items-center justify-center flex-col gap-3 px-5"
        >
          <i class="lni lni-users text-5xl" />
          <h2 className="text-3xl font-semibold text-center">Professors Management</h2>
        </div>
      </div>
    </div>

    <div
      v-for="professor in professors"
      class="font-bold md:gap-10 bg-white w-fdivl drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 mt-10 mb-16 items-center md:flex-row justify-between rounded-xl"
    >
      <div class="flex flex-col md:flex-row md:gap-14 items-center">
        <img class="h-[150px] w-[150px]" src="../../assets/avatar.png" alt="admin image" />
        <div class="flex md:flex items-center gap-10">
          <div class="flex flex-col gap-5">
            <h4 class="font-normal">
              <p class="font-medium">DNI:</p>
              {{ professor.dni }}
            </h4>
            <h4 class="font-normal">
              <p class="font-medium">Name:</p>
              {{ professor.name }}
            </h4>
            <h4 class="font-normal">
              <p class="font-medium">Lastname:</p>
              {{ professor.lastname }}
            </h4>
          </div>
          <div class="flex flex-col gap-5">
            <h4 class="font-normal">
              <p class="font-medium">Birthdate:</p>
              {{ professor.birthdate }}
            </h4>
            <h4 class="font-normal">
              <p class="font-medium">Age:</p>
              {{ professor.age }}
            </h4>
            <h4 class="font-normal">
              <p class="font-medium">Profession:</p>
              {{ professor.profession }}
            </h4>
          </div>
        </div>
      </div>

      <RouterLink :to="/edit-professors/ + professor.dni">
        <button
          class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl w-[180px] h-[45px] px-4 bg-[#034752] text-[#e6edee]"
        >
          Edit
        </button>
      </RouterLink>
    </div>

    <RouterLink class="w-full flex justify-center" to="/">
      <button
        class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl w-full max-w-[500px] h-[45px] px-4 bg-[#034752] text-[#e6edee] mb-10"
      >
        Go Home
      </button>
    </RouterLink>
  </section>
</template>
