<script setup lang="ts">
// English comments only
import { ref, onMounted } from 'vue'

import Timeline from '@/components/Timeline.vue'
import InteractiveImage from '@/components/InteractiveImage.vue'

import IconDownArrow from '@/components/icons/IconDownArrow.vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'

import HTML5Logo from '@/assets/images/logo/html5_logo.png'
import CSS3Logo from '@/assets/images/logo/css3_logo.png'
import JavaScriptLogo from '@/assets/images/logo/javascript_logo.png'
import TailwindLogo from '@/assets/images/logo/tailwind_logo.png'
import VueLogo from '@/assets/images/logo/vue_logo.png'
import SQLLogo from '@/assets/images/logo/sql_logo.png'
import CSharpLogo from '@/assets/images/logo/csharp_logo.png'
import PHPLogo from '@/assets/images/logo/php_logo.png'
import LaravelLogo from '@/assets/images/logo/laravel_logo.png'

const fullText = 'Welkom op mijn portfolio!'
const displayedText = ref<string>('')
const isTyping = ref<boolean>(true)
const showBlinkingCursor = ref<boolean>(false)
const showButton = ref<boolean>(false)
const linksAnimated = ref<boolean>(false)

const typingSpeed = 150
const cursorBlinkDuration = 3000

interface Logo {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
  offsetY?: string;   // add this to match component
  scale?: number;     // add this to match component
}

const logos = ref<Logo[]>([
  { src: HTML5Logo, alt: 'HTML logo' },
  { src: CSS3Logo,  alt: 'CSS logo' },
  { src: JavaScriptLogo, alt: 'JavaScript logo' },
  { src: TailwindLogo, alt: 'Tailwind logo', fit: 'contain' },
  { src: VueLogo, alt: 'Vue logo', fit: 'contain' },
  { src: SQLLogo, alt: 'SQL logo', fit: 'contain', scale: 0.92, offsetY: '-4%' },
  { src: CSharpLogo, alt: 'C Sharp logo' },
  { src: PHPLogo, alt: 'PHP logo', fit: 'contain' },
  { src: LaravelLogo, alt: 'Laravel logo' },
]);

onMounted(() => {
  handleTextTyping()
  handleLinkAnimations()
  window.addEventListener('scroll', handleScroll)
})

function handleTextTyping(): void {
  const hasTyped = sessionStorage.getItem('hasTyped')

  if (!hasTyped) {
    typeText(() => {
      sessionStorage.setItem('hasTyped', 'true')
    })
  } else {
    displayedText.value = fullText
    showButton.value = true
    isTyping.value = false
    showBlinkingCursor.value = false
  }
}

function handleLinkAnimations(): void {
  const hasAnimatedLinks = sessionStorage.getItem('hasAnimatedLinks')
  if (!hasAnimatedLinks) {
    linksAnimated.value = true
    sessionStorage.setItem('hasAnimatedLinks', 'true')
  }
}

function typeText(onComplete: () => void): void {
  let index = 0
  const type = () => {
    if (index < fullText.length) {
      displayedText.value += fullText[index]
      index++
      setTimeout(type, typingSpeed)
    } else {
      isTyping.value = false
      showBlinkingCursor.value = true
      setTimeout(() => {
        showBlinkingCursor.value = false
        showButton.value = true
        onComplete()
      }, cursorBlinkDuration)
    }
  }
  setTimeout(type, 500)
}

function handleScroll(): void {
  const arrow = document.querySelector<HTMLDivElement>('.arrow-down')
  if (arrow) arrow.style.opacity = window.scrollY > 200 ? '0' : '1'
}

function scrollToItem(): void {
  const timeline = document.querySelector<HTMLDivElement>('.item-scroll')
  if (!timeline) return
  const y = timeline.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top: y - 115, behavior: 'smooth' })
}
</script>

<template>
  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <h1 class="hero-title">
        {{ displayedText }}
        <span v-if="isTyping" class="solid-cursor"></span>
        <span v-if="showBlinkingCursor" class="blinking-cursor"></span>
      </h1>

      <div class="social-links">
        <a href="https://github.com/Luuk0510" target="_blank" rel="noopener">
          <IconGitHub
            v-if="linksAnimated"
            v-motion-slide-left
            :delay="4500"
            :duration="1200"
            size="60px"
          />
          <IconGitHub v-else size="60px" />
        </a>
        <a href="https://www.linkedin.com/in/luuk-spruijtenburg-05aa89243/" target="_blank" rel="noopener">
          <IconLinkedIn
            v-if="linksAnimated"
            v-motion-slide-right
            :delay="4500"
            :duration="1200"
            size="60px"
          />
          <IconLinkedIn v-else size="60px" />
        </a>
      </div>

      <div v-if="showButton" class="arrow-wrap">
        <div class="arrow-down" style="opacity: 1;" @click="scrollToItem">
          <IconDownArrow size="100px" />
        </div>
      </div>
    </div>
  </section>

  <!-- OVER MIJ -->
  <section class="item-scroll" v-motion-slide-visible-once-bottom>
    <div class="section-container">
      <div class="card">
        <h2 class="section-title">Over mij!</h2>
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
  </section>

<!-- VAARDIGHEDEN -->
<section>
  <div class="section-container">
    <h2 class="section-title" v-motion-slide-visible-once-bottom>Vaardigheden</h2>

    <div class="skills-grid">
      <InteractiveImage
        v-for="(logo, index) in logos"
        :key="logo.alt"
        class="skill-tile"
        v-motion-pop-visible-once
        :delay="index * 100"
        :duration="600"
        :src="logo.src"
        :alt="logo.alt"
        :fit="logo.fit ?? 'cover'"
      />
    </div>

    <div class="cta-row" v-motion-pop-visible-once :delay="1000" :duration="300">
      <router-link to="/skills" class="btn-primary">Lees meer over mijn vaardigheden</router-link>
    </div>
  </div>
</section>

  <!-- TIJDLIJN -->
  <section>
    <div class="section-container">
      <h2 class="section-title" v-motion-slide-visible-once-bottom>Tijdlijn</h2>
      <Timeline />
    </div>
  </section>
</template>

<!-- Keep this empty. All styles come from your global SCSS. -->
<style scoped></style>
