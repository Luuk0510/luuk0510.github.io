<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

const props = defineProps<{
  images: string[]
}>()

const visible = ref<boolean>(false);
const index = ref<number>(0);

function showLightbox(idx: number): void {
    index.value = idx;
    visible.value = true;
}
</script>

<template>
    <h2 class="text-4xl font-black text-center">Screenshots</h2>
    <section class="flex flex-wrap items-center justify-center mt-10 gap-6">
        <div class="w-full">
            <div class="flex flex-wrap justify-center gap-6 mb-6">
                <div v-for="(image, imageIndex) in images" :key="imageIndex" class="w-full md:w-1/4 lg:w-1/4">
                    <img 
                        @click="showLightbox(imageIndex)" 
                        :src="image"
                        class="w-full h-64 object-cover card shadow-lg transition-transform transform hover:scale-105 cursor-pointer" />
                </div>
            </div>
        </div>
    </section>

    <vue-easy-lightbox
        :visible="visible"
        :imgs="images"
        :index="index"
        :hide-toolbar="true"
        @hide="visible = false"
    />
</template>

<style scoped>
@media (max-width: 768px) {
    .flex-wrap {
        flex-direction: column;
    }
}
</style>
