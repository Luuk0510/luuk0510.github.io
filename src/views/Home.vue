<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Timeline from '@/components/Timeline.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';
import IconDownArrow from '@/components/icons/IconDownArrow.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

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
    }, 5500);

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
                    <IconGitHub v-motion-slide-left :delay="4000" :duration="1200" size="60px" />
                </a>
                <a href="https://www.linkedin.com/in/luuk-spruijtenburg-05aa89243/" target="_blank">
                    <IconLinkedIn v-motion-slide-right :delay="4000" :duration="1200" size="60px" />
                </a>
            </div>
        </section>

        <div v-if="showButton" class="flex justify-center">
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
                    <h3 class="text-4xl font-black text-center mb-4">Kennis</h3>
                </div>
                <div class="flex flex-wrap justify-center gap-6 md:gap-10">
                    <div v-motion-pop-visible-once :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage src="../assets/images/csharp_logo.png" alt="C# logo" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="200" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage src="../assets/images/php_logo.png" alt="PHP logo" />
                            </div>
                        </div>
                    </div>
                    <div v-motion-pop-visible-once :delay="400" :duration="700">
                        <div class="card bg-base-200 shadow-xl">
                            <div class="card-body">
                                <InteractiveImage src="../assets/images/vue_logo.png" alt="Vue logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="mt-20">
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
