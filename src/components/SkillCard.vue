<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'

const props = defineProps<{
  src: string
  alt: string
  description?: string
  delay?: number
}>()
</script>

<template>
  <BaseCard
    :motion="true"
    :delay="delay"
    :duration="800"
    cardClass="bg-neutral text-neutral-content mb-4"
    bodyClass="items-center"
    tag="section"
  >
    <img :src="src ?? ''" :alt="alt ?? ''" width="70px" height="70px" />
    <header v-if="$slots.header" class="text-xl font-bold">
      <slot name="header" />
    </header>
    <p v-if="description">{{ props.description }}</p>
    <p v-else><slot /></p>
    <footer v-if="$slots.footer" class="mt-2 w-full flex justify-center">
      <slot name="footer" />
    </footer>
  </BaseCard>
</template>

<style scoped>
</style>
  
