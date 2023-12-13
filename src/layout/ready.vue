<template>
    <div class="container bg-coral px-[24px] py-[83px]   sm:px-[40px] xl:px-[165px] relative">
        <div class="sm:flex items-center justify-between">
            <h1 class="text-center text-state font-bold text-[32px] leading-[32px] xl:text-[48px] ">Ready to get started?</h1>
            <button class="text-state border-[2px] border-state rounded-[24px] py-[10px] px-[33px] mx-auto sm:mx-0 block mt-[24px]">
                <router-link to="/contact">contact us</router-link>
            </button>
        </div>
        <div class="absolute w-[200px] left-0 bottom-0">
            <img src="../assets/ready.svg" alt="ready">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>