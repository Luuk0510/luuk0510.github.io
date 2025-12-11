<script setup lang="ts">
defineProps<{
  motion?: boolean
  delay?: number
  duration?: number
  cardClass?: string
  bodyClass?: string
  tag?: string
}>()
</script>

<template>
  <v-motion
    v-if="motion"
    v-motion-slide-bottom
    :delay="delay"
    :duration="duration"
    :tag="tag || 'section'"
    :class="['card', cardClass]"
  >
    <div :class="['card-body', bodyClass]">
      <header v-if="$slots.header" class="card-header mb-2">
        <slot name="header" />
      </header>
      <slot />
      <footer v-if="$slots.footer" class="card-footer mt-2">
        <slot name="footer" />
      </footer>
    </div>
  </v-motion>

  <component
    v-else
    :is="tag || 'section'"
    :class="['card', cardClass]"
  >
    <div :class="['card-body', bodyClass]">
      <header v-if="$slots.header" class="card-header mb-2">
        <slot name="header" />
      </header>
      <slot />
      <footer v-if="$slots.footer" class="card-footer mt-2">
        <slot name="footer" />
      </footer>
    </div>
  </component>
</template>

<style scoped>
</style>
