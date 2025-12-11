import { onBeforeUnmount, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore, type ThemeChoice } from '@/stores/theme'

export function useThemeSwitcher() {
  const themeStore = useThemeStore()
  const { setTheme, applyTheme } = themeStore
  const { theme, isBlackTheme } = storeToRefs(themeStore)

  let mql: MediaQueryList | null = null

  const handleSystemChange = () => {
    if (!theme.value || theme.value === 'default') {
      applyTheme(null)
    }
  }

  onMounted(() => {
    applyTheme(theme.value as ThemeChoice)

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
    isBlackTheme,
    setTheme,
  }
}
