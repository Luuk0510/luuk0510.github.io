import { describe, expect, it } from 'vitest'
import { projectImage } from '@/utils/projectImage'

describe('projectImage', () => {
  it('returns a url for an existing image', () => {
    const url = projectImage('bazaar_transport/screenshot_1.png', { strict: true })
    expect(typeof url).toBe('string')
    expect(url.length).toBeGreaterThan(0)
  })

  it('throws a clear error for missing images in strict mode', () => {
    expect(() => projectImage('__missing__/nope.png', { strict: true })).toThrow(/not found/i)
  })
})

