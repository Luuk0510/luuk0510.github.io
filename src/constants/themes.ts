export const THEMES = ['light', 'dark', 'retro', 'black'] as const

export type ThemeName = (typeof THEMES)[number]

export type ThemeChoice = ThemeName | 'default' | null

