<script lang="ts" setup>
// English comments only
// Vue 3.4+: don't import defineProps/withDefaults; they are compiler macros.

interface Props {
  size?: string
  color?: string
  additionalClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '60px',
  color: 'currentColor',
  additionalClasses: '',
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="['icon', 'icon-tabler', props.additionalClasses]"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    :stroke="props.color"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    aria-hidden="true"
  >
    <slot />
  </svg>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *; // access your dark theme tokens

.icon {
  /* English: smooth, modern hover for dark UI */
  transition: stroke .2s ease, filter .25s ease, transform .15s ease;
  display: inline-block;

  &:hover {
    stroke: $accent-1;
    filter: drop-shadow(0 0 16px rgba(96, 165, 250, .35));
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px);
  }
}
</style>
