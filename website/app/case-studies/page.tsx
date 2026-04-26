'use client'

import Link from 'next/link'
import { caseStudies } from '@/data/case-studies'

export default function CaseStudiesPage() {
  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero */}
      <section style={{ paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            CASE STUDIES
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Real Problems. Real Solutions.
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75 }}>
            These case studies document actual plant problems we've solved. Plant names are anonymized to respect client confidentiality, but the technical details and outcomes are verifiable.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              style={{
                textDecoration: 'none',
                display: 'block',
                padding: '2rem',
                background: '#1a3325',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                color: '#f7f2ea',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0d1f14'
                e.currentTarget.style.borderColor = '#c4a96b'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1a3325'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#5a8a6a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 500 }}>
                {cs.tag}
              </div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#f7f2ea', fontWeight: 'normal', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                {cs.title}
              </h2>
              <p style={{ fontSize: '13px', color: '#7aaa8a', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {cs.problem}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', color: '#c4a96b', lineHeight: 1 }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '10px', color: '#5a8a6a', marginTop: '4px' }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#c4a96b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Read Full Study →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
