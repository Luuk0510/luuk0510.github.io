<script setup lang="ts">
import { ref } from 'vue';
import Screenshot from '@/components/Screenshot.vue';
import BaseCard from '@/components/BaseCard.vue';
import { projectImage } from '@/utils/projectImage';

const images = ref<string[]>([
    projectImage('ninja_frog/level_1_1.png'),
    projectImage('ninja_frog/level_1_2.png'),
    projectImage('ninja_frog/level_2_1.png'),
    projectImage('ninja_frog/level_2_2.png'),
    projectImage('ninja_frog/level_2_3.png'),
    projectImage('ninja_frog/level_2_4.png'),
    projectImage('ninja_frog/level_2_5.png'),
    projectImage('ninja_frog/level_3_1.png'),
    projectImage('ninja_frog/level_3_2.png'),
    projectImage('ninja_frog/level_3_3.png'),
    projectImage('ninja_frog/level_3_4.png'),
    projectImage('ninja_frog/level_3_5.png')
]);
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-10">
        <h1 class="text-4xl font-black mb-5">
            Ninja Frog
        </h1>
        <BaseCard :motion="false" cardClass="bg-neutral text-neutral-content lg:w-3/6">
            <h2 class="text-2xl font-black">
                Projectomschrijving
            </h2>
            <p>
                Ninja Frog is een 2D platformspel geïnspireerd door de klassieke gameplay van Super Mario Bros en de
                visuele stijl van de Pixel Adventure assets uit de Unity Asset Store. In dit spel bestuur je een
                ninja kikker die door diverse uitdagende levels springt, vijanden verslaat en fruit verzamelt.
            </p>
            <h2 class="text-2xl font-black">
                Inspiratie
            </h2>
            <p>
                Bij het zoeken naar inspiratie heb ik de Unity Asset Store en verschillende 2D-platformspellen
                verkend. Tijdens deze zoektocht kwam ik de Pixel Adventure 1 en 2 assets tegen, die een breed scala
                aan mogelijkheden bieden voor het creëren van levels. Deze assets hebben mij veel inspiratie
                gegeven. Mijn spelwijze is ook geïnspireerd door Super Mario Bros. De combinatie van deze elementen
                helpt mij om een leuk en uitdagend spel te ontwikkelen.
            </p>
            <h2 class="text-2xl font-black">
                Eigen Inbreng
            </h2>
            <ul class="list-disc ml-10">
                <li class="ml-10"><span class="font-bold">Checkpoints:</span> Implementatie van checkpoints om
                    spelprogressie op te slaan, zodat spelers niet steeds opnieuw hoeven te beginnen bij falen. Dit
                    systeem houdt bij welke items al verzameld zijn om herhaling te voorkomen. Highscore: De beste
                    score van ieder level wordt opgeslagen. Uitdagingen bij Power-ups: Het technisch realiseren van
                    situatiespecifieke power-ups die alleen geactiveerd kunnen worden wanneer ze nodig zijn.</li>
                <li class="ml-10"><span class="font-bold">Level Design:</span> Niet-lineaire levels die veelvuldige
                    paden en strategieën bieden om te verkennen, waardoor elke speelsessie uniek is.</li>
            </ul>
        </BaseCard>
    </section>

    <Screenshot :images="images" />

</template>

<style scoped></style>
