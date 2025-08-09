<!-- src/App.vue -->
<script setup lang="ts">
// English comments only
import Navbar from '@/components/Navbar.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// bestaande route-animatie code
const enterClass = ref('')
const leaveClass = ref('')
const route = useRoute()
const router = useRouter()

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    const toRoute = router.resolve(newPath)
    const fromRoute = router.resolve(oldPath)
    const toIndex = (toRoute.meta?.index as number | undefined) || 0
    const fromIndex = (fromRoute.meta?.index as number | undefined) || 0
    if (toIndex < fromIndex) {
      enterClass.value = 'animate__animated animate__fadeInLeft'
      leaveClass.value = 'animate__animated animate__fadeOutRight'
    } else {
      enterClass.value = 'animate__animated animate__fadeInRight'
      leaveClass.value = 'animate__animated animate__fadeOutLeft'
    }
  }
)

onMounted(() => {
  let tx = innerWidth / 2, ty = innerHeight / 2
  let x = tx, y = ty
  addEventListener('pointermove', (e) => {
    tx = e.clientX
    ty = e.clientY
  }, { passive: true })
  const loop = () => {
    // smooth lerp zodat het niet hapert
    x += (tx - x) * 0.15
    y += (ty - y) * 0.15
    document.documentElement.style.setProperty('--hx', `${x}px`)
    document.documentElement.style.setProperty('--hy', `${y}px`)
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})
</script>

<template>
  <!-- overlay dat op iedere route werkt -->
<div class="dot-color-mask" aria-hidden="true"></div>
  <div>
    <Navbar />
    <main class="page-main">
      <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
          <div :key="route.path" class="page-content">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </main>
  </div>
</template>
<style scoped>
/* Dot-kleuring ligt achter alles */
.dot-color-mask {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
</style>