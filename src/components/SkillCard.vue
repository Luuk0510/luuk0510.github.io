<script setup lang="ts">
import { defineProps } from 'vue'

import InteractiveImage from '@/components/InteractiveImage.vue';

const props = defineProps({
  src: String,
  alt: String,
  description: String,
  delay: Number
});
</script>

<template>
    <v-motion
        v-motion-slide-bottom
        :delay="delay"
        :duration="800"
        class="card bg-neutral text-neutral-content mb-4"
        tag="section"
    >
        <div class="card-body items-center">
            <InteractiveImage :src="src ?? ''" :alt="alt ?? ''" width="70px" height="70px" />
            <p>
                <slot />
            </p>
        </div>
    </v-motion>
</template>
  