<script setup lang="ts">
import { ref } from 'vue'

// Project data
const projects = ref([
  {
    title: 'Space project',
    badges: ['HTML', 'CSS'],
    description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt.',
    delay: 1000,
  },
  {
    title: 'Ninja manager',
    badges: ['C#', 'Bootstrap'],
    description: 'Dit is een beschrijving van Project 2. Hier kun je meer vertellen over het project en wat het inhoudt.',
    delay: 1200,
  },
  {
    title: 'Beestje op je feestje',
    badges: ['C#', 'Bootstrap'],
    description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt.',
    delay: 1400,
  },
  {
    title: 'Ninja Frog',
    badges: ['Unity'],
    description: 'Dit is een beschrijving van Project 2. Hier kun je meer vertellen over het project en wat het inhoudt.',
    delay: 1600,
  },
  {
    title: 'Lazaar',
    badges: ['Laravel', 'Preline'],
    description: 'Dit is een beschrijving van Project 1. Hier kun je meer vertellen over het project en wat het inhoudt.',
    delay: 1800,
  },
  {
    title: 'Ninja Frog',
    badges: ['Unity'],
    description: 'Dit is een beschrijving van Project 2. Hier kun je meer vertellen over het project en wat het inhoudt.',
    delay: 2000,
  },
  {
    title: 'Galactic Gladiators',
    description: 'Dit is een beschrijving van Project 3. Hier kun je meer vertellen over het project en wat het inhoudt.',
    delay: 2200,
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
                        zoals C#, Laravel, Python en Unity. Naast technische vaardigheden heb ik ook ervaring opgedaan
                        met het samenwerken aan projecten in teamverband en het werken volgens Agile-methodologieën.
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
                    :delay="project.delay"
                    :duration="500"
                    class="card bg-base-200 shadow-xl mb-6"
                >
                    <div class="card-body">
                        <h3 class="text-2xl text-center font-bold">{{ project.title }}</h3>
                            <div v-if="project.badges" class="flex justify-center items gap-x-2 mb-1">
                                <div 
                                    v-for="(badge, i) in project.badges" 
                                    :key="i" 
                                    class="badge badge-accent badge-outline badge-lg font-bold">
                                    {{ badge }}
                                </div>
                            </div>
                        <p>{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>
