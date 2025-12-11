<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  description?: string
  delay?: number
}>()
</script>

<template>
  <v-motion
    v-motion-slide-bottom
    :delay="delay"
    :duration="800"
    class="card bg-neutral text-neutral-content mb-4"
    tag="section"
  >
    <div class="card-body items-center">
      <img :src="src ?? ''" :alt="alt ?? ''" width="70px" height="70px" />
      <header v-if="$slots.header" class="text-xl font-bold">
        <slot name="header" />
      </header>
      <p v-if="description">{{ description }}</p>
      <p v-else><slot /></p>
      <footer v-if="$slots.footer" class="mt-2 w-full flex justify-center">
        <slot name="footer" />
      </footer>
    </div>
  </v-motion>
</template>

<style scoped>
</style>
  
