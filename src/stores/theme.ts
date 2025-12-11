import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

export type ThemeChoice = 'light' | 'dark' | 'retro' | 'black' | 'default' | null

export const useThemeStore = defineStore('theme', () => {
  const theme = useStorage<ThemeChoice>('theme', null)

  const applyTheme = (value: ThemeChoice) => {
    if (!value || value === 'default') {
      document.documentElement.removeAttribute('data-theme')
      localStorage.removeItem('theme')
    } else {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('theme', value)
    }
  }

  const setTheme = (value: ThemeChoice) => {
    theme.value = value
    applyTheme(value)
  }

  return {
    theme,
    setTheme,
    applyTheme,
    isBlackTheme: computed(() => theme.value === 'black'),
  }
})
