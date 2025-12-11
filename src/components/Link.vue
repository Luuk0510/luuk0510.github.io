<script setup lang="ts">
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'

const props = defineProps<{
  href: string
  target?: string
}>()

const { isBlackTheme } = useThemeSwitcher()
</script>

<template>
  <a :class="isBlackTheme ? 'link' : 'link link-accent'" :href="props.href" :target="props.target">
    <slot />
  </a>
</template>

<style scoped>
</style>
