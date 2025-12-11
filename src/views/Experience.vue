<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'
import BaseCard from '@/components/BaseCard.vue'

usePageTitle();
</script>

<template>
    <div class="lg:inset-0 justify-center items-center">
        <div class="flex flex-col justify-center items-center mt-24 mb-20">
            <h1 class="text-4xl font-black mb-5">Werkervaring</h1>
            sep 2024 - jan 2025
            <BaseCard cardClass="bg-neutral text-neutral-content lg:w-3/6 shadow-xl" bodyClass="items-center">
                <p class="text-4xl font-black mb-5 text-center">
                    Marvelous
                </p>
                <p>
                    Placeholder
                </p>
            </BaseCard>
            <br>
            feb 2021 - aug 2024
            <BaseCard cardClass="bg-neutral text-neutral-content lg:w-3/6 shadow-xl" bodyClass="items-center">
                <p class="text-4xl font-black mb-5 text-center">
                    Mobicoach
                </p>
                <p>
                    Placeholder
                </p>
            </BaseCard>
        </div>
    </div>
</template>

<style scoped></style>
