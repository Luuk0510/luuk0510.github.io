import { computed } from 'vue'
import { timelineItems } from '@/data/timeline'

// Expose timeline items via composable to keep the view declarative
export function useTimeline() {
  const items = computed(() => timelineItems)

  return {
    items,
  }
}
