<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';

const props = defineProps({
  size: {
    type: String,
    default: '60px',
  },
});
</script>

<template>
  <base-icon :size="size" color="currentColor" additional-classes="icon-tabler-brand-linkedin">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 11l0 5" />
        <path d="M8 8l0 .01" />
        <path d="M12 16l0 -5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </base-icon>
</template>

<style scoped>
.icon:hover {
  stroke: var(--color-base-300);
}
</style>
