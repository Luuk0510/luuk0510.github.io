<script setup>
import Timeline from '@/components/Timeline.vue';

import { ref, onMounted } from 'vue';

const fullText = "Welkom op mijn portfolio!";
const displayedText = ref("");
const isTyping = ref(true);
const showBlinkingCursor = ref(false);

const typingSpeed = 150;
const cursorBlinkDuration = 3000;

onMounted(() => {
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
});
</script>

<template>
    <section class="flex flex-col justify-center items-center text-center lg:mt-[30vh]">
        <h1 class=" text-6xl typewriter mb-5">
            {{ displayedText }}
            <span v-if="isTyping" class="solid-cursor"></span>
            <span v-if="showBlinkingCursor" class="blinking-cursor"></span>
        </h1>

        <p>Ik ben een derdejaars HBO Informatica student aan Avans Hogeschool met ervaring in
            softwareontwikkeling en
            IT-bijbanen.</p>
    </section>
    <section class="mt-20">
        <Timeline />
    </section>
</template>

<style scoped>
.typewriter {
    font-family: 'Courier New', Courier, monospace;
}

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
</style>