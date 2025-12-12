import { config } from '@vue/test-utils'

// @vueuse/motion registers many directives (e.g. v-motion-slide-bottom).
// In unit tests we don't need the animations, so we stub them to avoid warnings.
config.global.stubs = {
  ...(config.global.stubs ?? {}),
  'v-motion': {
    template: '<div><slot /></div>',
  },
}

config.global.directives = {
  ...(config.global.directives ?? {}),
  motion: {},
  'motion-slide-bottom': {},
  'motion-slide-left': {},
  'motion-slide-right': {},
  'motion-slide-visible-once-bottom': {},
  'motion-pop': {},
  'motion-pop-visible-once': {},
}

// JSDOM doesn't always provide matchMedia; some composables use it onMounted.
if (typeof window !== 'undefined' && !('matchMedia' in window)) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: () =>
      ({
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
      }) as MediaQueryList,
  })
}
