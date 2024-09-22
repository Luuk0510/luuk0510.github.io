<script setup lang="ts">
import { ref } from 'vue'

import IconGitHub from '@/components/icons/IconGitHub.vue';

const projects = ref([
    {
        title: 'Space project',
        badges: ['HTML', 'CSS'],
        description: 'In project moesten we een website gaan maken met alleen maar HTML en CSS, geen javascript, frameworks en libraries. Kennis over HTML en CSS.',
        link: 'https://github.com/Luuk0510/space-project'
    },
    {
        title: 'Ninja manager',
        badges: ['C#', 'Bootstrap'],
        description: 'Dit is een beschrijving van het Project.',
        link: 'https://github.com/Luuk0510/space-project'
    },
    {
        title: 'Beestje op je feestje',
        badges: ['C#', 'Bootstrap'],
        description: 'Dit is een beschrijving van het Project.',
        link: 'https://github.com/Luuk0510/beestje-op-je-feestje'
    },
    {
        title: 'Bumbo',
        badges: ['C#', 'Bootstrap'],
        description: 'Dit is een beschrijving van het Project.',
    },
    {
        title: 'Ninja Frog',
        badges: ['Unity'],
        description: 'Dit is een beschrijving van het Project.',
        link: 'https://github.com/Luuk0510/space-project'
    },
    {
        title: 'Project Agile',
        badges: ['Laravel', 'Tailwind', 'Preline UI'],
        description: 'Dit is een beschrijving van het Project.',
    },
    {
        title: 'Bazaar',
        badges: ['Laravel', 'Tailwind', 'Preline UI'],
        description: 'Dit is een beschrijving van het Project.',
        link: 'https://github.com/Luuk0510/bazaar'
    },
    {
        title: 'Bazaar transport',
        badges: ['Javascript', 'CSS'],
        description: 'Dit is een beschrijving van het Project.',
        link: 'https://github.com/Luuk0510/bazaar-transport'
    },
    {
        title: 'Galactic Gladiators',
        badges: ['Python'],
        description: 'Dit is een beschrijving van het Project.',
        link: 'https://github.com/Luuk0510/galactic-gladiators'
    },
    {
        title: 'De Gouden Draak',
        badges: ['Laravel', 'Vue', 'Tailwind', 'Preline UI'],
        description: 'Dit is een beschrijving van het Project.',
        link: 'https://github.com/Luuk0510/de-gouden-draak'
    }
]);
</script>

<template>
    <div class="absolute">
        <section class="flex flex-col justify-center items-center lg:my-20 md:mb-20">
            <h1 class="text-4xl font-black mb-5">
                Avans Hogeschool
            </h1>
            <div class="card bg-neutral text-neutral-content lg:w-3/6">
                <div class="card-body items-center">
                    <p>
                        Ik ben derdejaars student Informatica aan Avans Hogeschool in Den Bosch. Tijdens mijn studie heb ik gewerkt met programmeertalen zoals C#, Laravel, Python en Unity, met een focus op webapplicaties.
                    </p>
                    <p>
                        In duo's heb ik veel ervaring opgedaan met samenwerking en projectmanagement. Ik heb methodieken zoals Agile, Scrum en Kanban gebruikt, wat mijn vaardigheden in planning, communicatie en flexibiliteit heeft verbeterd.
                    </p>
                    <p>
                        Naast webontwikkeling heb ik een game ontwikkeld in Unity en een Python-project gedaan, waarbij ik objectgeoriënteerd programmeren en algoritmes heb toegepast.
                    </p>
                    <p>
                        Deze projecten hebben me een brede basis gegeven in frontend- en backend-ontwikkeling en mijn teamwork- en probleemoplossende vaardigheden sterk ontwikkeld.
                    </p>
                </div>
            </div>
        </section>

        <section class="flex flex-col justify-center items-center text-center">
            <h2 class="text-3xl font-black text-center mb-10">Projecten</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-5/6 w-full">
                <div v-for="(project, index) in projects" :key="index" v-motion
                    :initial="{ opacity: 0, x: (Math.floor(index / 3) % 2 === 0) ? -200 : 200 }"
                    :enter="{ opacity: 1, x: 0 }" :delay="1000 + (index * 200)" :duration="500"
                    class="card bg-base-200 shadow-xl mb-6">
                    <div class="card-body">
                        <div class="relative">
                            <h3 class="text-2xl font-bold text-center">{{ project.title }}</h3>
                            <a v-if="project.link" :href="project.link" target="_blank" class="absolute right-0 top-0">
                                <IconGitHub size="40px" />
                            </a>
                        </div>
                        <div v-if="project.badges" class="flex justify-center items gap-x-2 mb-1">
                            <div v-for="(badge, i) in project.badges" :key="i"
                                class="badge badge-accent badge-outline badge-lg font-bold">
                                {{ badge }}
                            </div>
                        </div>
                        <p class="text-start">{{ project.description }}</p>
                        <router-link to="/" class="btn btn-primary text-base">Meer info</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
