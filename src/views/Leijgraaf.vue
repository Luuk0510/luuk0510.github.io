<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'

import Link from '@/components/Link.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';

import MobicoachLogo from '@/assets/images/mobicoach_logo.png';

usePageTitle();
</script>

<template>  
    <section class="flex flex-col justify-center items-center mt-24 mb-20">
        <h1 class="text-4xl font-black mb-5">
            De Leijgraaf
        </h1>
        <div class="card bg-neutral text-neutral-content lg:w-3/6">
            <div class="card-body items-center">
                <p>
                    Van augustus 2019 tot juni 2022 heb ik MBO niveau 4 gestudeerd aan de Leijgraaf in Oss, wat nu <Link href="https://www.kw1c.nl/" target="_blank">Koning Willem I College</Link> is geworden. Hier heb ik een sterke basis gelegd in webontwikkeling en design, met een focus op programmeertalen zoals PHP, HTML, en CSS, waarmee ik diverse websites en applicaties heb gebouwd.
                </p>
                <p>
                    Naast het technische aspect heb ik ook lessen gevolgd in UX en UI design, waarbij ik heb geleerd om intuïtieve en aantrekkelijke gebruikersinterfaces te ontwerpen.
                </p>
                <p>
                    Tijdens mijn opleiding heb ik twee stages gelopen, waarbij ik praktijkervaring opdeed in de IT-wereld. Door in teamverband te werken en projecten binnen strakke deadlines af te ronden, heb ik mijn vaardigheden in samenwerking en communicatie verder ontwikkeld.
                </p>
                <p>
                    Deze periode aan de Leijgraaf heeft me een solide basis gegeven in zowel frontend- als backendontwikkeling. Het heeft me goed voorbereid op verdere studies en een carrière in de ICT, met een brede combinatie van technische en designvaardigheden.
                </p>
            </div>
        </div>
    </section>

    <section class="flex flex-col justify-center items-center text-center mb-20">
        <h2 class="text-3xl font-black text-center mb-5">Stage</h2>
        <div class="card bg-neutral-content shadow-xl">
            <div class="card-body">
                <InteractiveImage 
                    :src="MobicoachLogo" 
                    alt="Mobicoach logo" 
                    width="400px" 
                    height="150px" 
                />
                <router-link to="/mobicoach" class="btn btn-primary text-base mt-6">Lees meer over mijn stage bij Mobicoach</router-link>
            </div>
        </div>  
    </section>  
</template>

<style scope>

</style>