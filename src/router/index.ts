import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { Component } from 'vue'

const Home = () => import('@/views/Home.vue');
const Skills = () => import('@/views/Skills.vue');
const Experience = () => import('@/views/Experience.vue');
const Education = () => import('@/views/Education.vue');
const Contact = () => import('@/views/Contact.vue');
const Leijgraaf = () => import('@/views/Leijgraaf.vue');
const Mobicoach = () => import('@/views/Mobicoach.vue');
const Avans = () => import('@/views/avans/Avans.vue');
const SpaceProject = () => import('@/views/avans/SpaceProject.vue');
const BeestjeOpJeFeestje = () => import('@/views/avans/BeestjeOpJeFeestje.vue');
const Bumbo = () => import('@/views/avans/Bumbo.vue');
const NinjaFrog = () => import('@/views/avans/NinjaFrog.vue');
const Bazaar = () => import('@/views/avans/Bazaar.vue');
const BazaarTransport = () => import('@/views/avans/BazaarTransport.vue');
const GalacticGladiators = () => import('@/views/avans/GalacticGladiators.vue');
const GoudenDraak = () => import('@/views/avans/GoudenDraak.vue');
const Marvelous = () => import('@/views/Marvelous.vue');

const createRoute = (
  path: string,
  name: string,
  component: Component,
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
  createRoute('/spaceproject', 'Space Project', SpaceProject, 8, 'Space Project'),
  createRoute('/beestjeopjefeestje', 'Beestje Op Je Feestje', BeestjeOpJeFeestje, 9, 'Beestje Op Je Feestje'),
  createRoute('/bumbo', 'Bumbo', Bumbo, 10, 'Bumbo'),
  createRoute('/ninjafrog', 'Ninja Frog', NinjaFrog, 11, 'Ninja Frog'),
  createRoute('/bazaar', 'Bazaar', Bazaar, 12, 'Bazaar'),
  createRoute('/bazaartransport', 'Bazaar Transport', BazaarTransport, 13, 'Bazaar Transport'),
  createRoute('/galacticgladiators', 'Galactic Gladiators', GalacticGladiators, 14, 'Galactic Gladiators'),
  createRoute('/goudendraak', 'Gouden Draak', GoudenDraak, 15, 'Gouden Draak'),
  createRoute('/marvelous', 'Marvelous', Marvelous, 20, 'Marvelous'),
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          resolve({ top: 0 });
        }, 300);
      });
    }
  },
});

export default router
