<script setup lang="ts">
import { computed } from 'vue';
import { usePageTitle } from '@/composables/usePageTitle'
import { skills } from '@/data/skills';
import SkillCard from '@/components/SkillCard.vue';

usePageTitle();

const frontendSkills = computed(() => skills.filter((skill) => skill.category === 'frontend'));
const backendSkills = computed(() => skills.filter((skill) => skill.category === 'backend'));
</script>

<template>
  <div class="lg:inset-0 justify-center items-center">
    <div class="flex flex-col justify-center items-center mt-24 mb-20">
      <h1 class="text-4xl font-black mb-5">Mijn vaardigheden</h1>
      <div class="grid lg:grid-cols-2 gap-10 lg:m-4">
        <div>
          <v-motion v-motion-slide-bottom :delay="800" :duration="800" tag="section">
            <h2 class="text-3xl font-bold mb-4 text-center">Frontend</h2>
          </v-motion>

          <SkillCard
            v-for="skill in frontendSkills"
            :key="skill.title"
            :src="skill.logo"
            :alt="skill.title"
            :delay="skill.delay"
            :description="skill.description"
          />
        </div>

        <div>
          <v-motion v-motion-slide-bottom :delay="800" :duration="800" tag="section">
            <h2 class="text-3xl font-bold mb-4 text-center">Backend</h2>
          </v-motion>

          <SkillCard
            v-for="skill in backendSkills"
            :key="skill.title"
            :src="skill.logo"
            :alt="skill.title"
            :delay="skill.delay"
            :description="skill.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
