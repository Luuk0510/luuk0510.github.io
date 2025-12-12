import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { STORAGE_KEYS } from '@/constants/storageKeys'
import type { ThemeChoice } from '@/constants/themes'

export const useThemeStore = defineStore('theme', () => {
  const theme = useStorage<ThemeChoice>(STORAGE_KEYS.theme, null)

  const applyTheme = (value: ThemeChoice) => {
    if (!value || value === 'default') {
      document.documentElement.removeAttribute('data-theme')
      localStorage.removeItem(STORAGE_KEYS.theme)
    } else {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem(STORAGE_KEYS.theme, value)
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
