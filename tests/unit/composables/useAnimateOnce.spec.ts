import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import { useAnimateOnce } from '@/composables/useAnimateOnce'

const mountOnce = (key: string) =>
  mount(
    defineComponent({
      setup() {
        return useAnimateOnce(key)
      },
      template: '<div />',
    })
  )

describe('useAnimateOnce', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  it('returns true first visit then persists', async () => {
    const wrapper = mountOnce('test-hasAnimated')
    expect(wrapper.vm.shouldAnimate).toBe(true)

    await nextTick()
    expect(sessionStorage.getItem('test-hasAnimated')).toBe('true')
  })

  it('returns false when already persisted', async () => {
    sessionStorage.setItem('test-hasAnimated', 'true')

    const wrapper = mountOnce('test-hasAnimated')
    expect(wrapper.vm.shouldAnimate).toBe(false)

    await nextTick()
    expect(sessionStorage.getItem('test-hasAnimated')).toBe('true')
  })
})

