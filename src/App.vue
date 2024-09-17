<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div>
        <Navbar />
        <main class="mt-20 m-4">
            <RouterView />
        </main>
    </div>
</template>

<style scoped></style>