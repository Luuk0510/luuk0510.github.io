const projectImages = import.meta.glob('../assets/images/projects/**/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>

export type ProjectImageOptions = {
  fallback?: string
  /**
   * Always throw when the image doesn't exist. Useful for tests and catching typos early.
   */
  strict?: boolean
}

const TRANSPARENT_DATA_URL = 'data:,'

export function projectImage(path: string, options: ProjectImageOptions = {}): string {
  const normalizedPath = path.replace(/^\/+/, '')
  const key = `../assets/images/projects/${normalizedPath}`
  const url = projectImages[key]

  if (url) return url

  if (options.fallback) return options.fallback

  const message =
    `projectImage(): "${normalizedPath}" not found. ` +
    `Expected it under "src/assets/images/projects/${normalizedPath}".`

  if (options.strict || import.meta.env.DEV) {
    throw new Error(message)
  }

  console.warn(message)
  return TRANSPARENT_DATA_URL
}
