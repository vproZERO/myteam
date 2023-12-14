<template>
    <div class="container py-[48px] px-[24px] sm:py-[64px] sm:px-[40px] lg:py-[73px] xl:px-[165px] bg-green flex items-center justify-between">
        <div class="flex items-center gap-[48px] lg:gap-[80px]">

            <router-link to="/">
                <img class="w-[128px] lg:w-[160px]" src="../assets/logo.svg" alt="logo">
            </router-link>
    
            <ul class="sm:flex items-center hidden gap-[40px]">
                <li class="text-white sm:text-[18px] font-semibold hover:text-coral">
                    <router-link to="/">home</router-link>
                </li>
                <li class="text-white sm:text-[18px] font-semibold hover:text-coral">
                    <router-link to="/about">about</router-link>
                </li>
            </ul>
        </div>

        <button class="sm:block hidden py-[10px] px-[33px] hover:bg-white hover:text-dark border-[2px] border-white rounded-[24px] text-white sm:text-[18px] font-semibold">
            <router-link to="/contact">contact us</router-link>
        </button>





        <button v-on:click="isOpen = !isOpen" class="block sm:hidden">
            <img src="../assets/menu.svg" alt="menu">
        </button>
        <div v-if="isOpen"  class="fixed z-40 sm:hidden inset-0 bg-black bg-opacity-[50%] ">
            <div class="transition ease-in-out delay-150 bg-pblue w-[255px] absolute right-0 bottom-0 h-full">
                <button v-on:click="isOpen = !isOpen" class="absolute right-[25px] top-[56px]">
                    <img src="../assets/x.svg" alt="close">
                </button>
                <ul class="mt-[112px] ml-[48px]">
                    <li class="text-white text-[18px] font-semibold hover:text-coral">
                        <router-link to="/">home</router-link>
                    </li>
                    <li class="text-white text-[18px] font-semibold hover:text-coral mt-[24px]">
                        <router-link to="/about">about</router-link>
                    </li>
                    <li class="text-white text-[18px] font-semibold mt-[24px] py-[10px] text-center w-[159px] border-[2px] border-white rounded-[24px]">
                        <router-link to="/contact" class="w-[87px]">contact us</router-link>
                    </li>
                </ul>
                <div class="w-[100px] h-[200px] absolute bottom-0 right-0">
                    <img src="../assets/menu-bg.svg" alt="bg">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            isOpen : false
        }
    },
}
</script>
<style lang="">
    
</style>