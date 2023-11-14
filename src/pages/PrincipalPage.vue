<template>
    <NavComponent/>
    <section class="w-[300px] mx-auto mt-10 flex flex-col gap-8">
        <div class="bg-white w-full h-[250px]  drop-shadow-2xl">
        </div>

        <div class="bg-white w-full h-[250px]  drop-shadow-2xl">
        </div>
    </section>
</template>

<script>
    import NavComponent from "../components/NavComponent.vue"
    export default {
    name: "PrincipalPage",
    components: {
        NavComponent
    }
}
</script>