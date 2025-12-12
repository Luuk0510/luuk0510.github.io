export interface ExperienceItem {
  id: string
  title: string
  dates: string
  description: string[]
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'marvelous',
    title: 'Marvelous',
    dates: 'sep 2024 - jan 2025',
    description: [
      'Tijdens mijn HBO-stage bij Marvelous heb ik gewerkt met C# en hun eigen Backlot-framework. Marvelous is een Nederlands digitaal bureau dat webapplicaties en platforms ontwikkelt en optimaliseert met .NET-technologie voor organisaties die hun digitale dienstverlening willen verbeteren.',
      'Ik ontwikkelde functionaliteit binnen hun interne webapplicatie en leerde werken binnen een grotere codebasis. Ik heb veel geleerd over samenwerken en communiceren binnen een professioneel ontwikkelteam. Daarnaast heb ik ervaring opgedaan met plannen, het bijhouden van taken en het werken met sprints.',
      'Deze stage heeft mijn technische kennis verdiept en mijn professionele houding en werkstructuur versterkt.',
    ],
  },
  {
    id: 'mobicoach',
    title: 'Mobicoach',
    dates: 'feb 2021 - aug 2024',
    description: [
      'Tijdens mijn MBO-opleiding heb ik twee keer stage gelopen bij Mobicoach. Mobicoach is een Nederlands softwarebedrijf dat oplossingen ontwikkelt voor fleetmanagement, waarmee transportbedrijven hun voertuigen en logistieke processen efficiënt kunnen beheren.',
      'Na deze stages heb ik daar ook parttime gewerkt. Ik werkte aan interne websystemen die dagelijks door het team werden gebruikt.',
      'In deze periode heb ik veel geleerd over samenwerken en duidelijk communiceren binnen een klein ontwikkelteam. Bij Mobicoach heb ik mijn basis in webontwikkeling verder versterkt en geleerd om gestructureerd en zelfstandig te werken.',
      'Deze ervaring heeft een belangrijke rol gespeeld in mijn ontwikkeling en vormt een goede basis voor mijn huidige opleiding.',
      'Ik ben derdejaars student Informatica aan Avans Hogeschool in Den Bosch. Tijdens mijn studie heb ik gewerkt met programmeertalen zoals C#, Laravel, Python en Unity, met een focus op webapplicaties.',
      "In duo's heb ik veel ervaring opgedaan met samenwerking en projectmanagement. Ik heb methodieken zoals Agile, Scrum en Kanban gebruikt, wat mijn vaardigheden in planning, communicatie en flexibiliteit heeft verbeterd.",
      'Naast webontwikkeling heb ik een game ontwikkeld in Unity en een Python-project gedaan, waarbij ik objectgeoriënteerd programmeren en algoritmes heb toegepast.',
      'Deze projecten hebben me een brede basis gegeven in frontend- en backend-ontwikkeling en mijn teamwork- en probleemoplossende vaardigheden sterk ontwikkeld.',
    ],
  },
]
