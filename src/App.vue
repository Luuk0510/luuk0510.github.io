<script setup>
import Navbar from '@/components/Navbar.vue'
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

onMounted(() => {
    themeChange(false)
})
</script>

<template>
    <div >
        <Navbar />
        <main class="mt-20 m-4">
            <router-view v-slot="{ Component, route }" class="absolute">
                <transition
                    :enter-active-class="route.meta.enterClass"
                    :leave-active-class="route.meta.leaveClass"
                >
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
    </div>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
