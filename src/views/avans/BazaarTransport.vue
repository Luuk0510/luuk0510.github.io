<script setup lang="ts">
import { ref } from 'vue';
import Screenshot from '@/components/Screenshot.vue';
import BaseCard from '@/components/BaseCard.vue';
import { projectImage } from '@/utils/projectImage';
import { EXTERNAL_LINK_ATTRS } from '@/utils/externalLink'

const images = ref<string[]>([
    projectImage('bazaar_transport/screenshot_1.png'),
    projectImage('bazaar_transport/screenshot_2.png'),
    projectImage('bazaar_transport/screenshot_3.png')
]);
</script>

<template>
    <section class="flex flex-col justify-center items-center mt-24 mb-20">
        <h1 class="text-4xl font-black mb-5">
            Bazaar transport
        </h1>
        <BaseCard :motion="false" cardClass="bg-neutral text-neutral-content lg:w-3/6">
            <h2 class="text-2xl font-black text-start">
                Projectomschrijving
            </h2>
            <p>
                Dit project is een simulatie-app voor het transport- en distributieproces van Bazaar Express Transport.
                De app helpt inzicht te krijgen in de efficiëntie van het laden van pallets en pakketten in vrachtwagens
                en biedt voorspellende analyses van mogelijke problemen.
            </p>
            <p>
                De app is ontwikkeld als onderdeel van een eindopdracht, waarbij gebruik wordt gemaakt van pure vanilla
                JavaScript, zonder externe frameworks, pakketten of modules.
            </p>
            <h2 class="text-2xl font-black text-start">
                Functies
            </h2>
            <ul class="list-disc ml-10 mb-4">
                <li><span class="font-bold">Vrachtwagen configuratie:</span> Gebruikers kunnen vrachtwagens aanmaken via
                    een stap-voor-stap formulier met de volgende kenmerken.</li>
                <ul class="list-disc ml-10">
                    <li>Lengte en breedte (met een maximum)</li>
                    <li>Aankomstinterval (in seconden)</li>
                    <li>Type transport: Koud transport | Breekbaar transport | Algemeen transport | Pallets |
                        Snelkoerier</li>
                </ul>
                <li><span class="font-bold">Virtuele lopende band:</span> Pakketten worden gegenereerd in verschillende
                    tetromino-vormen, geïnspireerd op het spel Tetris.</li>
                <li><span class="font-bold">Echte tetromino plaatsing:</span> Pakketten behouden hun originele
                    Tetris-vorm wanneer ze in vrachtwagens worden geplaatst, zonder herformattering naar vierkante
                    blokken.</li>
                <li><span class="font-bold">Meerdere lopende banden:</span> Gebruikers kunnen tijdens de simulatie
                    meerdere lopende banden toevoegen.</li>
                <li><span class="font-bold">Animaties:</span> Pakketten worden geanimeerd terwijl ze naar de
                    vrachtwagens worden geladen.</li>
                <li><span class="font-bold">Drag & Drop:</span> Handmatige plaatsing van pakketten in vrachtwagens door
                    drag & drop.</li>
                <li><span class="font-bold">Wisselen tussen laadhallen:</span> Er zijn twee beschikbare laadhallen en
                    gebruikers kunnen ertussen schakelen zonder dat de pagina herlaadt.</li>
                <li><span class="font-bold">Weerafhankelijke simulatie:</span> Bepaalde vrachtwagens rijden niet bij
                    specifieke weersomstandigheden.</li>
                <ul class="list-disc ml-10">
                    <li>Breekbaar transport rijdt niet bij regen of sneeuw</li>
                    <li>Koud transport rijdt niet boven de 35 graden</li>
                    <li>Palletvrachtwagens rijden niet bij harde wind</li>
                </ul>
                <li><span class="font-bold">Weer API integratie:</span> De app maakt gebruik van een API om actuele
                    weersinformatie op te halen. Een debug veld maakt het eenvoudig om locaties en daarmee
                    weersomstandigheden te wisselen.</li>
            </ul>
            <div class="flex justify-center">
                <a href="https://luuk0510.github.io/bazaar-transport/" v-bind="EXTERNAL_LINK_ATTRS"
                    class="btn btn-primary text-lg">Link naar project</a>
            </div>
        </BaseCard>
    </section>

    <Screenshot :images="images" />

</template>

<style scoped></style>
