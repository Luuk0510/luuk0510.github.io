<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import Timeline from '@/components/Timeline.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';

import IconDownArrow from '@/components/icons/IconDownArrow.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

import HTML5Logo from '@/assets/images/html5_logo.png';
import CSS3Logo from '@/assets/images/css3_logo.png';
import JavaScriptLogo from '@/assets/images/javascript_logo.png'
import TailwindLogo from '@/assets/images/tailwind_logo.png'
import VueLogo from '@/assets/images/vue_logo.png';
import SQLLogo from '@/assets/images/sql_logo.png';
import CSharpLogo from '@/assets/images/csharp_logo.png';
import PHPLogo from '@/assets/images/php_logo.png';
import LaravelLogo from '@/assets/images/laravel_logo.png';
import PythonLogo from '@/assets/images/python_logo.png';

const fullText = "Welkom op mijn portfolio!";
const displayedText = ref<string>("");
const isTyping = ref<boolean>(true);
const showBlinkingCursor = ref<boolean>(false); 
const showButton = ref<boolean>(false);

const typingSpeed = 150;
const cursorBlinkDuration = 3000;

onMounted(() => {
    setTimeout(() => {
        let index = 0;
        const type = () => {
            if (index < fullText.length) {
                displayedText.value += fullText[index];
                index++;
                setTimeout(type, typingSpeed);
            } else {
                isTyping.value = false;
                showBlinkingCursor.value = true;

                setTimeout(() => {
                    showBlinkingCursor.value = false;
                }, cursorBlinkDuration);
            }
        };
        type();
    }, 1000);

    setTimeout(() => {
        showButton.value = true;
    }, 6500);

    window.addEventListener('scroll', handleScroll);
});

function handleScroll(): void {
    const button = document.querySelector<HTMLDivElement>('.bounce2');
    if (button) {
        if (window.scrollY > 200) {
            button.style.opacity = '0';
        } else {
            button.style.opacity = '1';
        }
    }
}

function scrollToItem(): void {
    const timeline = document.querySelector<HTMLDivElement>('.item-scroll');
    if (timeline) {
        const timelinePosition = timeline.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: timelinePosition - 250,
            behavior: 'smooth',
        });
    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
</script>

<template>
    <div class="absolute">
        <section class="flex flex-col justify-center items-center text-center h-[calc(100vh-200px)]">
            <h1 class="text-6xl font-jetbrains mb-5">
                {{ displayedText }}
                <span v-if="isTyping" class="solid-cursor"></span>
                <span v-if="showBlinkingCursor" class="blinking-cursor"></span>
            </h1>
            <div class="flex justify-center mt-2 gap-x-2">
                <a href="https://github.com/Luuk0510" target="_blank">
                    <IconGitHub v-motion-slide-left :delay="5000" :duration="1200" size="60px" />
                </a>
                <a href="https://www.linkedin.com/in/luuk-spruijtenburg-05aa89243/" target="_blank">
                    <IconLinkedIn v-motion-slide-right :delay="5000" :duration="1200" size="60px" />
                </a>
            </div>
        </section>

        <div v-if="showButton" class="flex justify-center lg:-mt-10 -mt-20">
            <div class="bounce2 cursor-pointer" style="opacity: 1;" @click="scrollToItem">
                <IconDownArrow size="100px" />
            </div>
        </div>

        <section class="mt-40 mb-20 item-scroll" v-motion-slide-visible-once-bottom>
            <div class="flex flex-col justify-center items-center">
                <div class="card bg-neutral text-neutral-content lg:w-3/6">
                    <div class="card-body items-center">
                        <h2 class="card-title font-black text-4xl">Over mij!</h2>
                        <p>
                            Hallo! Ik ben Luuk, een derdejaars HBO Informatica student met een passie voor
                            softwareontwikkeling en nieuwe technologieën.
                            Ik hou ervan om creatieve oplossingen te vinden en ben altijd op zoek naar manieren om mijn
                            vaardigheden verder te ontwikkelen.
                            In mijn vrije tijd werk ik aan projecten, leer ik nieuwe programmeertalen en speel ik graag
                            games.
                            Welkom op mijn portfolio, waar je een kijkje kunt nemen in mijn werk en projecten!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="my-40">
                <div v-motion-slide-visible-once-bottom>
                    <h2 class="text-4xl font-black text-center mb-4">Vaardigheden</h2>
                </div>
                <div class="flex flex-wrap justify-center gap-6 md:gap-10">
                    <div v-motion-pop-visible-once :delay="100" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="HTML5Logo" alt="HTML logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="200" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="CSS3Logo" alt="CSS logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="300" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="JavaScriptLogo" alt="JavaScript logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="400" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="TailwindLogo" alt="Tailwind logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="500" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="VueLogo" alt="Vue logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="600" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="SQLLogo" alt="SQL logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="700" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="CSharpLogo" alt="C Sharp logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="800" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="PHPLogo" alt="PHP logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="900" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="LaravelLogo" alt="Laravel logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="1000" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage :src="PythonLogo" alt="Python logo" width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-10" v-motion-pop-visible-once :delay="1000" :duration="500">
                    <router-link to="/skills" @click.native="scrollToTop" class="btn btn-primary text-lg">Lees meer over mijn vaardigheden</router-link>
                </div>
            </div>
        </section>


        <section class="mt-20">
            <h2 class="text-center text-4xl font-black mb-10" v-motion-slide-visible-once-bottom>Tijdlijn</h2>
            <Timeline />
        </section>
    </div>
</template>

<style scoped>
.solid-cursor {
    border-right: 4px solid oklch(var(--bc));
    animation: none;
}

.blinking-cursor {
    border-right: 4px solid oklch(var(--bc));
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
