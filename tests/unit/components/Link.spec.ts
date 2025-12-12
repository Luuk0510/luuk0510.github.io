import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Link from '@/components/Link.vue'

const { isBlackTheme } = vi.hoisted(() => ({
  // Needs to look like a Vue ref so templates unwrap it.
  isBlackTheme: { value: false, __v_isRef: true } as const,
}))

vi.mock('@/composables/useThemeSwitcher', () => ({
  useThemeSwitcher: () => ({ isBlackTheme }),
}))

describe('Link', () => {
  it('adds noopener/noreferrer for target=_blank', () => {
    isBlackTheme.value = false
    const wrapper = mount(Link, {
      props: { href: 'https://example.com', target: '_blank' },
      slots: { default: 'External' },
    })

    expect(wrapper.find('a').attributes('rel')).toBe('noopener noreferrer')
  })

  it('uses link-primary in black theme', () => {
    isBlackTheme.value = true
    const wrapper = mount(Link, {
      props: { href: '/test' },
      slots: { default: 'Internal' },
    })

    expect(wrapper.find('a').classes()).toContain('link-primary')
  })
})
