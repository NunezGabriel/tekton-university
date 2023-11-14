<template>
    <NavComponent/>
    <section class="w-[300px] md:w-[800px] md:flex-row md:mt-[200px] mx-auto mt-10 flex flex-col gap-8">
        <div class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex justify-center items-center">
            <img class="h-[150px] w-[150px]" :src="imagen" alt="student image">
            <h1>STUDENT</h1>
        </div>

        <div class="transition ease-in-out md:hover:-translate-y-3 font-bold bg-white w-full h-[250px] drop-shadow-2xl gap-3 flex-col flex justify-center items-center">
            <img class="h-[150px] w-[150px]" :src="imagen2" alt="admin image">
            <h1>ADMIN</h1>
        </div>
    </section>
</template>

<script>
    import NavComponent from "../components/NavComponent.vue"
    export default {
    name: "PrincipalPage",
    components: {
        NavComponent
    },
    data() {
    return {
      imagen: require('../assets/student.png'),
      imagen2: require('../assets/admin.png')
    };
  }
}
</script>