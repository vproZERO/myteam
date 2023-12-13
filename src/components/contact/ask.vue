<template >
    <div class="container bg-green px-[24px] pt-[40px] pb-[88px] xl:px-[165px] sm:px-[40px] lg:flex items-center justify-between relative">
        <div class="">
            <h1 class="text-center lg:text-start font-bold text-white text-[40px] leading-[40px]">Contact</h1>
            <h1 class="text-center lg:text-start font-bold text-coral mt-[16px] text-[32px] leading-[48px]">Ask us about</h1>
            <div class="flex items-center gap-[23px] lg:mt-[32px]">
                <div>
                    <img src="../../assets/ask1.svg" alt="ask">
                </div>
                <p class="text-white font-bold text-[18px]">The quality of our talent network</p>
            </div>
            <div class="flex items-center gap-[23px] mt-[24px]">
                <div>
                    <img src="../../assets/ask2.svg" alt="ask">
                </div>
                <p class="text-white font-bold text-[18px]">Usage & implementation of our software</p>
            </div>
            <div class="flex items-center gap-[23px] mt-[24px]">
                <div>
                    <img src="../../assets/ask3.svg" alt="ask">
                </div>
                <p class="text-white font-bold text-[18px]">How we help drive innovation</p>
            </div>
        </div>
        <div class="lg:w-[480px] ">

            <form class="mt-[56px] lg:mt-0">
                <div class="input-container text-white opacity-[0.6] border-b-[1px] border-white w-full mb-[24px] aos-init aos-animate" data-aos-duration="1500" data-aos="fade-left">
                    <input type="text" id="name" name="name" v-model="name" required>
                    <label for="name">Name</label>
                </div>
                <div class="input-container text-white opacity-[0.6] border-b-[1px] border-white w-full mb-[24px] aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
                    <input type="email" id="email" name="email" v-model="email" required>
                    <label for="name">Email Address</label>
                </div>
                <div class="input-container text-white opacity-[0.6] border-b-[1px] border-white w-full mb-[24px] aos-init aos-animate" data-aos-duration="1500" data-aos="fade-left">
                    <input type="text" id="companyname" name="companyname" v-model="companyname" required>
                    <label for="name">Company Name</label>
                </div>
                <div class="input-container text-white opacity-[0.6] border-b-[1px] border-white w-full mb-[24px] aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
                    <input type="text" id="title" name="title" v-model="title" required>
                    <label for="name">Title</label>
                </div>
                <div class="input-container text-white opacity-[0.6] border-b-[1px] border-white w-full mb-[24px] aos-init aos-animate" data-aos-duration="1500" data-aos="fade-left">
                    <input type="text" id="message" name="message" v-model="message" required>
                    <label for="name">Message</label>
                </div>
                <button class="text-jungle font-semibold text-[18px] py-[10px] bg-white rounded-[24px] px-[33px] ">submit</button>
            </form>
        </div>
        <div class="w-[100px] absolute bottom-0 right-0">
            <img src="../../assets/ask4.svg" alt="ask">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>