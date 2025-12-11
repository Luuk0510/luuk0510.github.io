<script setup lang="ts">
import { computed } from 'vue'
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'

const props = defineProps<{
  href: string
  target?: string
}>()

const { theme } = useThemeSwitcher()
const isBlackTheme = computed(() => theme.value === 'black')
</script>

<template>
  <a :class="isBlackTheme ? 'link' : 'link link-accent'" :href="href" :target="target">
    <slot />
  </a>
</template>

<style scoped>
</style>
