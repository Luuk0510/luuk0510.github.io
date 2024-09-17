import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Skills from '@/views/Skills.vue';
import Experience from '@/views/Experience.vue';
import Education from '@/views/Education.vue';
import Contact from '@/views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about-me', name: 'AboutMe', component: AboutMe },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/education', name: 'Education', component: Education },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;