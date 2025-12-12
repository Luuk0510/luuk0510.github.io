<script setup lang="ts">
defineProps<{
  title: string
  badges?: string[]
  description: string
  githubLink?: string
  route?: string
  buttonText?: string
}>()
</script>

<template>
  <div class="card bg-base-200 shadow-xl mb-6 relative">
    <div class="card-body">
      <header class="flex justify-center items-center mb-2">
        <h3 class="text-2xl font-bold text-center px-10">{{ title }}</h3>
        <a
          v-if="githubLink"
          :href="githubLink"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub repository"
          class="absolute mt-4 right-4 top-4"
        >
          <slot name="githubIcon" />
        </a>
      </header>

      <div v-if="badges?.length" class="flex flex-wrap justify-center items-center gap-2 mb-2">
        <div v-for="(badge, i) in badges" :key="i" class="badge badge-accent badge-outline badge-lg font-bold">
          {{ badge }}
        </div>
      </div>

      <p class="text-start">{{ description }}</p>

      <footer v-if="route" class="flex justify-center mb-4">
        <slot name="cta" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
</style>
