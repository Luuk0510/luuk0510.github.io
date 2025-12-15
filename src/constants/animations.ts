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

export const TIMELINE = {
  cardStaggerDelay: 50,
  cardDuration: 600,
} as const

export const HOME = {
  logoStaggerDelay: 100,
  logoDuration: TIMELINE.cardDuration,
  ctaDelay: 200,
  ctaDuration: 300,
} as const

export const SKILLS = {
  cardStartDelay: 900,
  cardStaggerDelay: 300,
} as const

export const TRANSITIONS = {
  slideDurationMs: 450,
  slideEase: 'ease',
}
