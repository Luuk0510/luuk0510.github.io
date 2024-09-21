<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useMouseInElement } from '@vueuse/core';

interface Props {
    src: string;
    alt: string;
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
        :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out' }"
        class="logo-container"
        :aria-label="props.alt"
        role="img">
        <img :src="imageSrc" :alt="props.alt" class="logo" />
    </div>
</template>

<style scoped>
.logo-container {
    width: 128px;
    height: 128px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
}

.logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
