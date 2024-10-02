<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'

usePageTitle();
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-20">
        <h1 class="text-4xl font-black mb-5">
            Space Project
        </h1>
        <div class="card bg-neutral text-neutral-content lg:w-3/6">
            <div class="card-body items-center">
                <p>
                    Dit project heb ik samen met een mede student gemaakt. Het project omvat de creatie van een informatieve en responsive website over de planeten in ons zonnestelsel.
                </p>
                <p>
                    Tijdens deze eindopdracht heb ik geleerd hoe ik een website kan ontwikkelen met behulp van HTML en CSS. Het doel was om een responsive website te maken met verschillende pagina's die informatie bieden over de planeten in ons zonnestelsel. De website bevat onder andere een overzicht van planeten, een image gallery, en interactieve elementen zoals een navigatiemenu en een contactformulier.
                </p>
            </div>
        </div>
    </section>        
</template>

<style scoped></style>
