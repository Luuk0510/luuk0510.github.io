<script lang="ts" setup>
// English comments only
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'


type Fit = 'cover' | 'contain'

interface Props {
  src: string
  alt: string
  fit?: Fit
}

const props = defineProps<Props>()
const cssFit = computed(() => props.fit ?? 'cover')

const target = ref<HTMLElement | null>(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

// Resolve asset URL (Vite-friendly)
const imageSrc = computed(() => props.src)

// 3D tilt transform based on pointer position
const cardTransform = computed(() => {
  const MAX = 20
  const w = Math.max(1, elementWidth.value)
  const h = Math.max(1, elementHeight.value)
  const rX = (MAX / 2 - (elementY.value / h) * MAX).toFixed(2)
  const rY = ((elementX.value / w) * MAX - MAX / 2).toFixed(2)
  return isOutside.value
    ? 'translateZ(0)'
    : `perspective(${w}px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(0)`
})

const tileStyle = computed(() => {
  const w = Math.max(1, elementWidth.value)
  const h = Math.max(1, elementHeight.value)

  // Clamp pointer inside tile
  const x = Math.min(Math.max(elementX.value, 0), w)
  const y = Math.min(Math.max(elementY.value, 0), h)

  // Normalized cursor for CSS vars
  const mx = `${(x / w) * 100}%`
  const my = `${(y / h) * 100}%`

  // Edge proximity glow
  const minDist = Math.min(x, y, w - x, h - y)
  const threshold = Math.min(w, h) * 0.18
  let edge = 1 - minDist / Math.max(threshold, 1)
  edge = Math.min(Math.max(edge, 0), 1)
  const t = edge
  const smoothEdge = t * t * (3 - 2 * t)

  return {
    aspectRatio: '1 / 1',
    transform: cardTransform.value,
    '--mx': mx,
    '--my': my,
    '--edge': String(isOutside.value ? 0 : smoothEdge),
    '--fit': cssFit.value
  } as Record<string, string>
})
</script>

<template>
  <div ref="target" class="interactive-tile" :style="tileStyle">
    <img
      :src="imageSrc"
      :alt="props.alt"
      class="tile-image"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.interactive-tile {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1 / 1;
  padding: clamp(10px, 1.8vw, 16px);
  box-sizing: border-box;
  border-radius: $radius-lg;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: $shadow-soft;
  overflow: hidden;
  clip-path: inset(0 round $radius-lg);
  transform-style: preserve-3d;
  will-change: transform, box-shadow;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: $grad-card-border;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    pointer-events: none;
    z-index: 2;
  }


  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    /* radial gradient en blur blijven */
    background:
      radial-gradient(
        150px 150px at
        calc(50% + (var(--mx, 50%) - 50%) * 0.4)
        calc(50% + (var(--my, 50%) - 50%) * 0.4),
        rgba(96, 165, 250, 0.61),
        transparent 70%
      );
    filter: blur(18px);
    mix-blend-mode: screen;
    /* standaard niet zichtbaar */
    opacity: 0;
    transition: opacity 0.25s ease-out;
    z-index: 0;
  }

    &:hover::after {
    opacity: calc(var(--edge, 0) * 0.8 + 0.2);
  }
}


.tile-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: var(--fit, contain);
  object-position: center;
  transform: translateZ(16px);
  backface-visibility: hidden;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.45));
  transition: transform .2s ease;
  position: relative;
  z-index: 1;
}

</style>
