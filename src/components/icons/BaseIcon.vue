<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
  size: string;
  color: string;
  additionalClasses: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: '60px',
  color: 'currentColor',
  additionalClasses: '',
});
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="['icon icon-tabler', additionalClasses]"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        :stroke="color"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <slot />
    </svg>
</template>



<style scoped>
.icon:hover {
    stroke: oklch(var(--a));
}
</style>
