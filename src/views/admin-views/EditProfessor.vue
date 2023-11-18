<script setup>
    import { RouterLink } from 'vue-router';
    import { professors } from '../../data';
</script> 

<script>
export default {
  data() {
    const id = this.$route.params.id;

    const professor = professors.filter((professor)=> professor.dni == id)

    console.log(professor);
    return {
      id,
      professor: professor[0],
      dni: professor[0].dni,
      name: professor[0].name,
      lastname: professor[0].lastname,
      birthdate: professor[0].birthdate,
      age: professor[0].age,
      profession: professor[0].profession,
    };
  },
  methods: {
        handdleUpdateProfessor(dni){
            console.log(professors);
            for(let i = 0; i < professors.length; i++) {
                if(professors[i].dni == dni) {
                    professors[i] = {
                        dni: this.dni,
                        name: this.name,
                        lastname: this.lastname,
                        birthdate: this.birthdate,
                        age: this.age,
                        profession: this.profession,
                    }
                }
                console.log('->', professors);
            }
        }
    }
};
</script>

<template>
    <section class="w-[300px] md:w-[800px] md:flex-row md:mt-[100px] mx-auto mt-10">
    <h1 class="font-light leading-normal text-center md:mt-[100px] md:mb-[80px] mb-10 mt-10 text-2xl md:text-[50px]">Edit Professor Info</h1>
    <div class="font-bold  bg-white w-full drop-shadow-2xl gap-7 flex-col md:flex-row md:items-center md:justify-center flex py-6 px-12">
        <div class="">
            <div>
            <h1 class="font-normal">DNI</h1>
             <input type="text" v-model=dni class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Name</h1>
                <input type="text" v-model=name class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Lastname</h1>
                <input type="text" v-model=lastname class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
        </div>
        <div>
            <div>
            <h1 class="font-normal">Birthday</h1>
             <input type="text" v-model=birthdate class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Age</h1>
                <input type="text" v-model=age class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
            <div>
                <h1 class="font-normal">Profession</h1>
                <input type="text" v-model=profession class="w-full max-w-[200px] border border-[#034752] outline-none rounded-xl h-[35px] px-4 font-light mb-5">
            </div>
        </div>
       <RouterLink to="/professors-managment" class="w-full max-w-[200px]">
        <button v-on:click="handdleUpdateProfessor(professor.dni)" class="transition ease-in duration-100 md:hover:bg-[#66e7da] w-full max-w-[200px] font-normal rounded-xl h-[35px] px-4 bg-[#034752] text-[#e6edee]">
            Done
        </button>
       </RouterLink>

    </div>
    </section>
</template>