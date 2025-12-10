<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
  description: String,
  delay: Number,
})
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
      <p v-if="description">{{ description }}</p>
      <p v-else><slot /></p>
    </div>
  </v-motion>
</template>

<style scoped>
</style>
  
