<script setup>
    import { RouterLink } from 'vue-router';
    import { students, courses } from '../../data';

    const {dni, name, lastname, birthdate, age, address} = students[students.length-1]

</script>

<template>
    <section class="w-[300px] lg:w-[1000px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
        <h1 class="font-light leading-normal text-center md:mt-[100px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">Welcome Tekton Student</h1>
        <div class="font-bold  bg-white w-full  drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 ">
            <h1 class="font-medium">Student Data</h1>
            <div class="gap-4 flex flex-col md:flex-row md:justify-center md:gap-10">
                <h1 class="font-normal">DNI: <p class="font-light">{{ dni }}</p></h1>
                <h1 class="font-normal">Name: <p class="font-light">{{ name }}</p></h1>
                <h1 class="font-normal">Lastname: <p class="font-light">{{ lastname }}</p></h1>
                <h1 class="font-normal">Birthdate: <p class="font-light">{{ birthdate }}</p></h1>
                <h1 class="font-normal">Age: <p class="font-light">{{ age }}</p></h1>
                <h1 class="font-normal">Address: <p class="font-light">{{ address }}</p></h1>
            </div>
        </div>

        <div class="font-bold  bg-white w-full  drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 mt-10 mb-16">
            <h1 class="font-medium">Choose the courses you want to enroll in</h1>

            <div class="flex flex-col gap-4 md:gap-10 "> <!--doinde se reenderean los cursos--> 

                <div v-for="course in courses" class="md:h-14 h-12 w-full border border-black rounded-xl md:p-4 p-2 flex gap-2 items-center justify-between">
                    <div class="flex gap-6 ">
                        <h1 class="hidden font-normal md:flex gap-1">Course: <p class="font-light">{{ course.name }}</p></h1>
                        <h1 class="hidden font-normal md:flex gap-1">Professor in charge: <p class="font-light">{{ course.professor }}</p></h1>
                        <h1 class="font-normal md:hidden">{{ course.name }}</h1>
                    </div>
                    <button class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
                        Select
                     </button>
                </div>  

            </div>

            <RouterLink class="mx-auto w-full max-w-[500px]" to="/registered-students">
                <button class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl w-full max-w-[500px] h-[45px] px-4 bg-[#034752] text-[#e6edee]">
                    REGISTER
                </button>
            </RouterLink>
        </div>
    </section>
</template>