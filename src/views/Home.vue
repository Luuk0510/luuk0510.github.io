<script setup lang="ts">
import { ref, onMounted } from 'vue';

import Timeline from '@/components/Timeline.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';

import IconDownArrow from '@/components/icons/IconDownArrow.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

import HTML5Logo from '@/assets/images/logo/html5_logo.png';
import CSS3Logo from '@/assets/images/logo/css3_logo.png';
import JavaScriptLogo from '@/assets/images/logo/javascript_logo.png';
import TailwindLogo from '@/assets/images/logo/tailwind_logo.png';
import VueLogo from '@/assets/images/logo/vue_logo.png';
import SQLLogo from '@/assets/images/logo/sql_logo.png';
import CSharpLogo from '@/assets/images/logo/csharp_logo.png';
import PHPLogo from '@/assets/images/logo/php_logo.png';
import LaravelLogo from '@/assets/images/logo/laravel_logo.png';

const fullText = "Welkom op mijn portfolio!";
const displayedText = ref<string>("");
const isTyping = ref<boolean>(true);
const showBlinkingCursor = ref<boolean>(false); 
const showButton = ref<boolean>(false);
const linksAnimated = ref<boolean>(false);

const typingSpeed = 150;
const cursorBlinkDuration = 3000;

interface Logo {
    src: string;
    alt: string;
}

const logos = ref<Logo[]>([
    { src: HTML5Logo, alt: "HTML logo" },
    { src: CSS3Logo, alt: "CSS logo" },
    { src: JavaScriptLogo, alt: "JavaScript logo" },
    { src: TailwindLogo, alt: "Tailwind logo" },
    { src: VueLogo, alt: "Vue logo" },
    { src: SQLLogo, alt: "SQL logo" },
    { src: CSharpLogo, alt: "C Sharp logo" },
    { src: PHPLogo, alt: "PHP logo" },
    { src: LaravelLogo, alt: "Laravel logo" },
]);

onMounted(() => {
    handleTextTyping();
    handleLinkAnimations();
    window.addEventListener('scroll', handleScroll);
});

function handleTextTyping(): void {
    const hasTyped = sessionStorage.getItem('hasTyped');

    if (!hasTyped) {
        typeText(() => {
            sessionStorage.setItem('hasTyped', 'true');
        });
    } else {
        displayedText.value = fullText;
        showButton.value = true;
        isTyping.value = false;
        showBlinkingCursor.value = false;
    }
}

function handleLinkAnimations(): void {
    const hasAnimatedLinks = sessionStorage.getItem('hasAnimatedLinks');
    if (!hasAnimatedLinks) {
        linksAnimated.value = true;
        sessionStorage.setItem('hasAnimatedLinks', 'true');
    }
}

function typeText(onComplete: () => void): void {
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
                showButton.value = true;
                onComplete();
            }, cursorBlinkDuration);
        }
    };

    setTimeout(() => {
        type();
    }, 500);
}

function handleScroll(): void {
    const button = document.querySelector<HTMLDivElement>('.bounce2');
    if (button) {
        button.style.opacity = window.scrollY > 200 ? '0' : '1';
    }
}

function scrollToItem(): void {
    const timeline = document.querySelector<HTMLDivElement>('.item-scroll');
    if (timeline) {
        const timelinePosition = timeline.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: timelinePosition - 200,
            behavior: 'smooth',
        });
    }
}
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
                <IconGitHub 
                    v-if="linksAnimated" 
                    v-motion-slide-left 
                    :delay="4500" 
                    :duration="1200" 
                    size="60px" 
                />
                <IconGitHub 
                    v-else 
                    size="60px" 
                />
            </a>
            <a href="https://www.linkedin.com/in/luuk-spruijtenburg-05aa89243/" target="_blank">
                <IconLinkedIn 
                    v-if="linksAnimated" 
                    v-motion-slide-right 
                    :delay="4500" 
                    :duration="1200" 
                    size="60px" 
                />
                <IconLinkedIn 
                    v-else 
                    size="60px" 
                />
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
                        Hallo! Ik ben Luuk, een derdejaars HBO Informatica student met een passie voor softwareontwikkeling en nieuwe technologieën.
                        Ik werk graag aan uitdagende projecten en gebruik mijn kennis in programmeertalen zoals C#, Laravel, JavaScript, SQL, HTML en CSS om creatieve oplossingen te vinden.
                    </p>
                    <p>
                        Samenwerken in teams en het behalen van doelen zijn aspecten van mijn werk die ik erg waardeer. Ik ben altijd leergierig en op zoek naar manieren om mijn vaardigheden verder te ontwikkelen.
                    </p>    
                    <p>
                        In mijn vrije tijd houd ik van programmeren, lezen, films en series kijken, en natuurlijk gamen. Welkom op mijn portfolio, waar je een kijkje kunt nemen in mijn werk en projecten!
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
                <div 
                    v-for="(logo, index) in logos" 
                    :key="logo.alt" 
                    v-motion-pop-visible-once 
                    :delay="index * 100" 
                    :duration="600"
                >
                    <div class="card bg-base-200 shadow-xl">
                        <div class="card-body">
                            <InteractiveImage 
                                :src="logo.src" 
                                :alt="logo.alt" 
                                width="150px" 
                                height="150px" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center mt-10" v-motion-pop-visible-once :delay="1000" :duration="300">
                <router-link to="/skills" class="btn btn-primary text-lg">Lees meer over mijn vaardigheden</router-link>
            </div>
        </div>
    </section>

    <section class="mt-20">
        <h2 class="text-center text-4xl font-black mb-10" v-motion-slide-visible-once-bottom>Tijdlijn</h2>
        <Timeline />
    </section>
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
