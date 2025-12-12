<script setup lang="ts">
import { computed } from 'vue'
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'

const props = defineProps<{
  href: string
  target?: string
  rel?: string
}>()

const { isBlackTheme } = useThemeSwitcher()

const relValue = computed(() => {
  if (props.target === '_blank') return props.rel ?? 'noopener noreferrer'
  return props.rel
})
</script>

<template>
  <a
    :class="isBlackTheme ? 'link link-primary' : 'link link-accent'"
    :href="href"
    :target="target"
    :rel="relValue"
  >
    <slot />
  </a>
</template>

<style scoped>
</style>
