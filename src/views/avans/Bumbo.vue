<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-20 px-4">
        <h1 class="text-4xl font-black mb-5">
            Bumbo
        </h1>
        <BaseCard :motion="false" cardClass="bg-neutral text-neutral-content lg:w-3/6" bodyClass="items-center">
            <p>
                Hier komt meer informatie over het Bumbo project.
            </p>
        </BaseCard>
    </section>
</template>

<style scoped></style>
