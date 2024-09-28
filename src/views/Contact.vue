<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'

import Link from '@/components/Link.vue';

usePageTitle();
</script>

<template>
    <div class="flex justify-center items-center min-h-screen">
        <section class="flex flex-col justify-center items-center">
            <h1 class="text-4xl font-black mb-5">Contact</h1>
            <p class="text-lg">Contacteer mij astublieft op mijn <Link href="www.linkedin.com/in/luuk-spruijtenburg-05aa89243" target="_blank">LinkedIn.</Link></p>
        </section>  
    </div>  
</template>

<style scoped></style>
