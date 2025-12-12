<script setup lang="ts">
import { computed } from 'vue';

import Link from '@/components/Link.vue';

import MarvelousLogo from '@/assets/images/logo/marvelous_logo.png'
import IconGitHub from '@/components/icons/IconGitHub.vue';
import { avansProjects, type Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard.vue';

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
                <router-link to="/experience#marvelous" class="btn btn-primary text-base mt-2">Lees meer over mijn stage bij Marvelous</router-link>
            </div>
        </div>  
    </section>  

    <section class="flex flex-col justify-center items-center text-center">
        <h2 class="text-3xl font-black text-center mb-10">Projecten</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-5/6 w-full">
            <ProjectCard
                v-for="project in projects"
                :key="project.title"
                :title="project.title"
                :badges="project.badges"
                :description="project.description"
                :github-link="project.link"
                :route="project.route"
                :button-text="project.buttonText"
            >
                <template #githubIcon>
                    <IconGitHub size="40px" />
                </template>
                <template #cta>
                    <router-link v-if="project.route" :to="project.route" class="btn btn-primary text-base">
                        {{ project.buttonText }}
                    </router-link>
                </template>
            </ProjectCard>
        </div>
    </section>
</template>

<style scoped>
</style>
