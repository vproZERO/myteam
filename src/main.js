import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter , createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Contact from './pages/contact.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/' , component: Home},
        {path: '/about' , component: About},
        {path: '/contact' , component: Contact},
    ]
})

createApp(App,AOS.init()).use(router).mount('#app')
