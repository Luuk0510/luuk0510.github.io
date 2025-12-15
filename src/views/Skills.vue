<script setup lang="ts">
import { computed } from 'vue';
import { skills } from '@/data/skills';
import SkillCard from '@/components/SkillCard.vue';
import type { SkillItem } from '@/data/skills';
import { useAnimateOnce } from '@/composables/useAnimateOnce';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { MOTION } from '@/constants/animations';

type SkillSection = {
  title: string
  items: SkillItem[]
}

const frontendSkills = computed<SkillItem[]>(() => skills.filter((skill) => skill.category === 'frontend'));
const backendSkills = computed<SkillItem[]>(() => skills.filter((skill) => skill.category === 'backend'));
const frameworkSkills = computed<SkillItem[]>(() => skills.filter((skill) => skill.category === 'frameworks'));

const { shouldAnimate } = useAnimateOnce(STORAGE_KEYS.skillsHasAnimated);

const sections = computed<SkillSection[]>(() => [
  { title: 'Frontend', items: frontendSkills.value },
  { title: 'Backend', items: backendSkills.value },
  { title: 'Frameworks', items: frameworkSkills.value },
])
</script>

<template>
  <div class="lg:inset-0 justify-center items-center">
    <div class="flex flex-col justify-center items-center mt-24 mb-20">
      <h1 class="text-4xl font-black mb-5">Mijn vaardigheden</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:m-4">
        <section v-for="section in sections" :key="section.title">
          <v-motion
            v-if="shouldAnimate"
            v-motion-slide-bottom
            :delay="MOTION.sectionDelay"
            :duration="MOTION.sectionDuration"
            tag="div"
          >
            <h2 class="text-3xl font-bold mb-4 text-center">{{ section.title }}</h2>
          </v-motion>
          <h2 v-else class="text-3xl font-bold mb-4 text-center">{{ section.title }}</h2>

          <SkillCard
            v-for="skill in section.items"
            :key="skill.title"
            :src="skill.logo"
            :alt="skill.title"
            :delay="skill.delay"
            :description="skill.description"
            :motion="shouldAnimate"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
