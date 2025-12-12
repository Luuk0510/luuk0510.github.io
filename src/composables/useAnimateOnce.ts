import { onMounted, ref } from 'vue'
import { useStorage } from '@vueuse/core'

const session = typeof window !== 'undefined' ? sessionStorage : undefined

export function useAnimateOnce(storageKey: string) {
  const hasAnimated = useStorage<boolean>(storageKey, false, session)
  // Snapshot the value for this visit so it doesn't flip mid-animation.
  const shouldAnimate = ref(!hasAnimated.value)

  onMounted(() => {
    if (shouldAnimate.value) {
      hasAnimated.value = true
    }
  })

  return { shouldAnimate }
}
