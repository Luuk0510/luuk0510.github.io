<script setup lang="ts">
import { ref } from 'vue';
import IconCheckFill from './icons/IconCheckFill.vue';

const timelineItems = ref([
    {
        time: 'sep 2024 - jan 2025',
        title: 'Marvelous',
        description: 'Ik loop momenteel stage bij Marvelous in Den Bosch. Hier werk ik aan uitdagende projecten die processen automatiseren en innovatie stimuleren. Meer over mijn stage... ',
        isVisible: false,
        link: '/marvelous',
    },
    {
        time: 'sep 2022 - Heden',
        title: 'Avans Hogeschool',
        description: 'Als derdejaars student Informatica aan Avans in Den Bosch werk ik aan verschillende projecten en leer ik onder andere C#, Laravel, Python en Unity. Meer over mijn ervaringen... ',
        isVisible: false,
        link: '/avans',
    },
    {
        time: '2024',
        title: 'Mobicoach',
        description: 'Als onderdeel van mijn opleiding bij de Leijgraaf werkte ik aan Mobicoach, een platform voor mobiele coaches. Ontdek meer over dit project... ',
        isVisible: false,
        link: '/mobicoach',
    },
    {
        time: 'aug 2019 - jun 2022',
        title: 'De Leijgraaf',
        description: 'Tijdens mijn MBO-opleiding Software Development leerde ik onder andere PHP en UX/UI design. Meer over deze ervaring... ',
        isVisible: false,
        link: '/leijgraaf',
    },
]);

// Functie om naar de bovenkant van de pagina te scrollen
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
</script>


<template>
    <h1 class="text-center text-4xl font-black mb-10">Tijdlijn</h1>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(item, index) in timelineItems" :key="index"
        v-motion-slide-visible-bottom>
            <hr v-if="index > 0" />
            <div class="timeline-middle">
                <IconCheckFill class="h-5 w-5"/>
            </div>
            <div :class="['mb-10', 'lg:w-3/5', 'md:w-5/6', 'sm:w-full', index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end']">
                <time class="font-mono italic text-lg">{{ item.time }}</time>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <div class="text-lg font-black">{{ item.title }}</div>
                        <p>{{ item.description }}</p>
                        <router-link :to="item.link" @click.native="scrollToTop" class="flex flex-col justify-center items-center">
                            <div class="btn btn-primary text-base">
                                Meer lezen
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <hr />
        </li>
    </ul>
</template>

<style scoped>
</style>