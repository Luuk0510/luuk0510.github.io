<script setup lang="ts">
import { computed } from 'vue';
import { usePageTitle } from '@/composables/usePageTitle'

import Link from '@/components/Link.vue';

import MarvelousLogo from '@/assets/images/logo/marvelous_logo.png'
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { avansProjects, type Project } from '@/data/projects';

usePageTitle();

const projects = computed<Project[]>(() => avansProjects);
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
                <img 
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
                v-for="project in projects" 
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
