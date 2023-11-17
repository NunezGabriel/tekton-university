<script setup>
    import { courses } from '../../data';
</script>

<template>
    <section class="w-[300px] lg:w-[1000px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
        <h1 class="font-light leading-normal text-center md:mt-[100px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">Courses Managment</h1>
        <div v-for="course in courses">
            <div  class="font-bold md:gap-10  bg-white w-fdivl  drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 mt-10 mb-16 items-center md:flex-row justify-between">
            <div class="flex md:gap-14 items-center">
                <img class="h-[150px] w-[150px]" src="../../assets/book.png" alt="admin image">
                <div class="md:flex items-center gap-10">
                    <div>
                        <h1 class="font-normal ">{{ course.code }}</h1>
                        <h1 class="font-normal ">{{ course.name }} </h1>
                    </div>
                    <div>
                        <h1 class="font-normal hidden md:block">{{ course.summary }}</h1>
                        <h1 class="font-normal ">{{ course.professor }}</h1>                
                    </div>
                </div>
            </div>

            <RouterLink class="" :to="/edit-courses/ + course.code">
                <button class=" transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl w-[180px]  h-[45px] px-4 bg-[#034752] text-[#e6edee] ">
                    Edit
                </button>
            </RouterLink>
        </div>
        </div>


        <RouterLink class="w-full flex justify-center" to="/">
            <button class=" transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl w-full max-w-[500px] h-[45px] px-4 bg-[#034752] text-[#e6edee] mb-10">
                Go Home
            </button>
        </RouterLink>
    </section>
</template>