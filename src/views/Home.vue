<script setup lang="ts">
import { ref } from 'vue';

import Timeline from '@/components/Timeline.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';

import IconDownArrow from '@/components/icons/IconDownArrow.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import { useHero } from '@/composables/useHero';
import BaseCard from '@/components/BaseCard.vue';
import { heroLogos, type Logo } from '@/data/logos';
import { useAnimateOnce } from '@/composables/useAnimateOnce'
import { STORAGE_KEYS } from '@/constants/storageKeys'
import { HOME } from '@/constants/animations'

const { displayedText, isTyping, showBlinkingCursor, showButton, linksAnimated, scrollToItem } = useHero();

const logos = ref<Logo[]>(heroLogos);
const { shouldAnimate } = useAnimateOnce(STORAGE_KEYS.homeHasAnimated)
</script>


<template>
    <section class="flex flex-col justify-center items-center text-center h-[calc(100vh-100px)]">
        <h1 class="text-6xl font-jetbrains mb-5">
            {{ displayedText }}
            <span v-if="isTyping" class="solid-cursor"></span>
            <span v-if="showBlinkingCursor" class="blinking-cursor"></span>
        </h1>
        <div class="flex justify-center mt-2 gap-x-2">
            <a href="https://github.com/Luuk0510" target="_blank">
                <IconGitHub v-if="linksAnimated" v-motion-slide-left :delay="4500" :duration="1200" size="60px" />
                <IconGitHub v-else size="60px" />
            </a>
            <a href="https://www.linkedin.com/in/luuk-spruijtenburg-05aa89243/" target="_blank">
                <IconLinkedIn v-if="linksAnimated" v-motion-slide-right :delay="4500" :duration="1200" size="60px" />
                <IconLinkedIn v-else size="60px" />
            </a>
        </div>
    </section>

    <div v-if="showButton" class="flex justify-center -mt-32">
        <div class="bounce2 cursor-pointer" style="opacity: 1;" @click="scrollToItem">
            <IconDownArrow size="100px" class="hover:text-primary transition" />
        </div>
    </div>

    <section class="mt-40 mb-20 item-scroll">
        <div class="flex flex-col justify-center items-center">
            <div
              v-if="shouldAnimate"
              v-motion-slide-visible-once-bottom
              class="w-full flex justify-center"
            >
              <BaseCard cardClass="bg-neutral text-neutral-content lg:w-3/6" bodyClass="items-center">
                  <template #header>
                      <h2 class="card-title font-black text-4xl">Over mij!</h2>
                  </template>
                  <p>
                      Hallo! Ik ben Luuk, derdejaars HBO Informatica student met een passie voor softwareontwikkeling
                      en nieuwe technologieën.
                      Ik werk graag aan uitdagende projecten en zet mijn kennis in programmeertalen zoals C#, Laravel,
                      JavaScript, SQL, HTML en CSS
                      in om creatieve en praktische oplossingen te realiseren.
                  </p>
                  <p>
                      Samenwerken in teams en het behalen van duidelijke doelen geven mij energie.
                      Ik ben leergierig en altijd op zoek naar nieuwe manieren om mijn vaardigheden verder te
                      ontwikkelen.
                  </p>
                  <p>
                      In mijn vrije tijd programmeer ik graag, lees ik boeken, kijk ik films en series en game ik met vrienden.
                      Welkom op mijn portfolio! Hier vind je een overzicht van mijn werk en projecten.
                  </p>
              </BaseCard>
            </div>

            <BaseCard v-else cardClass="bg-neutral text-neutral-content lg:w-3/6" bodyClass="items-center">
                <template #header>
                    <h2 class="card-title font-black text-4xl">Over mij!</h2>
                </template>
                <p>
                    Hallo! Ik ben Luuk, derdejaars HBO Informatica student met een passie voor softwareontwikkeling
                    en nieuwe technologieën.
                    Ik werk graag aan uitdagende projecten en zet mijn kennis in programmeertalen zoals C#, Laravel,
                    JavaScript, SQL, HTML en CSS
                    in om creatieve en praktische oplossingen te realiseren.
                </p>
                <p>
                    Samenwerken in teams en het behalen van duidelijke doelen geven mij energie.
                    Ik ben leergierig en altijd op zoek naar nieuwe manieren om mijn vaardigheden verder te
                    ontwikkelen.
                </p>
                <p>
                    In mijn vrije tijd programmeer ik graag, lees ik boeken, kijk ik films en series en game ik met vrienden.
                    Welkom op mijn portfolio! Hier vind je een overzicht van mijn werk en projecten.
                </p>
            </BaseCard>
        </div>
    </section>

    <section>
        <div class="my-40">
            <div
              v-if="shouldAnimate"
              v-motion-slide-visible-once-bottom
              class="block w-full"
            >
              <h2 class="text-4xl font-black text-center mb-4">Vaardigheden</h2>
            </div>
            <h2 v-else class="text-4xl font-black text-center mb-4">Vaardigheden</h2>
            <div class="flex flex-wrap justify-center gap-6 md:gap-10">
                <template v-for="(logo, index) in logos" :key="logo.alt">
                  <div
                    v-if="shouldAnimate"
                    :key="`${logo.alt}-motion`"
                    v-motion-pop-visible-once
                    :delay="index * HOME.logoStaggerDelay"
                    :duration="HOME.logoDuration"
                    class="card bg-base-200 shadow-xl"
                  >
                    <div class="card-body">
                      <InteractiveImage :src="logo.src" :alt="logo.alt" width="150px" height="150px" />
                    </div>
                  </div>
                  <div v-else :key="`${logo.alt}-static`" class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                      <InteractiveImage :src="logo.src" :alt="logo.alt" width="150px" height="150px" />
                    </div>
                  </div>
                </template>
            </div>
            <div
              v-if="shouldAnimate"
              v-motion-pop-visible-once
              :delay="HOME.ctaDelay"
              :duration="HOME.ctaDuration"
              class="flex justify-center items-center mt-10"
            >
              <router-link to="/skills" class="btn btn-primary text-lg">
                Lees meer over mijn vaardigheden
              </router-link>
            </div>
            <div v-else class="flex justify-center items-center mt-10">
              <router-link to="/skills" class="btn btn-primary text-lg">
                Lees meer over mijn vaardigheden
              </router-link>
            </div>
        </div>
    </section>

    <section class="mt-20">
        <div
          v-if="shouldAnimate"
          v-motion-slide-visible-once-bottom
          class="block w-full"
        >
          <h2 class="text-center text-4xl font-black mb-10">Tijdlijn</h2>
        </div>
        <h2 v-else class="text-center text-4xl font-black mb-10">Tijdlijn</h2>
        <Timeline :motion="shouldAnimate" />
    </section>
</template>

<style scoped>
.solid-cursor {
    border-right: 4px solid var(--color-base-300);
    animation: none;
}

.blinking-cursor {
    border-right: 4px solid var(--color-base-300);
    animation: blink 1.25s step-end infinite;
}

@keyframes blink {
    50% {
        border-right-color: transparent;
    }
}

.bounce2 {
    animation: bounce2 2s ease infinite;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.fade-in {
    opacity: 1;
}

@keyframes bounce2 {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}
</style>
