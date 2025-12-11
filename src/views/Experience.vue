<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'
import BaseCard from '@/components/BaseCard.vue'

usePageTitle();
</script>

<template>
    <div class="lg:inset-0 justify-center items-center">
        <div class="flex flex-col justify-center items-center mt-24 mb-20 gap-8">
            <h1 class="text-4xl font-black mb-5">Werkervaring</h1>

            <div class="flex flex-col items-center gap-2">
                <p class="font-mono italic">sep 2024 - jan 2025</p>
                <BaseCard :motion="true" :delay="800" :duration="800"
                    cardClass="bg-neutral text-neutral-content lg:w-3/6 shadow-xl" bodyClass="items-center">
                    <p class="text-4xl font-black mb-5 text-center">
                        Marvelous
                    </p>
                    <p>
                        Hier komt een tekst over de stage bij Marvelous en wat ik heb gedaan.
                    </p>
                </BaseCard>
            </div>

            <div class="flex flex-col items-center gap-2">
                <p class="font-mono italic">feb 2021 - aug 2024</p>
                <BaseCard :motion="true" :delay="900" :duration="800"
                    cardClass="bg-neutral text-neutral-content lg:w-3/6 shadow-xl" bodyClass="items-center">
                    <p class="text-4xl font-black mb-5 text-center">
                        Mobicoach
                    </p>
                    <p>
                        Hier komt tekst over de stage en part time werk bij Mobicaoch en wat ik heb gedaan.
                    </p>
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
