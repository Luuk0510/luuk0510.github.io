import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Lazy load voor betere performance
const Home = () => import('@/views/Home.vue')
const Skills = () => import('@/views/Skills.vue')
const Experience = () => import('@/views/Experience.vue')
const Education = () => import('@/views/Education.vue')
const Contact = () => import('@/views/Contact.vue')
const Leijgraaf = () => import('@/views/Leijgraaf.vue')
const Mobicoach = () => import('@/views/Mobicoach.vue')
const Avans = () => import('@/views/avans/Avans.vue')
const Marvelous = () => import('@/views/Marvelous.vue')

const createRoute = (
  path: string, 
  name: string, 
  component: any, 
  index: number, 
  title: string | null = null
): RouteRecordRaw => {
  return {
    path,
    name,
    component,
    meta: {
      index,
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft',
      title: title || name,
    },
  }
}

const routes: Array<RouteRecordRaw> = [
  createRoute('/', 'Home', Home, 0),
  createRoute('/skills', 'Skills', Skills, 1, 'Vaardigheden'),
  createRoute('/experience', 'Experience', Experience, 2, 'Ervaring'),
  createRoute('/education', 'Education', Education, 3, 'Opleiding'),
  createRoute('/contact', 'Contact', Contact, 4, 'Contact'),
  createRoute('/leijgraaf', 'Leijgraaf', Leijgraaf, 5, 'Leijgraaf'),
  createRoute('/mobicoach', 'Mobicoach', Mobicoach, 6, 'Mobicoach'),
  createRoute('/avans', 'Avans', Avans, 7, 'Avans'),
  createRoute('/marvelous', 'Marvelous', Marvelous, 8, 'Marvelous'),
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
