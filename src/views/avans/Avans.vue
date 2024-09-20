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
        badges: ['C#'],
        description: 'Dit is een beschrijving van Project 2. Hier kun je meer vertellen over het project en wat het inhoudt.',
    },
    {
        title: 'Bumbo',
        badges: ['C#'],
        description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt.',
    },
    {
        title: 'Beestje op je feestje',
        badges: ['C#'],
        description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt.',
    },
    {
        title: 'Ninja Frog',
        badges: ['Unity'],
        description: 'Dit is een beschrijving van Project 2. Hier kun je meer vertellen over het project en wat het inhoudt.',
    },
    {
        title: 'Project Agile',
        badges: ['Laravel'],
        description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt.',
    },
    {
        title: 'Bazaar website',
        badges: ['Laravel'],
        description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt. Tailwind met Preline library',
    },
    {
        title: 'Bazaar transport',
        badges: ['Javascript'],
        description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt.',
    },
    {
        title: 'Galactic Gladiators',
        badges: ['Python'],
        description: 'Dit is een beschrijving van Project 3. Hier kun je meer vertellen over het project en wat het inhoudt.',
    },
    {
        title: 'De Gouden Draak',
        badges: ['Laravel', 'Vue'],
        description: 'Dit is een beschrijving van Project 3. Hier kun je meer vertellen over het project en wat het inhoudt.',
    }
])
</script>

<template>
    <div class="absolute">
        <section class="flex flex-col justify-center items-center my-20">
            <h1 class="text-4xl font-black mb-5">
                Avans Hogeschool
            </h1>
            <div class="card bg-neutral text-neutral-content lg:w-3/6">
                <div class="card-body items-center">
                    <p>
                        Ik ben momenteel een derdejaars student Informatica aan Avans Hogeschool in Den Bosch. Tijdens
                        mijn studie heb ik geleerd om te werken met verschillende programmeertalen en technologieën,
                        zoals C#, Laravel, Python en Unity. Mijn focus ligt vooral op het ontwikkelen van
                        webapplicaties, waarbij ik gebruik heb gemaakt van frameworks zoals Laravel voor
                        backend-ontwikkeling en frontend-technologieën voor het bouwen van interactieve en
                        gebruiksvriendelijke interfaces.
                    </p>
                    <p>
                        Een belangrijk onderdeel van mijn opleiding is het werken in duo's aan projecten, wat me
                        waardevolle ervaring heeft gegeven in samenwerking en projectmanagement. Tijdens deze projecten
                        heb ik gebruik gemaakt van verschillende ontwikkelmethodieken, zoals Agile, Scrum en Kanban.
                        Hierdoor heb ik niet alleen mijn technische vaardigheden kunnen verbeteren, maar ook mijn
                        vermogen om effectief te plannen, te communiceren en flexibel in te spelen op veranderingen
                        binnen het project.
                    </p>
                    <p>
                        Hoewel mijn primaire focus ligt op webontwikkeling, heb ik ook gewerkt aan enkele uitzonderlijke
                        projecten. Zo heb ik een game ontwikkeld met Unity, waar ik mijn kennis van objectgeoriënteerd
                        programmeren en spelmechanieken verder heb kunnen uitbreiden. Daarnaast heb ik met Python een
                        game gemaakt, waarbij ik algoritmes en data structuren toepaste om de logica van het spel te
                        bouwen.
                    </p>
                    <p>
                        Door deze afwisselende projecten heb ik een brede basis opgebouwd in zowel frontend- als
                        backend-ontwikkeling, en ben ik goed voorbereid op een toekomst in de IT. Het leren werken
                        volgens verschillende methodieken en in duo's heeft mijn teamwork- en probleemoplossende
                        vaardigheden sterk ontwikkeld, wat me helpt om effectief te functioneren in diverse
                        ontwikkelteams.
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
