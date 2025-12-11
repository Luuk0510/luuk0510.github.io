export interface Project {
  title: string
  badges: string[]
  description: string
  link?: string
  route?: string
  buttonText?: string
}

export const avansProjects: Project[] = [
  {
    title: 'Space project',
    badges: ['HTML', 'CSS'],
    description:
      'In eindopdracht moesten we een website gaan maken met alleen maar HTML en CSS, geen javascript, frameworks en libraries zodat we goed HTML en CSS goed kennen. Kennis over HTML en CSS.',
    link: 'https://github.com/Luuk0510/space-project',
    route: '/spaceproject',
    buttonText: 'Meer lezen',
  },
  {
    title: 'Beestje op je feestje',
    badges: ['C#', 'Bootstrap'],
    description:
      'In deze eindopdracht heb ik samen met een medestudent een webapplicatie ontwikkeld genaamd "Beestje op je Feestje". Deze applicatie is ontworpen voor een boerderij die beestjes verhuurt voor feesten. Met de applicatie kunnen gebruikers eenvoudig beestjes reserveren voor hun evenementen.',
    link: 'https://github.com/Luuk0510/beestje-op-je-feestje',
    route: '/beestjeopjefeestje',
    buttonText: 'Meer lezen',
  },
  {
    title: 'Bumbo',
    badges: ['C#', 'Bootstrap'],
    description:
      'In deze project heb ik met mijn team gewerkt aan een oplossing voor het fictieve bedrijf Bumbo. We hebben een roostersysteem ontwikkeld dat filiaalmanagers ondersteunt bij het efficiënter inplannen van medewerkers en het bijhouden van gewerkte uren. Daarnaast hebben we een nieuw kloksysteem geïntegreerd om tijdregistratie te vereenvoudigen.',
    link: 'https://github.com/Luuk0510/bumbo',
    route: '/bumbo',
    buttonText: 'Meer lezen',
  },
  {
    title: 'Ninja Frog',
    badges: ['Unity', 'C#'],
    description:
      'In deze eindopdracht heb ik een Unity-game gemaakt genaamd "Ninja Frog," een 2D-platformspel in de stijl van Super Mario Bros. In het spel bestuur je een ninja kikker die door uitdagende levels springt, vijanden verslaat en fruit verzamelt. Het spel bevat power-ups, checkpoints en een highscoresysteem.',
    link: 'https://github.com/Luuk0510/space-project',
    route: '/ninjafrog',
    buttonText: 'Meer lezen',
  },
  {
    title: 'Project Agile',
    badges: ['Laravel', 'Tailwind', 'Preline UI'],
    description:
      'In dit project heb ik samen met mijn team een CMS ontwikkeld voor een echte klant, waarbij we gebruik hebben gemaakt van de Scrum- en Agile-methodologieën.',
  },
  {
    title: 'Bazaar',
    badges: ['Laravel', 'Tailwind', 'Preline UI'],
    description:
      'In deze eindopdracht heb ik samen met een team een platform ontwikkeld voor een startup die een concurrent van Marktplaats wil worden, met extra functies zoals veilingen en verhuur. Het platform is geschikt voor particulieren en bedrijven en biedt whitelabel-opties. We werkten volgens Scrum en Agile.',
    link: 'https://github.com/Luuk0510/bazaar',
    route: '/bazaar',
    buttonText: 'Meer lezen',
  },
  {
    title: 'Bazaar transport',
    badges: ['Javascript', 'SCSS'],
    description:
      'Voor deze eindopdracht heb ik samen met een medestudent een transport-simulatie-app ontwikkeld in JavaScript. De app simuleert hoe pakketten in vrachtwagens worden geladen, met drag-and-drop functies en weersafhankelijke beperkingen.',
    link: 'https://github.com/Luuk0510/bazaar-transport',
    route: '/bazaartransport',
    buttonText: 'Meer lezen',
  },
  {
    title: 'Galactic Gladiators',
    badges: ['Python', 'PyGame'],
    description:
      'Voor deze eindopdracht heb ik samen met een medestudent een strategisch bordspel genaamd "Galactic Gladiators" ontwikkeld in Python. We gebruikten PyGame om het spel volledig te bouwen, waarbij spelers een leger besturen om de vlag van de tegenstander te veroveren.',
    link: 'https://github.com/Luuk0510/galactic-gladiators',
    route: '/galacticgladiators',
    buttonText: 'Meer lezen',
  },
  {
    title: 'De Gouden Draak',
    badges: ['Laravel', 'Vue', 'Tailwind', 'Preline UI'],
    description:
      'Voor deze eindopdracht heb ik samen met een medestudent een nieuwe website ontwikkeld voor het fictieve restaurant De Gouden Draak. We gebruikten Laravel en Vue.js en implementeerden een OTAP-omgeving, met functies zoals een menu configurator en een vernieuwd kassasysteem met tablets',
    link: 'https://github.com/Luuk0510/de-gouden-draak',
    route: '/goudendraak',
    buttonText: 'Meer lezen',
  },
  {
    title: 'More coming soon...',
    badges: ['.....'],
    description: '',
  },
]
