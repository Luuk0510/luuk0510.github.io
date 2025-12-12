export const HERO = {
  typingSpeed: 150,
  cursorBlinkDuration: 3000,
  typingDelay: 500,
}

export const MOTION = {
  sectionDelay: 800,
  sectionDuration: 800,
  cardDuration: 800,
} as const

export const EDUCATION = {
  // Keep delays short so text isn't "missing" on first visit.
  headingDelay: 0,
  dateDelay: 100,
  cardDelay: 200,
  duration: 800,
} as const

export const TRANSITIONS = {
  slideDurationMs: 450,
  slideEase: 'ease',
}
