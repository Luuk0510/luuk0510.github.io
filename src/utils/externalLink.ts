export const DEFAULT_EXTERNAL_REL = 'noopener noreferrer' as const

export const EXTERNAL_LINK_ATTRS = {
  target: '_blank',
  rel: DEFAULT_EXTERNAL_REL,
} as const

export function relForTargetBlank(target?: string, rel?: string) {
  if (target === '_blank') return rel ?? DEFAULT_EXTERNAL_REL
  return rel
}

