export type Service = {
  name: string
  category: string
  description: string
  slug: string
  href: string
}

export const services: Service[] = [
  {
    name: 'Root Cause Analysis',
    category: 'Diagnostics',
    description: 'Systematic investigation of equipment failures, process anomalies & operational inefficiencies. Identify root causes with engineering rigor, not guesswork.',
    slug: 'root-cause-analysis',
    href: '/solutions/root-cause-analysis',
  },
  {
    name: 'Pressure Loss Budget & Calculations',
    category: 'Process Engineering',
    description: 'Complete pressure loss budgeting for dust collection systems. Calculate stack gas volumes, duct velocities & component resistances with accuracy.',
    slug: 'pressure-loss-budget',
    href: '/solutions/pressure-loss-budget',
  },
  {
    name: 'Duct Sizing & System Design',
    category: 'Process Engineering',
    description: 'Correctly sized ductwork prevents backfire, material fallback & uneven emissions. We calculate optimal duct diameters, velocities and layouts.',
    slug: 'duct-sizing',
    href: '/solutions/duct-sizing',
  },
  {
    name: 'System Reference Documentation',
    category: 'Documentation',
    description: 'Technical as-built system documentation with P&ID, process specs, equipment schedules & operation manuals. Essential for troubleshooting and maintenance.',
    slug: 'system-documentation',
    href: '/solutions/system-documentation',
  },
  {
    name: 'Bleaching Earth Plant Consultancy',
    category: 'Specialized Consulting',
    description: 'Process optimization for bleaching earth manufacturing. We work with clay suppliers, beneficiation & activation processes for quality control.',
    slug: 'bleaching-earth-consultancy',
    href: '/solutions/bleaching-earth-consultancy',
  },
  {
    name: 'Baling Machine Installation & Tuning',
    category: 'Equipment Support',
    description: 'Commissioning & optimization of baling equipment. Compression settings, cycle timing & produce quality monitoring for consistent output.',
    slug: 'baling-machine-consultancy',
    href: '/solutions/baling-machine-consultancy',
  },
]
