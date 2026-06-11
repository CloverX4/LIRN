import Link from 'next/link'
import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import InquiryModal from '@/components/sections/InquiryModal'

export function generateStaticParams() {
  return [
    { category: 'thermal' },
    { category: 'dust-collection' },
    { category: 'cyclones' },
    { category: 'conveyors' },
    { category: 'crushers' },
    { category: 'trusses' },
    { category: 'storage-tanks' },
    { category: 'gas-handling' },
    { category: 'mixing' },
  ]
}

// Map URL slugs back to category names
const categorySlugMap: Record<string, string> = {
  thermal: 'Thermal',
  'dust-collection': 'Dust Collection',
  cyclones: 'Separation',
  conveyors: 'Material Handling',
  crushers: 'Size Reduction',
  trusses: 'Structural',
  'storage-tanks': 'Storage',
  'gas-handling': 'Gas Handling',
  mixing: 'Mixing',
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = categorySlugMap[params.category]

  if (!categoryName) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.cat === categoryName)

  if (categoryProducts.length === 0) {
    notFound()
  }

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '3rem' }}>
        <Link href="/fabrications" style={{ color: '#5a6e58', textDecoration: 'none', fontSize: '14px' }}>
          Fabrications
        </Link>
        <span style={{ color: '#c8bfa8', margin: '0 0.5rem' }}>/</span>
        <span style={{ color: '#1a2e1a', fontSize: '14px' }}>{categoryName}</span>
      </div>

      {/* Header */}
      <section style={{ paddingBottom: '3rem', borderBottom: '1px solid #c8bfa8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            CATEGORY
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1rem' }}>
            {categoryName}
          </h1>
          <p style={{ fontSize: '15px', color: '#5a6e58', maxWidth: '700px' }}>
            {categoryProducts.length} equipment option{categoryProducts.length !== 1 ? 's' : ''} in this category. Select a product to view detailed specifications, applications and technical documentation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ paddingTop: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {categoryProducts.map((product) => (
              <div
                key={product.href}
                style={{
                  background: '#fff',
                  border: '1px solid #c8bfa8',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <Link
                  href={product.href}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    padding: '2rem 2rem 1rem',
                  }}
                >
                  <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '0.5rem' }}>
                    {product.name}
                  </h2>
                  <p style={{ fontSize: '14px', color: '#5a6e58', marginBottom: '1rem', minHeight: '40px' }}>
                    {product.spec}
                  </p>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#c4a96b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    View Specs →
                  </div>
                </Link>
                <div style={{ padding: '0 2rem 1.5rem' }}>
                  <InquiryModal equipment={product.name} category={categoryName} specs={product.specs}>
                    <button
                      className="cta-btn"
                      style={{
                        background: '#c4a96b',
                        color: '#1a1a1a',
                        padding: '10px',
                        borderRadius: '3px',
                        border: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        width: '100%',
                      }}
                    >
                      Send Inquiry
                    </button>
                  </InquiryModal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
