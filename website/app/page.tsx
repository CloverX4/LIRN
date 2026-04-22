import Hero from '@/components/sections/Hero'
import DivisionGrid from '@/components/sections/DivisionGrid'
import ProductsGrid from '@/components/sections/ProductsGrid'
import CaseStudyTeaser from '@/components/sections/CaseStudyTeaser'
import CTABand from '@/components/sections/CTABand'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <DivisionGrid />
      <ProductsGrid />
      <CaseStudyTeaser />
      <CTABand />
    </main>
  )
}