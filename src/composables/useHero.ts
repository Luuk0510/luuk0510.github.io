import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useStorage } from '@vueuse/core'

// Guard sessionStorage for non-browser contexts (SSR/tests)
const storage = typeof window !== 'undefined' ? sessionStorage : undefined

export function useHero() {
  const fullText = 'Welkom op mijn portfolio!'

  const displayedText = ref<string>('')
  const isTyping = ref<boolean>(true)
  const showBlinkingCursor = ref<boolean>(false)
  const showButton = ref<boolean>(false)
  const linksAnimated = ref<boolean>(false)

  const typingSpeed = 150
  const cursorBlinkDuration = 3000
  const typingDelay = 500

  // Persist one-time flags so typing and link animations only run on first visit
  const hasTyped = useStorage<boolean>('hero-hasTyped', false, storage)
  const hasAnimatedLinks = useStorage<boolean>('hero-hasAnimatedLinks', false, storage)

  // Keep timer references so we can cancel them on unmount
  let scrollListener: ((this: Window, ev: Event) => void) | null = null
  let typingTimer: ReturnType<typeof setTimeout> | undefined
  let blinkTimer: ReturnType<typeof setTimeout> | undefined
  let startTimer: ReturnType<typeof setTimeout> | undefined
  // Prevent async callbacks from mutating state after unmount
  let isActive = true

  const finishTyping = () => {
    isTyping.value = false
    showBlinkingCursor.value = false
    showButton.value = true
    hasTyped.value = true
  }

  const typeText = () => {
    let index = 0

    const type = () => {
      if (!isActive) return

      if (index < fullText.length) {
        displayedText.value += fullText[index]
        index++
        typingTimer = setTimeout(type, typingSpeed)
      } else {
        isTyping.value = false
        showBlinkingCursor.value = true

        blinkTimer = setTimeout(() => {
          if (!isActive) return
          finishTyping()
        }, cursorBlinkDuration)
      }
    }

    startTimer = setTimeout(type, typingDelay)
  }

  const handleTextTyping = () => {
    if (!hasTyped.value) {
      typeText()
    } else {
      displayedText.value = fullText
      finishTyping()
    }
  }

  const handleLinkAnimations = () => {
    if (!hasAnimatedLinks.value) {
      linksAnimated.value = true
      hasAnimatedLinks.value = true
    }
  }

  const handleScroll = () => {
    const button = document.querySelector<HTMLDivElement>('.bounce2')
    if (button) {
      button.style.opacity = window.scrollY > 200 ? '0' : '1'
    }
  }

  const scrollToItem = () => {
    const timeline = document.querySelector<HTMLDivElement>('.item-scroll')
    if (timeline) {
      const timelinePosition = timeline.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: timelinePosition - 125,
        behavior: 'smooth',
      })
    }
  }

  onMounted(() => {
    handleTextTyping()
    handleLinkAnimations()

    scrollListener = handleScroll
    window.addEventListener('scroll', scrollListener)
  })

  onBeforeUnmount(() => {
    isActive = false
    if (scrollListener) {
      window.removeEventListener('scroll', scrollListener)
    }

    clearTimeout(typingTimer)
    clearTimeout(blinkTimer)
    clearTimeout(startTimer)
  })

  return {
    displayedText,
    isTyping,
    showBlinkingCursor,
    showButton,
    linksAnimated,
    scrollToItem,
  }
}
