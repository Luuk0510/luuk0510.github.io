import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Timeline from '../Timeline.vue'
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
})
