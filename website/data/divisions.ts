export type Division = {
  name: string
  tag: string
  desc: string
  href: string
  cta: string
  items: string[]
  soon?: boolean
}

export const divisions: Division[] = [
  {
    name: 'LIRN Fabrications',
    tag: 'Equipment Manufacturing',
    desc: 'Rotary kilns, cyclone separators, bag filter houses, conveyors, trusses, and heavy industrial structures — fabricated to specification.',
    href: '/fabrications',
    cta: 'Explore equipment',
    items: [
      'Rotary Kilns & Dryers',
      'Cyclone Separators',
      'Bag Filter Houses',
      'Conveyors & Elevators',
      'Trusses & Sheds',
    ],
  },
  {
    name: 'LIRN Solutions',
    tag: 'Process Engineering',
    desc: 'Root cause analysis, pressure loss budgets, duct sizing, system documentation, and full plant consulting for mineral processing operations.',
    href: '/solutions',
    cta: 'View services',
    items: [
      'Root Cause Analysis',
      'Pressure Loss Budgets',
      'Duct Sizing & Design',
      'System Documentation',
      'Bleaching Earth Consulting',
    ],
  },
  {
    name: 'LIRN Clay Tech',
    tag: 'Coming Soon',
    desc: 'Calcium bentonite bleaching earth — thermally activated and supplied for edible oil refineries. Processing operations launching soon.',
    href: '/clay-tech',
    cta: 'Get notified',
    soon: true,
    items: [
      'Calcium Bentonite',
      'Bleaching Earth',
      'Edible Oil Grade',
      'Custom Activation',
      'Direct Supply',
    ],
  },
]