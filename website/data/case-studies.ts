export type CaseStudyTeaser = {
    slug: string
    featured: boolean
    anonymized: boolean
    anonymizedNote?: string
    tag: string
    title: string
    location: string
    metrics: {
        value: string
        label: string
    }[]
    problem: string
    fix: string
    href: string
}

export const caseStudies: CaseStudyTeaser[] = [
    {
        slug: 'kiln-bag-filter-rca-karnataka',
        featured: true,
        anonymized: true,
        anonymizedNote: 'Client and project details anonymized. Technical findings shared for reference only.', tag: 'LIRN Solutions — Process Engineering',
        title: 'Kiln Bag Filter RCA — 10 TPH Calcium Bentonite Plant, Karnataka',
        location: 'Karnataka, India',
        metrics: [
            { value: '85%', label: 'Fan draft recovered' },
            { value: '74%', label: 'Energy saved' },
            { value: '0', label: 'Backfire events after fix' },
        ],
        problem:
            'Cyclic furnace backfire every 2-3 minutes. Visible dust from the stack. Two 600 mm ducts consuming 85% of ID fan draft capacity.',
        fix:
            'Enlarge ducts to 1,000-1,200 mm. Switch to DP-triggered pulse cleaning. Reduce ID fan from 47 Hz to 25-32 Hz post-fix.',
        href: '/case-studies/kiln-bag-filter-rca-karnataka',
    },
]

export const featuredCaseStudy = caseStudies.find((c) => c.featured)