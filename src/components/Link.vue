<script setup lang="ts">
import { ref, watchEffect , defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: '_self',
  }
});

const isBlackTheme = ref(false);

const checkTheme = () => {
  const theme = document.documentElement.getAttribute('data-theme');
  isBlackTheme.value = theme === 'black';
};

watchEffect(() => {
  const observer = new MutationObserver(() => {
    checkTheme();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  checkTheme();
});
</script>

<template>
    <a :class="isBlackTheme ? 'link' : 'link link-accent'" :href="href" :target="target">
        <slot />
    </a>
</template>

<style scoped>
</style>
