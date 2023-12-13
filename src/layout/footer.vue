<template>
    <div class="container bg-dark py-[66px] px-[24px] sm:py-[56px] sm:px-[40px] xl:px-[165px] lg:py-[48px]">
        <div class="sm:flex items-center justify-between">
            <div>
                <router-link to="/">
                    <img class="w-[96px] lg:w-[160px] mx-auto sm:mx-0" src="../assets/logo.svg" alt="logo">
                </router-link>
                <ul class="flex items-center justify-center sm:justify-start gap-[24px] mt-[24px] sm:mt-[53px] lg:mt-[25px]">
                    <li class="text-white text-[15px] lg:text-[18px] lg:leading-[25px] font-semibold hover:text-coral">
                        <router-link to="/">home</router-link>
                    </li>
                    <li class="text-white text-[15px] lg:text-[18px] lg:leading-[25px] font-semibold hover:text-coral">
                        <router-link to="/about">about</router-link>
                    </li>
                </ul>
                <p class="text-center block sm:hidden text-white opacity-[0.6] mt-[24px]">
                    987  Hillcrest Lane <br> Irvine, CA <br> California 92714 <br> Call Us : 949-833-7432
                </p>


                <div class="w-[104px] lg:hidden block mt-[40px] sm:mt-[33px] mx-auto sm:mx-0">
                    <img src="../assets/footer.svg" alt="footer">
                </div>


                <p class="text-center sm:hidden block text-white opacity-[0.6] mt-[16px]">
                    Copyright 2020. All Rights Reserved
                </p>
            </div>
            <div>
                <p class="text-end block sm:block hidden text-white lg:text-start lg:w-[445px] w-[280px] opacity-[0.6] leading-[25px">
                    987  Hillcrest Lane <br> Irvine, CA <br> California 92714 <br> Call Us : 949-833-7432
                </p>
                <p class="text-center sm:block hidden lg:hidden block text-white opacity-[0.6] mt-[34px]">
                    Copyright 2020. All Rights Reserved
                </p>
            </div>
            <div class="hidden lg:block">
                <div class="w-[104px] lg:block   hidden block mt-[40px] sm:mt-[33px] mx-auto lg:ml-[151px] sm:mx-0">
                    <img src="../assets/footer.svg" alt="footer">
                </div>
                <p class="text-center sm:block hidden lg:block   text-white opacity-[0.6] mt-[51px]">
                    Copyright 2020. All Rights Reserved
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>