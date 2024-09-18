import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutMe from '@/views/AboutMe.vue'
import Skills from '@/views/Skills.vue'
import Experience from '@/views/Experience.vue'
import Education from '@/views/Education.vue'
import Contact from '@/views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home', 
        component: Home,
        meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutRight',
        },
    },
    { 
        path: '/about-me', 
        name: 'AboutMe', 
        component: AboutMe,
        meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },
    },
    { 
        path: '/skills', 
        name: 'Skills', 
        component: Skills ,
        meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },
    },
    { 
        path: '/experience', 
        name: 'Experience', 
        component: Experience,
        meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },  
    },
    { 
        path: '/education', 
        name: 'Education', 
        component: Education,
        meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },  
    },
    { 
        path: '/contact', 
        name: 'Contact', 
        component: Contact,
        meta: {
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        }, 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
