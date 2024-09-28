import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export function usePageTitle(defaultTitle: string = 'Portfolio'): void {
  const route = useRoute()

  watchEffect(() => {
    const titleSuffix = route.meta?.title as string | undefined
    document.title = titleSuffix ? `${defaultTitle} - ${titleSuffix}` : defaultTitle
  })
}