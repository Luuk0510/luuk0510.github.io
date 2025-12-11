export type SkillCategory = 'frontend' | 'backend'

export interface SkillItem {
  title: string
  logo: string
  description: string
  delay: number
  category: SkillCategory
}

import HTML5Logo from '@/assets/images/logo/html5_logo.png'
import CSS3Logo from '@/assets/images/logo/css3_logo.png'
import JavaScriptLogo from '@/assets/images/logo/javascript_logo.png'
import TailwindLogo from '@/assets/images/logo/tailwind_logo.png'
import VueLogo from '@/assets/images/logo/vue_logo.png'
import SQLLogo from '@/assets/images/logo/sql_logo.png'
import CSharpLogo from '@/assets/images/logo/csharp_logo.png'
import PythonLogo from '@/assets/images/logo/python_logo.png'
import PHPLogo from '@/assets/images/logo/php_logo.png'
import LaravelLogo from '@/assets/images/logo/laravel_logo.png'

export const skills: SkillItem[] = [
  {
    title: 'HTML',
    logo: HTML5Logo,
    description:
      "HTML vormt de basis van mijn webontwikkeling. Ik gebruik het om webpagina's te structureren en semantische HTML toe te passen voor toegankelijkere en beter leesbare content.",
    delay: 900,
    category: 'frontend',
  },
  {
    title: 'CSS',
    logo: CSS3Logo,
    description:
      'Ik heb ervaring met CSS, inclusief frameworks zoals Tailwind en Bootstrap. Ik vind het leuk om een front end te maken. CSS is belangrijk om visueel aantrekkelijke en toegankelijke interfaces te bouwen.',
    delay: 1200,
    category: 'frontend',
  },
  {
    title: 'Tailwind',
    logo: TailwindLogo,
    description:
      'Ik maak veel gebruik van Tailwind CSS en ben vertrouwd met bibliotheken zoals Preline UI en daisyUI, die ik in dit portfolio heb gebruikt voor een consistente ervaring.',
    delay: 1500,
    category: 'frontend',
  },
  {
    title: 'JavaScript',
    logo: JavaScriptLogo,
    description: 'JavaScript geeft mij de mogelijkheid om interactieve en dynamische webapplicaties te bouwen.',
    delay: 1800,
    category: 'frontend',
  },
  {
    title: 'Vue',
    logo: VueLogo,
    description:
      'Vue.js is mijn go-to framework voor het ontwikkelen van dynamische interfaces. Ik heb het in verschillende projecten gebruikt, waaronder dit portfolio.',
    delay: 2000,
    category: 'frontend',
  },
  {
    title: 'SQL',
    logo: SQLLogo,
    description:
      'Ik heb ervaring met databasebeheer in zowel MySQL als Microsoft SQL. Daarnaast heb ik gewerkt met NoSQL-databases, wat me in staat stelt om flexibele en schaalbare datamodellen te ontwerpen en implementeren.',
    delay: 900,
    category: 'backend',
  },
  {
    title: 'C#',
    logo: CSharpLogo,
    description:
      'Met C# en ASP.NET Core heb ik diverse webapplicaties ontwikkeld. Ik heb gewerkt met MVC en Razor Pages. Daarnaast heb ik ook .NET MAUI Blazor Hybrid gebruikt. Ik volg object-georiënteerde programmeerprincipes en best practices.',
    delay: 1200,
    category: 'backend',
  },
  {
    title: 'Python',
    logo: PythonLogo,
    description:
      'Tijdens mijn minor Artificial Intelligence heb ik veel met Python gewerkt. Ik gebruikte libraries zoals NumPy en Pandas om data te analyseren en te bewerken. Ook heb ik grafieken en visualisaties gemaakt om resultaten duidelijk te presenteren. Hierdoor heb ik ervaring opgedaan in het voorbereiden en verwerken van data en het inzichtelijk maken van patronen.',
    delay: 1500,
    category: 'backend',
  },
  {
    title: 'PHP',
    logo: PHPLogo,
    description:
      "Tijdens mijn studie heb ik met PHP gewerkt, met name in combinatie met Laravel voor het bouwen van efficiënte webapplicaties en API's, waarbij ik MySQL-databases heb geïntegreerd.",
    delay: 1800,
    category: 'backend',
  },
  {
    title: 'Laravel',
    logo: LaravelLogo,
    description:
      'Laravel is het framework waarin ik tijdens mijn studie veel ervaring heb opgedaan. Ik heb het gebruikt voor het bouwen van complexe backends voor verschillende webapplicaties.',
    delay: 2100,
    category: 'backend',
  },
  {
    title: 'Flutter',
    logo: LaravelLogo,
    description:
      'Flutter gebruikt voor mijn Shiny Counter app',
    delay: 2300,
    category: 'backend',
  },
]
