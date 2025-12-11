<script setup lang="ts">
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'

defineProps<{
  href: string
  target?: string
}>()

const { isBlackTheme } = useThemeSwitcher()
</script>

<template>
  <a :class="isBlackTheme ? 'link' : 'link link-accent'" :href="href" :target="target">
    <slot />
  </a>
</template>

<style scoped>
</style>
