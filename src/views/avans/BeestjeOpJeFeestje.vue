<script setup lang="ts">
import { ref } from 'vue';
import Screenshot from '@/components/Screenshot.vue';
import BaseCard from '@/components/BaseCard.vue';
import { usePageTitle } from '@/composables/usePageTitle';
import { projectImage } from '@/utils/projectImage';

const images = ref<string[]>([
    projectImage('beestje_op_je_feestje/home_page.png'),
    projectImage('beestje_op_je_feestje/step_1_page.png'),
    projectImage('beestje_op_je_feestje/step_2_page.png'),
    projectImage('beestje_op_je_feestje/step_3_page.png'),
    projectImage('beestje_op_je_feestje/step_4_page.png'),
    projectImage('beestje_op_je_feestje/login_page.png'),
    projectImage('beestje_op_je_feestje/beestje_beheer_page.png'),
    projectImage('beestje_op_je_feestje/create_user_page.png'),
]);

usePageTitle();
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-10 px-4">
        <h1 class="text-4xl font-black mb-5">
            Beestje op je feestje
        </h1>
        <BaseCard :motion="false" cardClass="bg-neutral text-neutral-content lg:w-3/6">
            <h2 class="text-2xl font-black text-start">
                Projectomschrijving
            </h2>
            <p>
                Dit project is gemaakt met een mede student. Deze applicatie stelt gebruikers in staat om dieren te
                beheren en te boeken voor evenementen.
            </p>
            <p>
                Beestje op je Feestje is een administratieve webapplicatie ontwikkeld in C# en ASP.NET MVC. Het stelt
                gebruikers in staat om via een boekingsproces beestjes te reserveren voor feestelijke gelegenheden.
                Eigenaren van de boerderij kunnen dieren beheren, en klanten kunnen deze boeken tegen vastgestelde
                prijzen.
            </p>
            <h2 class="text-2xl font-black">
                Functionele Eisen
            </h2>
            <h3 class="text-xl font-black">
                Beestjes
            </h3>
            <ul class="list-disc ml-10">
                <li class="ml-10"><span class="font-bold">CRUD operaties:</span> Beheer van dieren inclusief creatie,
                    lezing, update, en verwijdering.</li>
                <li class="ml-10"><span class="font-bold">Attributen:</span> Elk dier heeft een naam, type, prijs, en
                    een verwijzing naar een afbeelding.</li>
            </ul>
            <h3 class="text-xl font-black">
                Beestjes
            </h3>
            <ul class="list-disc ml-10">
                <li class="ml-10"><span class="font-bold">Accountbeheer:</span> De boerderij kan accounts aanmaken voor
                    gasten, inclusief speciale klantenkaarten die extra rechten en kortingen bieden.</li>
            </ul>
            <h3 class="text-xl font-black">
                Boeking beheer
            </h3>
            <ul class="list-disc ml-10">
                <li class="ml-10"><span class="font-bold">Proces:</span> Gebruikers selecteren dieren en een datum,
                    voeren contactinformatie in, en bevestigen hun boeking.</li>
                <li class="ml-10"><span class="font-bold">Validatie- en Kortingsregels:</span> Specifieke regels voor
                    boeking zoals maximale aantallen dieren afhankelijk van het type klantenkaart en kortingen op
                    bepaalde dagen of combinaties van dieren.</li>
            </ul>
            <h2 class="text-2xl font-black">
                Technische Eisen
            </h2>
            <ul class="list-disc ml-10">
                <li class="ml-10"><span class="font-bold">Database:</span> Microsoft SQL voor opslag van diergegevens en
                    boekingsinformatie.</li>
                <li class="ml-10"><span class="font-bold">Framework:</span> ASP.NET Core MVC.</li>
                <li class="ml-10"><span class="font-bold">Unit Testen:</span> Beschikbaar voor alle validatieregels en
                    kortingsregels.</li>
            </ul>
        </BaseCard>
    </section>

    <Screenshot :images="images" />
</template>

<style scoped></style>
