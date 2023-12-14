<template>
    <div>
        <Header/>
        <Find/>
        <Build/>
        <Delivery/>
        <Ready/>
        <Footer/>
    </div>
</template>
<script>
import Header from '../layout/header.vue'
import Find from '../components/home/find.vue'
import Build from '../components/home/build.vue'
import Delivery from '../components/home/delivery.vue'
import Ready from '../layout/ready.vue'
import Footer from '../layout/footer.vue'
export default {
    components: {
        Header,
        Find,
        Build,
        Delivery,
        Ready,
        Footer
    }
}
</script>
<style>
    
</style>