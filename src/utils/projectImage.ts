const projectImages = import.meta.glob('../assets/images/projects/**/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function projectImage(path: string): string {
  const key = `../assets/images/projects/${path}`
  return projectImages[key]
}
