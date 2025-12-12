import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseCard from '@/components/BaseCard.vue'

describe('BaseCard', () => {
  it('renders header/body/footer slots', () => {
    const wrapper = mount(BaseCard, {
      props: { motion: false },
      slots: {
        header: '<h2>Header</h2>',
        default: '<p>Body</p>',
        footer: '<div>Footer</div>',
      },
    })

    expect(wrapper.text()).toContain('Header')
    expect(wrapper.text()).toContain('Body')
    expect(wrapper.text()).toContain('Footer')
  })

  it('uses custom tag when provided', () => {
    const wrapper = mount(BaseCard, {
      props: { motion: false, tag: 'article' },
      slots: { default: 'Body' },
    })

    expect(wrapper.element.tagName).toBe('ARTICLE')
  })
})

