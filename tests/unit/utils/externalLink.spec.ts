import { describe, expect, it } from 'vitest'
import { DEFAULT_EXTERNAL_REL, EXTERNAL_LINK_ATTRS, relForTargetBlank } from '@/utils/externalLink'

describe('externalLink', () => {
  it('exports standard attrs for target=_blank', () => {
    expect(EXTERNAL_LINK_ATTRS.target).toBe('_blank')
    expect(EXTERNAL_LINK_ATTRS.rel).toBe(DEFAULT_EXTERNAL_REL)
  })

  it('adds default rel for target=_blank', () => {
    expect(relForTargetBlank('_blank')).toBe(DEFAULT_EXTERNAL_REL)
    expect(relForTargetBlank('_blank', 'custom')).toBe('custom')
  })

  it('does nothing for non-blank targets', () => {
    expect(relForTargetBlank(undefined)).toBeUndefined()
    expect(relForTargetBlank('_self')).toBeUndefined()
  })
})

