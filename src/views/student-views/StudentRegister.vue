<script >
    import CoursesRegister from './CoursesRegister.vue';
    import { RouterLink } from 'vue-router';
    import { students } from '../../data';
    export default {
        data() {
            return {
            dni: "",
            };
        },
        methods:{
            addStudent(){
                console.log(students);
                students.push({
                    dni: this.dni,
                    name: 'joao',
                    lastname: 'cancelo',
                    birthdate: '23/05/2004',
                    age: 19,
                    address: 'pueblo paleta',
                    courses: []
                })
                console.log(students);
            }
        }
    };
</script>




<template>
    <section class="w-[300px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
    <h1 class="font-light leading-normal text-center md:mt-[100px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">Enter your information to continue with registration</h1>
    <div class="font-bold  bg-white w-full md:h-[200px] drop-shadow-2xl gap-7 flex-col flex py-6 px-12 md:flex-row md:justify-center md:items-center">
        <div>
        <h1 class="font-normal">Choose your semester</h1>
        <select name="select" class="w-full mb-5 border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light">
            <option class="font-light" value="2023-1" selected >2023-1</option>
            <option class="font-light" value="2023-2">2023-2</option>
            <option class="font-light" value="2024-1">2024-1</option>
            <option class="font-light" value="2024-2">2024-2</option>
            <option class="font-light" value="2025-1">2025-1</option>
        </select>
        </div>
        <div>
            <h1 class="font-normal">Enter your DNI</h1>
             <input v-model="dni" type="number" class="w-full border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
        </div>
        <RouterLink to="/courses-register">
            <button v-on:click="addStudent" class="transition ease-in duration-100 md:hover:bg-[#66e7da] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
                Continue
            </button>
        </RouterLink>
    </div>
    </section>
</template>