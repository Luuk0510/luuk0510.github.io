import { computed } from 'vue'
import { timelineItems, type TimelineItem } from '@/data/timeline'

// Expose timeline items via composable to keep the view declarative
export function useTimeline() {
  const items = computed<TimelineItem[]>(() => timelineItems)

  return {
    items,
  }
}
