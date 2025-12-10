import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useThemeSwitcher } from '../useThemeSwitcher'

const matchMediaMock = () =>
  ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
  } as MediaQueryList)

const mountTheme = () =>
  mount(
    defineComponent({
      setup() {
        return useThemeSwitcher()
      },
      template: '<div />',
    })
  )

describe('useThemeSwitcher', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    localStorage.clear()
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(matchMediaMock),
    })
  })

  it('applies selected theme and persists it', () => {
    const wrapper = mountTheme()

    wrapper.vm.setTheme('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(wrapper.vm.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('removes forced theme when set to default/null', () => {
    const wrapper = mountTheme()

    wrapper.vm.setTheme('light')
    wrapper.vm.setTheme(null)

    expect(document.documentElement.getAttribute('data-theme')).toBeNull()
    expect(localStorage.getItem('theme')).toBeNull()
  })
})
