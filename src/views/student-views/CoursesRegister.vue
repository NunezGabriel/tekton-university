<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="w-[300px] lg:w-[1000px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
        <h1 class="font-light leading-normal text-center md:mt-[100px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">Welcome Tekton Student</h1>
        <div class="font-bold  bg-white w-full  drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 ">
            <h1 class="font-medium">Student Data</h1>
            <div class="gap-4 flex flex-col md:flex-row md:justify-center md:gap-10">
                <h1 class="font-normal">DNI: <p class="font-light">DNI traqueado</p></h1>
                <h1 class="font-normal">Name: <p class="font-light">nombre traqueado</p></h1>
                <h1 class="font-normal">Lastname: <p class="font-light">apelllido traqueado</p></h1>
                <h1 class="font-normal">Birthdate: <p class="font-light">nac traqueado</p></h1>
                <h1 class="font-normal">Age: <p class="font-light">edad traqueado</p></h1>
                <h1 class="font-normal">Address: <p class="font-light">direccion traqueado</p></h1>
            </div>
        </div>

        <div class="font-bold  bg-white w-full  drop-shadow-2xl gap-7 flex-col flex md:py-6 md:px-12 p-4 mt-10 mb-16">
            <h1 class="font-medium">Choose the courses you want to enroll in</h1>
            <div class="flex flex-col gap-4 md:gap-10 ">

                <div class="md:h-14 h-12 w-full border border-black rounded-xl md:p-4 p-2 flex gap-2 items-center justify-between">
                    <div class="flex gap-6 ">
                        <h1 class="hidden font-normal md:flex gap-1">Course: <p class="font-light">course traqueado</p></h1>
                        <h1 class="hidden font-normal md:flex gap-1">Teacher in charge: <p class="font-light">teacher traqueado</p></h1>
                        <h1 class="font-normal md:hidden">Course Name</h1>
                    </div>
                    <button class="font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
                        Select
                     </button>
                </div>  

                <div class="md:h-14 h-12 w-full border border-black rounded-xl md:p-4 p-2 flex gap-2 items-center justify-between">
                    <div class="flex gap-6 ">
                        <h1 class="hidden font-normal md:flex gap-1">Course: <p class="font-light">course traqueado</p></h1>
                        <h1 class="hidden font-normal md:flex gap-1">Teacher in charge: <p class="font-light">teacher traqueado</p></h1>
                        <h1 class="font-normal md:hidden">Course Name</h1>
                    </div>
                    <button class="font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
                        Select
                     </button>
                </div>  

                <div class="md:h-14 h-12 w-full border border-black rounded-xl md:p-4 p-2 flex gap-2 items-center justify-between">
                    <div class="flex gap-6 ">
                        <h1 class="hidden font-normal md:flex gap-1">Course: <p class="font-light">course traqueado</p></h1>
                        <h1 class="hidden font-normal md:flex gap-1">Teacher in charge: <p class="font-light">teacher traqueado</p></h1>
                        <h1 class="font-normal md:hidden">Course Name</h1>
                    </div>
                    <button class="font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
                        Select
                     </button>
                </div>  

            </div>

        </div>
    </section>
</template>