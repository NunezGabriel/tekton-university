<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="w-[300px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
    <h1 class="font-light leading-normal text-center md:mt-[100px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">Edit Courses Info</h1>
    <div class="font-bold  bg-white w-full drop-shadow-2xl gap-7 flex-col md:flex-row md:items-center md:justify-center flex py-6 px-12">
        <div class="">
            <div>
            <h1 class="font-normal">Code</h1>
             <input type="text" class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Name</h1>
                <input type="text" class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
        </div>
        <div>
            <div>
            <h1 class="font-normal">Description</h1>
             <input type="text" class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Professor</h1>
                <input type="text" class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
        </div>
       <RouterLink to="/courses-managment" class="w-full max-w-[200px]">
        <button class="transition ease-in duration-100 md:hover:bg-[#66e7da] w-full max-w-[200px] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
            Done
        </button>
       </RouterLink>

    </div>
    </section>
</template>