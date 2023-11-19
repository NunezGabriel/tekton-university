<script setup>
    import { students } from '../../data';
</script>


<template>
    <section class="w-[300px] lg:w-[1000px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
        <div class="mb-5">
      <div className="bg-clases h-48 text-white rounded-xl overflow-hidden">
        <div
          className="h-full backdrop-blur-lg flex items-center justify-center flex-col gap-3 px-5"
        >
          <i class="lni lni-happy text-5xl" />
          <h2 className="text-3xl font-semibold text-center">Registered Students</h2>
        </div>
      </div>
    </div>
        <div v-for="student in students" class="font-bold md:gap-10  bg-white w-fdivl  drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 mt-10 mb-16 items-center md:flex-row rounded-xl">
            <img class="h-[150px] w-[150px]" src="../../assets/registered.png" alt="admin image">
            <div class="flex gap-5">
                <div class="grid gap-4">
                    <p class="font-light "><p class="font-normal">Name: </p>{{ student.name }}</p>
                    <p class="font-light "><p class="font-normal">Lastname: </p>{{ student.lastname }}</p>
                </div>
                <div class="grid gap-4">
                    <p class="font-light "><p class="font-normal">DNI: </p>{{ student.dni }}</p>
                    <p class="font-light "><p class="font-normal">age: </p>{{ student.age }}</p>
                </div>
            </div>
            <div class="hidden md:flex md:flex-col flex-wrap">
                <h1 class="font-normal">Courses</h1>
                <div class="flex flex-wrap font-light gap-4">
                    <div class="text-md px-3 py-1 font-normal text-white bg-[#034752] w-fit rounded-md" v-for="course in student.courses">{{ course }}</div>
                </div>
            </div>
        </div>

        <RouterLink class="w-full flex justify-center" to="/">
            <button class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl w-full max-w-[500px] h-[45px] px-4 bg-[#034752] text-[#e6edee] mb-10">
                Go Home
            </button>
        </RouterLink>
    </section>
</template>