<script setup lang="ts">
import { ref } from 'vue'

import IconGitHub from '@/components/icons/IconGitHub.vue';

const projects = ref([
    {
        title: 'Space project',
        badges: ['HTML', 'CSS'],
        description: 'In project moesten we een website gaan maken met alleen maar HTML en CSS, geen javascript, frameworks en libraries zodat we goed HTML en CSS goed kennen. Kennis over HTML en CSS.',
        link: 'https://github.com/Luuk0510/space-project'
    },
    {
        title: 'Beestje op je feestje',
        badges: ['C#', 'Bootstrap'],
        description: 'In dit project heb ik samen met een medestudent een webapplicatie ontwikkeld genaamd "Beestje op je Feestje". Deze applicatie is ontworpen voor een boerderij die beestjes verhuurt voor feesten. Met de applicatie kunnen gebruikers eenvoudig beestjes reserveren voor hun evenementen.',
        link: 'https://github.com/Luuk0510/beestje-op-je-feestje'
    },
    {
        title: 'Bumbo',
        badges: ['C#', 'Bootstrap'],
        description: 'In dit project heb ik met mijn team gewerkt aan een oplossing voor het fictieve bedrijf Bumbo. We hebben een roostersysteem ontwikkeld dat filiaalmanagers ondersteunt bij het efficiënter inplannen van medewerkers en het bijhouden van gewerkte uren. Daarnaast hebben we een nieuw kloksysteem geïntegreerd met NFC-technologie om tijdregistratie te vereenvoudigen.',
        link: 'https://github.com/Luuk0510/bumbo'
    },
    {
        title: 'Ninja Frog',
        badges: ['Unity'],
        description: 'In dit project heb ik een Unity-game gemaakt genaamd "Ninja Frog," een 2D-platformspel in de stijl van Super Mario Bros. In het spel bestuur je een ninja kikker die door uitdagende levels springt, vijanden verslaat en fruit verzamelt. Het spel bevat power-ups, checkpoints en een highscoresysteem.',
        link: 'https://github.com/Luuk0510/space-project'
    },
    {
        title: 'Project Agile',
        badges: ['Laravel', 'Tailwind', 'Preline UI'],
        description: 'In dit project heb ik samen met mijn team een CMS ontwikkeld voor een echte klant, waarbij we gebruik hebben gemaakt van de Scrum- en Agile-methodologieën.',
    },
    {
        title: 'Bazaar',
        badges: ['Laravel', 'Tailwind', 'Preline UI'],
        description: 'In dit project heb ik samen met een team een platform ontwikkeld voor een startup die een concurrent van Marktplaats wil worden, met extra functies zoals veilingen en verhuur. Het platform is geschikt voor particulieren en bedrijven en biedt whitelabel-opties. We werkten volgens Scrum en Agile.',
        link: 'https://github.com/Luuk0510/bazaar'
    },
    {
        title: 'Bazaar transport',
        badges: ['Javascript', 'SCSS'],
        description: 'Voor deze eindopdracht heb ik samen met een medestudent een transport-simulatie-app ontwikkeld in JavaScript. De app simuleert hoe pakketten in vrachtwagens worden geladen, met drag-and-drop functies en weersafhankelijke beperkingen.',
        link: 'https://github.com/Luuk0510/bazaar-transport'
    },
    {
        title: 'Galactic Gladiators',
        badges: ['Python', 'PyGame'],
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
                <div 
                    v-for="(project, index) in projects" 
                    :key="index" 
                    v-motion
                    :initial="{ opacity: 0, x: (Math.floor(index / 3) % 2 === 0) ? -200 : 200 }"
                    :enter="{ opacity: 1, x: 0 }" 
                    :delay="1000 + (index * 200)" 
                    :duration="500"
                    class="card bg-base-200 shadow-xl mb-6 relative"
                >
                    <div class="card-body">
                        <h3 class="text-2xl font-bold text-center px-10">{{ project.title }}</h3>
                        <a v-if="project.link" :href="project.link" target="_blank" class="absolute mt-4 right-4 top-4">
                            <IconGitHub size="40px" />
                        </a>
                        <div v-if="project.badges" class="flex flex-wrap justify-center items-center gap-2 mb-2">
                            <div v-for="(badge, i) in project.badges" :key="i" class="badge badge-accent badge-outline badge-lg font-bold">
                                {{ badge }}
                            </div>
                        </div>
                        <p class="text-start">{{ project.description }}</p>
                        <div class="flex justify-center mb-4">
                            <router-link to="/" class="btn btn-primary text-base">Meer info</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
