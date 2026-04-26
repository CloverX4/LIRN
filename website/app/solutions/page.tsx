'use client'

import Link from 'next/link'
import { services } from '@/data/services'

// Group services by category
const servicesByCategory = services.reduce(
  (acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  },
  {} as Record<string, typeof services>,
)

export default function SolutionsPage() {
  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{ paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            LIRN SOLUTIONS
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Process Engineering & Consulting
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75 }}>
            We diagnose equipment failures, calculate process parameters with precision, and document systems to operating standards. When a plant problem needs solving, we work methodically to find and fix the root cause.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
        <section key={category} style={{ paddingBottom: '4rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
            <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              {category}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {categoryServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    padding: '2rem',
                    background: '#fff',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#eee8d8'
                    e.currentTarget.style.borderColor = '#c4a96b'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fff'
                    e.currentTarget.style.borderColor = '#c8bfa8'
                  }}
                >
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '0.75rem' }}>
                    {service.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#c4a96b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: '#5a6e58', marginBottom: '1.5rem' }}>
            Need help with a specific process challenge?
          </p>
          <a
            href="https://wa.me/919999999999?text=I%20have%20a%20process%20engineering%20question"
            style={{
              display: 'inline-block',
              background: '#25a244',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
