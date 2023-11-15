<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="w-[300px] md:w-[800px] md:flex-row md:mt-[200px] mx-auto mt-10 flex flex-col gap-8">
    <RouterLink to="/professors-managment" class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex  items-center p-5">
        <h1 class="">PROFESSOR MANAGEMENT</h1>
        <img class="h-[140px] w-[140px]" src="../assets/teacher-managment.png" alt="teacher card image">
    </RouterLink>

    <RouterLink to="/courses-managment" class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex items-center
    p-5">
        <h1 class="">COURSE MANAGEMENT</h1>
        <img class="h-[140px] w-[140px]" src="../assets/courses.png" alt="books image">
    </RouterLink>
    </section>
</template>