<script setup lang="ts">
import { ref } from 'vue';
import Screenshot from '@/components/Screenshot.vue';
import BaseCard from '@/components/BaseCard.vue';
import { projectImage } from '@/utils/projectImage';
import { EXTERNAL_LINK_ATTRS } from '@/utils/externalLink'

const images = ref<string[]>([
    projectImage('space_project/space_project_home.png'),
    projectImage('space_project/space_project_earth.png'),
    projectImage('space_project/space_project_earth_phone.png'),
    projectImage('space_project/space_project_venus.png'),
    projectImage('space_project/space_project_venus_2.png'),
    projectImage('space_project/space_project_venus_phone.png'),
    projectImage('space_project/space_project_mars.png'),
    projectImage('space_project/space_project_mars_phone.png'),
    projectImage('space_project/space_project_footer.png'),
]);
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-10">
        <h1 class="text-4xl font-black text-center mb-5">
            Space Project
        </h1>
        <BaseCard :motion="false" cardClass="bg-neutral text-neutral-content lg:w-3/6">
            <h2 class="text-2xl font-black text-start">
                Projectomschrijving
            </h2>
            <p>
                Dit project heb ik samen met een mede student gemaakt. Het project omvat de creatie van een
                informatieve en responsive website over de planeten in ons zonnestelsel.
            </p>
            <p class="mb-4">
                Tijdens deze eindopdracht heb ik geleerd hoe ik een website kan ontwikkelen met behulp van HTML en
                CSS. Het doel was om een responsive website te maken met verschillende pagina's die informatie
                bieden over de planeten in ons zonnestelsel. De website bevat onder andere een overzicht van
                planeten, een image gallery, en interactieve elementen zoals een navigatiemenu en een
                contactformulier.
            </p>
            <h2 class="text-2xl font-black">
                Functionele Eisen
            </h2>
            <h3 class="text-xl font-black">
                Pagina's
            </h3>
            <ul class="list-disc ml-10">
                <li class="ml-10"><span class="font-bold">Homepagina:</span> Een introductiepagina over het
                    zonnestelsel.</li>
                <li class="ml-10"><span class="font-bold">Tekstpagina:</span> Informatie over de verschillende
                    planeten.</li>
                <li class="ml-10"><span class="font-bold">Alternatieve:</span> Tekstpagina: Een tekstpagina met een
                    andere layout.</li>
                <li class="ml-10"><span class="font-bold">Contactpagina:</span> Een contactformulier voor bezoekers
                    om in contact te komen.</li>
            </ul>
            <h3 class="text-xl font-black">
                Layout
            </h3>
            <ul class="list-disc ml-10">
                <li class="ml-10"><span class="font-bold">Basislayout:</span> De website bevat een consistente
                    header en footer op elke pagina.</li>
                <li class="ml-10"><span class="font-bold">Navigatie:</span> Een horizontaal drop-down navigatiemenu
                    voor eenvoudige toegang tot alle pagina's.</li>
            </ul>
            <h3 class="text-xl font-black">
                Responsiviteit
            </h3>
            <ul class="list-disc ml-10 mb-4">
                <li class="ml-10">De website is volledig responsive en past zich aan op verschillende schermgroottes
                    door het gebruik van media queries.</li>
                <li class="ml-10"><span class="font-bold">Breakpoints:</span> Minimaal één breakpoint bij 480px om
                    ervoor te zorgen dat de website er goed uitziet op zowel mobiele apparaten als desktops.</li>
            </ul>
            <h2 class="text-2xl font-black">
                Technische Eisen
            </h2>
            <ul class="list-disc ml-10">
                <li><span class="font-bold">HTML/CSS:</span> De website is gebouwd met alleen HTML en CSS, waarbij
                    gebruik is gemaakt van best practices om een nette en functionele website te maken.</li>
                <li><span class="font-bold">Media Queries:</span> Er zijn media queries gebruikt om de website
                    responsive te maken en ervoor te zorgen dat de layout op verschillende apparaten goed werkt.
                </li>
            </ul>
            <div class="flex justify-center">
                <a href="https://luuk0510.github.io/space-project/" v-bind="EXTERNAL_LINK_ATTRS" class="btn btn-primary text-lg">Link
                    naar project</a>
            </div>
        </BaseCard>
    </section>

    <Screenshot :images="images" />

</template>

<style scoped></style>
