'use client'

import Link from 'next/link'
import { products } from '@/data/products'

// Extract unique categories
const categories = Array.from(new Set(products.map((p) => p.cat))).sort()

// Map categories to paths
const categoryMap: Record<string, string> = {
  Thermal: 'thermal',
  'Dust Collection': 'dust-collection',
  Separation: 'cyclones',
  'Material Handling': 'conveyors',
  'Size Reduction': 'crushers',
  Structural: 'trusses',
  'Gas Handling': 'gas-handling',
  Storage: 'storage-tanks',
}

export default function FabricationsPage() {
  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{ paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            LIRN FABRICATIONS
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Industrial Equipment & Systems
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75 }}>
            Twelve years of process equipment fabrication for thermal processing, dust collection, material handling and separation. Built to spec, pressure-tested, installed with commissioning support.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {categories.map((cat) => {
            const catPath = categoryMap[cat] || cat.toLowerCase().replace(/\s+/g, '-')
            const itemsInCat = products.filter((p) => p.cat === cat)

            return (
              <Link
                key={cat}
                href={`/fabrications/${catPath}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  padding: '2rem',
                  background: '#eee8d8',
                  border: '1px solid #c8bfa8',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e8e0cc'
                  e.currentTarget.style.borderColor = '#c4a96b'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#eee8d8'
                  e.currentTarget.style.borderColor = '#c8bfa8'
                }}
              >
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '0.5rem' }}>
                  {cat}
                </h2>
                <p style={{ fontSize: '14px', color: '#5a6e58', marginBottom: '1rem' }}>
                  {itemsInCat.length} product{itemsInCat.length !== 1 ? 's' : ''}
                </p>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#c4a96b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  View Details →
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
