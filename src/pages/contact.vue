<template>
    <div>
        <Header/>
        <Ask/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import Ask from '../components/contact/ask.vue'
import Footer from '../layout/footer.vue'
export default {
    components: {
        Header,
        Ask,
        Footer
    }
}
</script>
<style lang="">
    
</style>