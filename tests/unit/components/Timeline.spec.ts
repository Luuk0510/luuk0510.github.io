import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'
import { timelineItems } from '@/data/timeline'

describe('Timeline', () => {
  it('renders timeline items with titles and links', () => {
    const wrapper = mount(Timeline, {
      global: {
        stubs: ['router-link'],
      },
    })

    timelineItems.forEach((item) => {
      expect(wrapper.text()).toContain(item.title)
      expect(wrapper.findAllComponents({ name: 'RouterLink' }).length).toBeGreaterThan(0)
    })
  })

  it('renders without motion wrappers when disabled', () => {
    const wrapper = mount(Timeline, {
      props: { motion: false },
      global: {
        stubs: ['router-link'],
      },
    })

    // When motion is off, Timeline uses the non-motion branch and BaseCard renders
    // without the <v-motion> wrapper.
    expect(wrapper.findAllComponents({ name: 'v-motion' }).length).toBe(0)
  })
})
