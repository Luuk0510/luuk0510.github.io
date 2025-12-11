export interface NavLink {
  path: string
  label: string
}

export const navLinks: NavLink[] = [
  { path: '/', label: 'Over mij' },
  { path: '/skills', label: 'Vaardigheden' },
  { path: '/experience', label: 'Werkervaring' },
  { path: '/education', label: 'Opleiding' },
  { path: '/contact', label: 'Contact' },
]
