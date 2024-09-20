import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutMe from '@/views/AboutMe.vue'
import Skills from '@/views/Skills.vue'
import Experience from '@/views/Experience.vue'
import Education from '@/views/Education.vue'
import Contact from '@/views/Contact.vue'
import Leijgraaf from '@/views/Leijgraaf.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home', 
        component: Home,
        meta: {
            index: 0, 
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutRight',
        },
    },
    { 
        path: '/about-me', 
        name: 'AboutMe', 
        component: AboutMe,
        meta: {
            index: 1,
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },
    },
    { 
        path: '/skills', 
        name: 'Skills', 
        component: Skills,
        meta: {
            index: 2,
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },
    },
    { 
        path: '/experience', 
        name: 'Experience', 
        component: Experience,
        meta: {
            index: 3,
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },  
    },
    { 
        path: '/education', 
        name: 'Education', 
        component: Education,
        meta: {
            index: 4,
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        },  
    },
    { 
        path: '/contact', 
        name: 'Contact', 
        component: Contact,
        meta: {
            index: 5,
            enterClass: 'animate__animated animate__fadeInRight',
            leaveClass: 'animate__animated animate__fadeOutLeft',
        }, 
    },
    { 
        path: '/leijgraaf', 
        name: 'Leijgraaf', 
        component: Leijgraaf,
        meta: {
            index: 5,
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
