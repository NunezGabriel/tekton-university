<script setup>
    import { RouterLink } from 'vue-router';
    import { courses } from '../../data';
</script>

<script>
    export default {
    data() {
        const id = this.$route.params.id;
        
        const course = courses.filter((course)=> course.code == id)

        console.log(course);
        return {
        id,
        course: course[0],
        code: course[0].code,
        name: course[0].name,
        summary: course[0].summary,
        professor: course[0].professor
        };

    },
    methods: {
        handdleUpdateCourse(code){
            console.log(courses);
            for(let i = 0; i < courses.length; i++) {
                if(courses[i].code == code) {
                    courses[i] = {
                        code: this.code,
                        name: this.name,
                        summary: this.summary,
                        professor: this.professor
                    }
                }
                console.log('->', courses);
            }
        }
    }
    };
</script>


<template>
    <section class="w-[300px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
    <h1 class="font-light leading-normal text-center md:mt-[100px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">Edit Courses Info</h1>
    <div class="font-bold  bg-white w-full drop-shadow-2xl gap-7 flex-col md:flex-row md:items-center md:justify-center flex py-6 px-12">
        <div class="">
            <div>
            <h1 class="font-normal">Code</h1>
             <!-- <input type="text" :value=course.code class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5"> -->
             <input type="text" v-model=code class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Name</h1>
                <input type="text" v-model=name class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
        </div>
        <div>
            <div>
            <h1 class="font-normal">Summary</h1>
             <input type="text" v-model=summary class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Professor:</h1>
                <input type="text" v-model=professor class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
        </div>
       <RouterLink to="/courses-managment" class="w-full max-w-[200px]">
        <button v-on:click="handdleUpdateCourse(course.code)" class="transition ease-in duration-100 md:hover:bg-[#66e7da] w-full max-w-[200px] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
            Done
        </button>
       </RouterLink>

    </div>
    </section>
</template>