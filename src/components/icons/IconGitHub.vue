<script setup lang="ts">
// English comments only
import BaseIcon from './BaseIcon.vue'

interface Props {
  size?: string
}
const props = withDefaults(defineProps<Props>(), {
  size: '60px',
})
</script>

<template>
  <BaseIcon :size="props.size" color="currentColor" additional-classes="icon-tabler-brand-github">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2
         c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2
         s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3
         a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6
         c-.6 .6 -.6 1.2 -.5 2v3.5"
    />
  </BaseIcon>
</template>

<style scoped lang="scss">
/* English: keep optional overrides local if needed */
</style>
