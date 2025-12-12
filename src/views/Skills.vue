<script setup lang="ts">
import { computed } from 'vue';
import { skills } from '@/data/skills';
import SkillCard from '@/components/SkillCard.vue';
import type { SkillItem } from '@/data/skills';
import { useAnimateOnce } from '@/composables/useAnimateOnce';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { MOTION } from '@/constants/animations';

const frontendSkills = computed<SkillItem[]>(() => skills.filter((skill) => skill.category === 'frontend'));
const backendSkills = computed<SkillItem[]>(() => skills.filter((skill) => skill.category === 'backend'));

const { shouldAnimate } = useAnimateOnce(STORAGE_KEYS.skillsHasAnimated);
</script>

<template>
  <div class="lg:inset-0 justify-center items-center">
    <div class="flex flex-col justify-center items-center mt-24 mb-20">
      <h1 class="text-4xl font-black mb-5">Mijn vaardigheden</h1>
      <div class="grid lg:grid-cols-2 gap-10 lg:m-4">
        <div>
          <v-motion v-if="shouldAnimate" v-motion-slide-bottom :delay="MOTION.sectionDelay" :duration="MOTION.sectionDuration" tag="section">
            <h2 class="text-3xl font-bold mb-4 text-center">Frontend</h2>
          </v-motion>
          <h2 v-else class="text-3xl font-bold mb-4 text-center">Frontend</h2>

          <SkillCard
            v-for="skill in frontendSkills"
            :key="skill.title"
            :src="skill.logo"
            :alt="skill.title"
            :delay="skill.delay"
            :description="skill.description"
            :motion="shouldAnimate"
          />
        </div>

        <div>
          <v-motion v-if="shouldAnimate" v-motion-slide-bottom :delay="MOTION.sectionDelay" :duration="MOTION.sectionDuration" tag="section">
            <h2 class="text-3xl font-bold mb-4 text-center">Backend</h2>
          </v-motion>
          <h2 v-else class="text-3xl font-bold mb-4 text-center">Backend</h2>

          <SkillCard
            v-for="skill in backendSkills"
            :key="skill.title"
            :src="skill.logo"
            :alt="skill.title"
            :delay="skill.delay"
            :description="skill.description"
            :motion="shouldAnimate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
