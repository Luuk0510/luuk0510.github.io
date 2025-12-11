<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'

import Link from '@/components/Link.vue';
import BaseCard from '@/components/BaseCard.vue';

import LeijgraafLogo from '@/assets/images/logo/leijgraaf_logo.png';
import AvansLogo from '@/assets/images/logo/avans_logo.png';

usePageTitle();
</script>

<template>
    <div class="lg:inset-0 justify-center items-center">
        <div class="flex flex-col justify-center items-center mt-24 mb-20">
            <h1 class="text-4xl font-black mb-5">Opleidingen</h1>

            <div class="grid lg:grid-cols-2 gap-10 lg:m-4">
                <div>
                    <h2 v-motion-slide-bottom :delay="600" :duration="800" class="text-3xl font-bold mb-4 text-center">Avans</h2>
                    <p v-motion-slide-bottom :delay="800" :duration="800" class="font-mono italic text-lg text-center">sep 2022 - heden</p>
                    <BaseCard
                        :motion="true"
                        :delay="1000"
                        :duration="800"
                        cardClass="bg-neutral text-neutral-content"
                        bodyClass="items-center"
                    >
                        <img 
                            :src="AvansLogo" 
                            alt="Avans logo" 
                            width="300px" 
                            height="" 
                        />
                        <p >
                            Ik ben derdejaars student Informatica aan <Link href="https://www.avans.nl/" target="_blank">Avans Hogeschool</Link> in Den Bosch. Tijdens mijn studie heb ik gewerkt met programmeertalen zoals C#, Laravel, Python en Unity, met een focus op webapplicaties.
                        </p>
                        <p>
                            In duo's heb ik veel ervaring opgedaan met samenwerking en projectmanagement. Ik heb methodieken zoals Agile, Scrum en Kanban gebruikt, wat mijn vaardigheden in planning, communicatie en flexibiliteit heeft verbeterd.
                        </p>
                        <p>
                            Naast webontwikkeling heb ik een game ontwikkeld in Unity en een Python-project gedaan, waarbij ik objectgeoriënteerd programmeren en algoritmes heb toegepast.
                        </p>
                        <p>
                            Ook heb ik stage gelopen tijdens mijn opleiding en heb ik veel geleerd.
                        </p>
                        <p>
                            Deze projecten hebben me een brede basis gegeven in frontend- en backend-ontwikkeling en mijn teamwork- en probleemoplossende vaardigheden sterk ontwikkeld.
                        </p>
                        <router-link to="/avans" class="btn btn-primary text-base mt-2">
                            Meer lezen over mijn studie bij Avans
                        </router-link>
                    </BaseCard>

                </div>

                <div>
                    <h2 v-motion-slide-bottom :delay="600" :duration="800" class="text-3xl font-bold mb-4 text-center">De Leijgraaf</h2>
                    <p v-motion-slide-bottom :delay="800" :duration="800" class="font-mono italic text-lg text-center">aug 2019 - juni 2022</p>
                    <BaseCard
                        :motion="true"
                        :delay="1000"
                        :duration="800"
                        cardClass="bg-neutral text-neutral-content"
                        bodyClass="items-center"
                    >
                        <img 
                            :src="LeijgraafLogo" 
                            alt="Leijgraaf logo" 
                            width="300px" 
                            height="" 
                        />
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
                        <router-link to="/leijgraaf" class="btn btn-primary text-base mt-2">
                            Meer lezen over mijn studie bij de Leijgraaf
                        </router-link>
                    </BaseCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
