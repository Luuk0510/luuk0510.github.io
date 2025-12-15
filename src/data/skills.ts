export type SkillCategory = 'frontend' | 'backend' | 'frameworks'

export interface SkillItem {
  title: string
  logo: string
  description: string
  delay: number
  category: SkillCategory
}

import { logoAssets } from '@/data/logoAssets'

export const skills: SkillItem[] = [
  {
    title: 'HTML',
    logo: logoAssets.html5,
    description:
      "HTML vormt de basis van mijn webontwikkeling. Ik gebruik het om webpagina's te structureren en semantische HTML toe te passen voor toegankelijkere en beter leesbare content.",
    delay: 900,
    category: 'frontend',
  },
  {
    title: 'CSS',
    logo: logoAssets.css3,
    description:
      'Ik heb ervaring met CSS, inclusief frameworks zoals Tailwind en Bootstrap. Ik vind het leuk om een front end te maken. CSS is belangrijk om visueel aantrekkelijke en toegankelijke interfaces te bouwen.',
    delay: 1200,
    category: 'frontend',
  },
  {
    title: 'Tailwind',
    logo: logoAssets.tailwind,
    description:
      'Ik maak veel gebruik van Tailwind CSS en ben vertrouwd met bibliotheken zoals Preline UI en daisyUI, die ik in dit portfolio heb gebruikt voor een consistente ervaring.',
    delay: 1500,
    category: 'frontend',
  },
  {
    title: 'JavaScript',
    logo: logoAssets.javascript,
    description: 'JavaScript geeft mij de mogelijkheid om interactieve en dynamische webapplicaties te bouwen.',
    delay: 1800,
    category: 'frontend',
  },
  {
    title: 'Vue',
    logo: logoAssets.vue,
    description:
      'Vue.js is mijn go-to framework voor het ontwikkelen van dynamische interfaces. Ik heb het in verschillende projecten gebruikt, waaronder dit portfolio.',
    delay: 900,
    category: 'frameworks',
  },
  {
    title: 'SQL',
    logo: logoAssets.sql,
    description:
      'Ik heb ervaring met databasebeheer in zowel MySQL als Microsoft SQL. Daarnaast heb ik gewerkt met NoSQL-databases, wat me in staat stelt om flexibele en schaalbare datamodellen te ontwerpen en implementeren.',
    delay: 900,
    category: 'backend',
  },
  {
    title: 'C#',
    logo: logoAssets.csharp,
    description:
      'Met C# en ASP.NET Core heb ik diverse webapplicaties ontwikkeld. Ik heb gewerkt met MVC en Razor Pages. Daarnaast heb ik ook .NET MAUI Blazor Hybrid gebruikt. Ik volg object-georiënteerde programmeerprincipes en best practices.',
    delay: 1200,
    category: 'backend',
  },
  {
    title: 'Python',
    logo: logoAssets.python,
    description:
      'Tijdens mijn minor Artificial Intelligence heb ik veel met Python gewerkt. Ik gebruikte libraries zoals NumPy en Pandas om data te analyseren en te bewerken. Ook heb ik grafieken en visualisaties gemaakt om resultaten duidelijk te presenteren. Hierdoor heb ik ervaring opgedaan in het voorbereiden en verwerken van data en het inzichtelijk maken van patronen.',
    delay: 1500,
    category: 'backend',
  },
  {
    title: 'PHP',
    logo: logoAssets.php,
    description:
      "Tijdens mijn studie heb ik met PHP gewerkt, met name in combinatie met Laravel voor het bouwen van efficiënte webapplicaties en API's, waarbij ik MySQL-databases heb geïntegreerd.",
    delay: 1800,
    category: 'backend',
  },
  {
    title: 'Laravel',
    logo: logoAssets.laravel,
    description:
      'Laravel is het framework waarin ik tijdens mijn studie veel ervaring heb opgedaan. Ik heb het gebruikt voor het bouwen van complexe backends voor verschillende webapplicaties.',
    delay: 1200,
    category: 'frameworks',
  },
  {
    title: 'DotNet Maui',
    logo: logoAssets.dotnetmaui,
    description:
      'DotNet Maui',
    delay: 1500,
    category: 'frameworks',
  },
  {
    title: 'Flutter',
    logo: logoAssets.flutter,
    description:
      'Flutter heb ik gebruikt voor mijn Shiny Counter app.',
    delay: 1800,
    category: 'frameworks',
  },
]
