export type SkillCategory = 'frontend' | 'backend' | 'frameworks'

export interface SkillItem {
  title: string
  logo: string
  description: string
  category: SkillCategory
  link?: {
    url: string
    label: string
    ariaLabel?: string
  }
}

import { logoAssets } from '@/data/logoAssets'

export const skills: SkillItem[] = [
  // Frontend
  {
    title: 'HTML',
    logo: logoAssets.html5,
    description:
      "HTML vormt de basis van mijn webontwikkeling. Ik gebruik het om webpagina's te structureren en semantische HTML toe te passen voor toegankelijkere en beter leesbare content.",
    category: 'frontend',
  },
  {
    title: 'CSS',
    logo: logoAssets.css3,
    description:
      'Ik heb ervaring met CSS, inclusief frameworks zoals Tailwind en Bootstrap. Ik vind het leuk om een front end te maken. CSS is belangrijk om visueel aantrekkelijke en toegankelijke interfaces te bouwen.',
    category: 'frontend',
  },
  {
    title: 'Tailwind',
    logo: logoAssets.tailwind,
    description:
      'Ik maak veel gebruik van Tailwind CSS en ben vertrouwd met bibliotheken zoals Preline UI en daisyUI, die ik in dit portfolio heb gebruikt voor een consistente ervaring.',
    category: 'frontend',
  },
  {
    title: 'JavaScript',
    logo: logoAssets.javascript,
    description:
      'JavaScript geeft mij de mogelijkheid om interactieve en dynamische webapplicaties te bouwen. Ik gebruik het vaak samen met Vue om UX en logica netjes te structureren in componenten.',
    category: 'frontend',
  },

  // Frameworks
  {
    title: 'Vue',
    logo: logoAssets.vue,
    description:
      'Vue.js is mijn go-to framework voor het ontwikkelen van dynamische interfaces. Ik heb het in verschillende projecten gebruikt, waaronder dit portfolio. Ik werk graag met componenten en composables om de code modulair en goed onderhoudbaar te houden.',
    category: 'frameworks',
  },
  {
    title: 'LlamaIndex',
    logo: logoAssets.llamaindex,
    description:
      'Met 3 anderen heb ik voor SDW Zorg een chatbot gebouwd met LlamaIndex. Hierbij hebben we documenten ingeladen en geïndexeerd, zodat de bot via retrieval/embeddings antwoorden kan geven op basis van eigen data.',
    category: 'frameworks',
  },
  {
    title: 'Laravel',
    logo: logoAssets.laravel,
    description:
      'Laravel is het framework waarin ik tijdens mijn studie veel ervaring heb opgedaan. Ik heb het gebruikt voor het bouwen van complexe backends voor verschillende webapplicaties.',
    category: 'frameworks',
  },
  {
    title: 'DotNet Maui',
    logo: logoAssets.dotnetmaui,
    description:
      'Met .NET MAUI heb ik meegewerkt aan FlexFlow: een app voor hybride werken waarin werknemers hun werkplek (thuis/kantoor/onderweg) en bureauplek kunnen aangeven. De app geeft teams, HR en facility managers een actueel overzicht, ondersteunt meerdere locaties, en kan planning delen via iCal zodat agenda’s automatisch up-to-date blijven.',
    category: 'frameworks',
    link: {
      url: 'https://flexflow.thover.eu/',
      label: 'FlexFlow website',
      ariaLabel: 'Open FlexFlow website',
    },
  },
  {
    title: 'Flutter',
    logo: logoAssets.flutter,
    description:
      'Met Flutter heb ik de Shiny Counter app gebouwd: een Pokémon shiny counter met een Pokédex-lijst, filters/zoekfunctie, detailpagina met counters (+/-), sprite toggles (shiny/normal), en een Android overlay mini-counter. Alles (counters, caught status, custom entries, theme/taal) wordt opgeslagen met SharedPreferences.',
    category: 'frameworks',
    link: {
      url: 'https://github.com/Luuk0510/ShinyCounter',
      label: 'Shiny Counter GitHub',
      ariaLabel: 'Open Shiny Counter GitHub repo',
    },
  },

  // Backend
  {
    title: 'SQL',
    logo: logoAssets.sql,
    description:
      'Ik heb ervaring met databasebeheer in zowel MySQL als Microsoft SQL. Daarnaast heb ik gewerkt met NoSQL-databases, wat me in staat stelt om flexibele en schaalbare datamodellen te ontwerpen en implementeren.',
    category: 'backend',
  },
  {
    title: 'C#',
    logo: logoAssets.csharp,
    description:
      'Met C# en ASP.NET Core heb ik diverse webapplicaties ontwikkeld. Ik heb gewerkt met MVC en Razor Pages. Daarnaast heb ik ook .NET MAUI Blazor Hybrid gebruikt. Ik volg object-georiënteerde programmeerprincipes en best practices.',
    category: 'backend',
  },
  {
    title: 'Python',
    logo: logoAssets.python,
    description:
      'Tijdens mijn minor Artificial Intelligence heb ik veel met Python gewerkt. Ik gebruikte libraries zoals NumPy en Pandas om data te analyseren en te bewerken. Ook heb ik grafieken en visualisaties gemaakt om resultaten duidelijk te presenteren. Hierdoor heb ik ervaring opgedaan in het voorbereiden en verwerken van data en het inzichtelijk maken van patronen.',
    category: 'backend',
  },
  {
    title: 'PHP',
    logo: logoAssets.php,
    description:
      "Tijdens mijn MBO-opleiding heb ik veel met PHP gewerkt en daarmee een sterke basis gelegd in programmeren. Later heb ik PHP ook gebruikt in combinatie met Laravel voor het bouwen van webapplicaties en API's, waarbij ik MySQL-databases heb geïntegreerd.",
    category: 'backend',
  },
]
