<script setup>
import { ref, onMounted } from 'vue';

import Timeline from '@/components/Timeline.vue';

import IconDownArrow from '@/components/icons/IconDownArrow.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';


const fullText = "Welkom op mijn portfolio!";
const displayedText = ref("");
const isTyping = ref(true);
const showBlinkingCursor = ref(false);
const showButton = ref(false);

const typingSpeed = 150;
const cursorBlinkDuration = 3000;

onMounted(() => {
    // Typing effect
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

    // Knop zichtbaar maken na 5 seconden
    setTimeout(() => {
        showButton.value = true;
    }, 5500);

    // Scroll-event toevoegen
    window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
    const button = document.querySelector('.bounce2');
    if (button) {
        if (window.scrollY > 200) {
            button.style.opacity = '0'; 
        } else {
            button.style.opacity = '1';
        }
    }
}

function scrollToTimeline() {
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        const timelinePosition = timeline.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: timelinePosition - 80,
            behavior: 'smooth' 
        });
    }
}


</script>




<template>
    <div class="absolute">
        <section class="flex flex-col justify-center items-center text-center h-[calc(100vh-200px)]">
            <h1 class="text-6xl font-jetbrains mb-5">
                {{ displayedText }}
                <span v-if="isTyping" class="solid-cursor"></span>
                <span v-if="showBlinkingCursor" class="blinking-cursor"></span>
            </h1>
            <div class="flex justify-center mt-2">
                <div></div>
                <a href="https://github.com/Luuk0510" target="_blank" >
                    <IconGitHub v-motion-slide-left :delay="5000" size="60px" />
                </a>
                <a href="https://www.linkedin.com/in/luuk-spruijtenburg-05aa89243/" target="_blank" >
                    <IconLinkedIn v-motion-slide-right :delay="5000" size="60px" />
                </a>
            </div>

        </section>

        <div v-if="showButton" class="flex justify-center">
            <div class="bounce2" style="opacity: 1;" @click="scrollToTimeline">
                <IconDownArrow size="100px" />
            </div>
        </div>

        <section class="mt-20 timeline">
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
    opacity: 0; /* Begin met onzichtbaar */
    transition: opacity 0.5s ease; /* Voeg een overgang toe voor opacity */
}

.fade-in {
    opacity: 1; /* Maak het zichtbaar */
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
