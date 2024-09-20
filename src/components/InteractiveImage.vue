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
        :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out', backgroundImage: `url(${imageSrc})` }"
        class="logo">
    </div>
</template>

<style scoped>
.logo {
    width: 128px;
    height: 128px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 1rem;
    display: block;
}
</style>