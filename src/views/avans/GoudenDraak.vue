<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'
import BaseCard from '@/components/BaseCard.vue'

usePageTitle();
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-20 px-4">
        <h1 class="text-4xl font-black mb-5">
            De Gouden Draak
        </h1>
        <BaseCard :motion="false" cardClass="bg-neutral text-neutral-content lg:w-3/6" bodyClass="items-center">
            <p>
                Hier komt meer informatie over De Gouden Draak.
            </p>
        </BaseCard>
    </section>
</template>

<style scoped></style>
