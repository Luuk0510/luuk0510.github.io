<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const enterClass = ref<string>('')
const leaveClass = ref<string>('')

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
</script>


<template>
    <div>
        <Navbar />
        <main class="mt-20 lg:m-4">
            <router-view v-slot="{ Component, route }">
                <transition
                  :enter-active-class="enterClass"
                  :leave-active-class="leaveClass"
                >
                    <div :key="route.path" class="absolute">
                        <component :is="Component"></component>
                    </div>
                </transition>
            </router-view>
        </main>
    </div>
</template>

<style scoped>
.wrapper {
    position: absolute;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>