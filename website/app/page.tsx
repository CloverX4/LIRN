import Hero from '@/components/sections/Hero'
import DivisionGrid from '@/components/sections/DivisionGrid'
import ProductsGrid from '@/components/sections/ProductsGrid'
import CaseStudyTeaser from '@/components/sections/CaseStudyTeaser'
import CTABand from '@/components/sections/CTABand'
import { organizationSchema, localBusinessSchema } from '@/lib/schemas'

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema()],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <main>
        <Hero />
        <DivisionGrid />
        <ProductsGrid />
        <CaseStudyTeaser />
        <CTABand />
      </main>
    </>
  )
}