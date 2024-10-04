<script setup lang="ts">
import { ref } from 'vue'
import { usePageTitle } from '@/composables/usePageTitle'

import Link from '@/components/Link.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';

import MarvelousLogo from '@/assets/images/marvelous_logo.png'
import IconGitHub from '@/components/icons/IconGitHub.vue';

const projects = ref([
    {
        title: 'Space project',
        badges: ['HTML', 'CSS'],
        description: 'In eindopdracht moesten we een website gaan maken met alleen maar HTML en CSS, geen javascript, frameworks en libraries zodat we goed HTML en CSS goed kennen. Kennis over HTML en CSS.',
        link: 'https://github.com/Luuk0510/space-project',
        route: '/spaceproject',
        buttonText: 'Meer lezen',
    },
    {
        title: 'Beestje op je feestje',
        badges: ['C#', 'Bootstrap'],
        description: 'In deze eindopdracht heb ik samen met een medestudent een webapplicatie ontwikkeld genaamd "Beestje op je Feestje". Deze applicatie is ontworpen voor een boerderij die beestjes verhuurt voor feesten. Met de applicatie kunnen gebruikers eenvoudig beestjes reserveren voor hun evenementen.',
        link: 'https://github.com/Luuk0510/beestje-op-je-feestje',
        route: '/beestjeopjefeesje',
        buttonText: 'Meer lezen',
    },
    {
        title: 'Bumbo',
        badges: ['C#', 'Bootstrap'],
        description: 'In deze project heb ik met mijn team gewerkt aan een oplossing voor het fictieve bedrijf Bumbo. We hebben een roostersysteem ontwikkeld dat filiaalmanagers ondersteunt bij het efficiënter inplannen van medewerkers en het bijhouden van gewerkte uren. Daarnaast hebben we een nieuw kloksysteem geïntegreerd om tijdregistratie te vereenvoudigen.',
        link: 'https://github.com/Luuk0510/bumbo',
        route: '/bumbo',
        buttonText: 'Meer lezen',
    },
    {
        title: 'Ninja Frog',
        badges: ['Unity', 'C#'],
        description: 'In deze eindopdracht heb ik een Unity-game gemaakt genaamd "Ninja Frog," een 2D-platformspel in de stijl van Super Mario Bros. In het spel bestuur je een ninja kikker die door uitdagende levels springt, vijanden verslaat en fruit verzamelt. Het spel bevat power-ups, checkpoints en een highscoresysteem.',
        link: 'https://github.com/Luuk0510/space-project',
        route: '/ninjafrog',
        buttonText: 'Meer lezen',
    },
    {
        title: 'Project Agile',
        badges: ['Laravel', 'Tailwind', 'Preline UI'],
        description: 'In dit project heb ik samen met mijn team een CMS ontwikkeld voor een echte klant, waarbij we gebruik hebben gemaakt van de Scrum- en Agile-methodologieën.',
        route: '',
        buttonText: '',
    },
    {
        title: 'Bazaar',
        badges: ['Laravel', 'Tailwind', 'Preline UI'],
        description: 'In deze eindopdracht heb ik samen met een team een platform ontwikkeld voor een startup die een concurrent van Marktplaats wil worden, met extra functies zoals veilingen en verhuur. Het platform is geschikt voor particulieren en bedrijven en biedt whitelabel-opties. We werkten volgens Scrum en Agile.',
        link: 'https://github.com/Luuk0510/bazaar',
        route: 'bazaar',
        buttonText: 'Meer lezen',
    },
    {
        title: 'Bazaar transport',
        badges: ['Javascript', 'SCSS'],
        description: 'Voor deze eindopdracht heb ik samen met een medestudent een transport-simulatie-app ontwikkeld in JavaScript. De app simuleert hoe pakketten in vrachtwagens worden geladen, met drag-and-drop functies en weersafhankelijke beperkingen.',
        link: 'https://github.com/Luuk0510/bazaar-transport',
        route: 'bazaartransport',
        buttonText: 'Meer lezen',
    },
    {
        title: 'Galactic Gladiators',
        badges: ['Python', 'PyGame'],
        description: 'Voor deze eindopdracht heb ik samen met een medestudent een strategisch bordspel genaamd "Galactic Gladiators" ontwikkeld in Python. We gebruikten PyGame om het spel volledig te bouwen, waarbij spelers een leger besturen om de vlag van de tegenstander te veroveren.',
        link: 'https://github.com/Luuk0510/galactic-gladiators',
        route: 'galacticgladiators',
        buttonText: 'Meer lezen',
    },
    {
        title: 'De Gouden Draak',
        badges: ['Laravel', 'Vue', 'Tailwind', 'Preline UI'],
        description: 'Voor deze eindopdracht heb ik samen met een medestudent een nieuwe website ontwikkeld voor het fictieve restaurant De Gouden Draak. We gebruikten Laravel en Vue.js en implementeerden een OTAP-omgeving, met functies zoals een menu configurator en een vernieuwd kassasysteem met tablets',
        link: 'https://github.com/Luuk0510/de-gouden-draak',
        route: 'goudendraak',
        buttonText: 'Meer lezen',
    }
]);

usePageTitle();
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-20">
        <h1 class="text-4xl font-black mb-5">
            Avans Hogeschool
        </h1>
        <div class="card bg-neutral text-neutral-content lg:w-3/6">
            <div class="card-body items-center">
                <p>
                    Ik ben derdejaars student Informatica aan <Link href="https://www.avans.nl/" target="_blank">Avans Hogeschool</Link> in Den Bosch. Tijdens mijn studie heb ik gewerkt met programmeertalen zoals C#, Laravel, Python en Unity, met een focus op webapplicaties.
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

    <section class="flex flex-col justify-center items-center text-center mb-20">
        <h2 class="text-3xl font-black text-center mb-5">Stage</h2>
        <div class="card bg-neutral-content shadow-xl">
            <div class="card-body">
                <InteractiveImage 
                    :src="MarvelousLogo" 
                    alt="Marvelous solutions logo" 
                    width="400px" 
                    height="170px" 
                />
                <router-link to="/marvelous" class="btn btn-primary text-base mt-2">Lees meer over mijn stage bij Marvelous</router-link>
            </div>
        </div>  
    </section>  

    <section class="flex flex-col justify-center items-center text-center">
        <h2 class="text-3xl font-black text-center mb-10">Projecten</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-5/6 w-full">
            <div 
                v-for="(project) in projects" 
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
                    <div v-if="project.route !== null && project.route !== ''" class="flex justify-center mb-4">
                        <router-link :to="project.route" class="btn btn-primary text-base">{{project.buttonText}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
