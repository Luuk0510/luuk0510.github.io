import { describe, expect, it, vi } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import { navLinks } from '@/data/navLinks'
import { THEMES, type ThemeChoice } from '@/constants/themes'

const { theme, setTheme } = vi.hoisted(() => {
  // Needs to look like a Vue ref so templates unwrap it.
  const theme = { value: null, __v_isRef: true } as { value: ThemeChoice; __v_isRef: true }
  const setTheme = vi.fn((value: ThemeChoice) => {
    theme.value = value
  })
  return { theme, setTheme }
})

vi.mock('@/composables/useThemeSwitcher', () => ({
  useThemeSwitcher: () => ({ theme, setTheme }),
}))

describe('Navbar', () => {
  it('renders nav links from data', () => {
    const wrapper = mount(Navbar, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
        mocks: { $route: { path: '/' } },
      },
    })

    const linkStubs = wrapper.findAllComponents(RouterLinkStub)
    expect(linkStubs.length).toBeGreaterThanOrEqual(navLinks.length)
    navLinks.forEach((link) => expect(wrapper.text()).toContain(link.label))
  })

  it('renders all themes and calls setTheme on change', async () => {
    theme.value = null
    setTheme.mockClear()

    const wrapper = mount(Navbar, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
        mocks: { $route: { path: '/' } },
      },
    })

    const options = wrapper.findAll('input.theme-controller')
    expect(options.length).toBe(THEMES.length)

    await options[1].trigger('change')

    expect(setTheme).toHaveBeenCalledTimes(1)
    expect(setTheme).toHaveBeenCalledWith(THEMES[1])
    expect(theme.value).toBe(THEMES[1])
  })
})
