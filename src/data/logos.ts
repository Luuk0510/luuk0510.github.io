export interface Logo {
  src: string
  alt: string
}

import { logoAssets } from '@/data/logoAssets'

export const heroLogos: Logo[] = [
  { src: logoAssets.html5, alt: 'HTML logo' },
  { src: logoAssets.css3, alt: 'CSS logo' },
  { src: logoAssets.javascript, alt: 'JavaScript logo' },
  { src: logoAssets.tailwind, alt: 'Tailwind logo' },
  { src: logoAssets.vue, alt: 'Vue logo' },
  { src: logoAssets.sql, alt: 'SQL logo' },
  { src: logoAssets.csharp, alt: 'C Sharp logo' },
  { src: logoAssets.python, alt: 'Python logo' },
  { src: logoAssets.php, alt: 'PHP logo' },
  { src: logoAssets.laravel, alt: 'Laravel logo' },
  { src: logoAssets.flutter, alt: 'Flutter logo' },
  { src: logoAssets.dotnetmaui, alt: 'Dotnet Maui logo' },
  { src: logoAssets.ai, alt: 'AI Logo'}
]
