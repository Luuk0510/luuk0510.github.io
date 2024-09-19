<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const enterClass = ref('')
const leaveClass = ref('')

const route = useRoute()

watch(() => route.fullPath, (to, from) => {
    console.log(to);
    console.log(from);
     
    const toIndex = (to.meta && to.meta.index) || 0
    const fromIndex = (from.meta && from.meta.index) || 0

    if (toIndex < fromIndex) {
        enterClass.value = 'animate__animated animate__fadeInLeft'
        leaveClass.value = 'animate__animated animate__fadeOutRight'
    } else {
        enterClass.value = 'animate__animated animate__fadeInRight'
        leaveClass.value = 'animate__animated animate__fadeOutLeft'
    }

    console.log('Navigating to route with index:', route)
    console.log('Navigating from route with index:', route)
})
</script>

<template>
    <div>
        <Navbar />
        <main class="mt-20 m-4">
            <router-view v-slot="{ Component, route }">
                <transition
                  :enter-active-class="enterClass"
                  :leave-active-class="leaveClass"
                >
                    <div :key="route.path">
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