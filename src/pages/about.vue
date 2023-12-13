<template>
    <div>
        <Header/>
        <AboutText/>
        <Directors/>
        <Some/>
        <Ready/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import AboutText from '../components/about/aboutText.vue'
import Directors from '../components/about/directors.vue'
import Some from '../components/about/some.vue'
import Ready from '../layout/ready.vue'
import Footer from '../layout/footer.vue'
export default {
    components: {
        Header,
        AboutText,
        Directors,
        Some,
        Ready,
        Footer
    }
}
</script>
<style lang="">
    
</style>