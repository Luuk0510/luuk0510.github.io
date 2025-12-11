import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'

describe('ProjectCard', () => {
  it('renders title, description, badges, and GitHub link', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'My Project',
        description: 'A test project',
        badges: ['Vue', 'TS'],
        githubLink: 'https://example.com',
      },
      slots: {
        githubIcon: '<span class="icon">GH</span>',
      },
    })

    expect(wrapper.text()).toContain('My Project')
    expect(wrapper.text()).toContain('A test project')
    expect(wrapper.findAll('.badge').length).toBe(2)
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com')
  })

  it('renders CTA slot when route provided', () => {
    const wrapper = mount(ProjectCard, {
      props: {
        title: 'My Project',
        description: 'A test project',
        route: '/test',
      },
      slots: {
        cta: '<button class="cta">Read more</button>',
      },
    })

    expect(wrapper.find('.cta').exists()).toBe(true)
  })
})
