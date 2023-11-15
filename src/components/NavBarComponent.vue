<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="z-10 w-full h-[56px] bg-[#034752] flex items-center justify-center drop-shadow-lg sticky top-0">
        <div class="flex items-center justify-center md:justify-between max-w-[2000px] w-full px-5 md:px-7">
            <RouterLink to="/">
                <img class="md:h-[30px] h-[30px]" src="../assets/tekton.png" alt="student image">
            </RouterLink>
            <section class="md:flex gap-10 hidden">
                <a href="https://www.tektonlabs.com">
                    <img class="h-[30px] w-[30px]" src="../assets/web.png" alt="student image">
                </a>
                <a href="https://www.instagram.com/tektonlabs/">
                    <img class="h-[30px] w-[30px]" src="../assets/instagram.png" alt="student image">
                </a>
                <a href="https://twitter.com/tektonlabs">
                    <img class="h-[30px] w-[30px]" src="../assets/x.png" alt="student image">
                </a>
                <a href="https://www.linkedin.com/company/tekton-labs/">
                    <img class="h-[30px] w-[30px]" src="../assets/linkedin.png" alt="student image">
                </a>
            </section>
        </div>
    </nav>
</template>
