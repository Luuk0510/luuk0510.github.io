import { onBeforeUnmount, onMounted } from 'vue'
import { useStorage } from '@vueuse/core'

const THEME_KEY = 'theme'

export function useThemeSwitcher() {
  const theme = useStorage<string | null>(THEME_KEY, null)

  let mql: MediaQueryList | null = null

  const applyTheme = (value: string | null) => {
    if (!value || value === 'default') {
      document.documentElement.removeAttribute('data-theme')
      localStorage.removeItem(THEME_KEY)
    } else {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem(THEME_KEY, value)
    }
  }

  const setTheme = (value: string | null) => {
    theme.value = value
    applyTheme(value)
  }

  const handleSystemChange = () => {
    if (!theme.value || theme.value === 'default') {
      applyTheme(null)
    }
  }

  onMounted(() => {
    applyTheme(theme.value)

    if (typeof window !== 'undefined') {
      mql = window.matchMedia('(prefers-color-scheme: dark)')

      if ('addEventListener' in mql) {
        mql.addEventListener('change', handleSystemChange)
      } else {
        // @ts-expect-error: legacy Safari
        mql.addListener(handleSystemChange)
      }
    }
  })

  onBeforeUnmount(() => {
    if (!mql) return
    if ('removeEventListener' in mql) {
      mql.removeEventListener('change', handleSystemChange)
    } else {
      // @ts-expect-error: legacy Safari
      mql.removeListener(handleSystemChange)
    }
  })

  return {
    theme,
    setTheme,
  }
}
