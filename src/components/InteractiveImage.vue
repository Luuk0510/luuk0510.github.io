<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useMouseInElement } from '@vueuse/core';

interface Props {
    src: string;
    alt: string;
    width: string;
    height: string;
}


const props = defineProps<Props>();

const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

const imageSrc = new URL(props.src, import.meta.url).href;

const cardTransform = computed(() => {
    const MAX_ROTATION = 20;

    const rX = (
        MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2);

    const rY = (
        MAX_ROTATION / 2 - (elementX.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2);

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
    <div ref="target"
        :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out', width: props.width, height: props.height }"
        class="flex justify-center items-center">
        <img :src="imageSrc" :alt="props.alt" class="w-full h-full object-contain" />
    </div>
</template>

<style scoped>
</style>
