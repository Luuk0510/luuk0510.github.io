import { describe, expect, it, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useHero } from '@/composables/useHero'
import { STORAGE_KEYS } from '@/constants/storageKeys'

const fullText = 'Welkom op mijn portfolio!'

const mountHero = () =>
  mount(
    defineComponent({
      setup() {
        return useHero()
      },
      template: '<div />',
    })
  )

describe('useHero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    sessionStorage.clear()
  })

  it('types full text and shows button after typing completes', () => {
    const wrapper = mountHero()

    vi.runAllTimers()

    expect(wrapper.vm.displayedText).toBe(fullText)
    expect(wrapper.vm.isTyping).toBe(false)
    expect(wrapper.vm.showButton).toBe(true)
    expect(wrapper.vm.linksAnimated).toBe(true)
  })

  it('reuses stored flags to skip typing on revisit', () => {
    sessionStorage.setItem(STORAGE_KEYS.heroHasTyped, 'true')
    sessionStorage.setItem(STORAGE_KEYS.heroHasAnimatedLinks, 'true')

    const wrapper = mountHero()
    vi.runAllTimers()

    expect(wrapper.vm.displayedText).toBe(fullText)
    expect(wrapper.vm.isTyping).toBe(false)
    expect(wrapper.vm.showButton).toBe(true)
    expect(wrapper.vm.linksAnimated).toBe(false)
  })
})
