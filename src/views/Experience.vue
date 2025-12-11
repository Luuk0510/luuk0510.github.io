<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'
import BaseCard from '@/components/BaseCard.vue'
import { experienceItems } from '@/data/experience'

usePageTitle();
</script>

<template>
    <div class="lg:inset-0 justify-center items-center">
        <div class="flex flex-col justify-center items-center mt-24 mb-20 gap-8">
            <h1 class="text-4xl font-black mb-5">Werkervaring</h1>

            <div
              v-for="(experience, index) in experienceItems"
              :key="experience.title"
              class="flex flex-col items-center gap-2"
            >
                <p
                  class="font-mono italic"
                  v-motion-slide-bottom
                  :delay="700 + index * 100"
                  :duration="700"
                >
                  {{ experience.dates }}
                </p>
                <BaseCard
                    :motion="true"
                    :delay="800 + index * 100"
                    :duration="800"
                    cardClass="bg-neutral text-neutral-content lg:w-3/6 shadow-xl"
                    bodyClass="items-center"
                >
                    <p class="text-4xl font-black mb-5 text-center">
                        {{ experience.title }}
                    </p>
                    <p v-for="(paragraph, i) in experience.description" :key="i">
                        {{ paragraph }}
                    </p>
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
