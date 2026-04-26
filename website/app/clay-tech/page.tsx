'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClayTechPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    try {
      const subscribers = JSON.parse(localStorage.getItem('clay-subscribers') || '[]')
      subscribers.push({ email, date: new Date().toISOString() })
      localStorage.setItem('clay-subscribers', JSON.stringify(subscribers))
      setStatus('sent')
      setEmail('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero */}
      <section style={{ paddingBottom: '3rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#a8895a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            COMING SOON
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1rem' }}>
            Clay Tech
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75 }}>
            Our upcoming division focused on bleaching earth processing and supply. Custom formulations manufactured to your activation specifications, with full quality documentation and batch traceability.
          </p>
        </div>
      </section>

      {/* Notify Section */}
      <section style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '4rem' }}>
        <div style={{ background: '#1a3325', padding: '3rem', borderRadius: '4px', textAlign: 'center', color: '#f7f2ea' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '0.75rem' }}>
            Get notified when we launch
          </h2>
          <p style={{ fontSize: '14px', color: '#7aaa8a', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Be the first to know when our ordering system and production capabilities go live.
          </p>

          {status === 'sent' ? (
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#c4a96b' }}>
              Thanks — we'll notify you when Clay Tech goes live.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                aria-label="Email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#f7f2ea',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  width: '280px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="cta-btn"
                style={{
                  background: '#c4a96b',
                  color: '#1a1a1a',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  border: 'none',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Notify Me
              </button>
            </form>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff9a9a', fontSize: '13px', marginTop: '0.75rem' }}>Please provide a valid email address.</p>
          )}
        </div>
      </section>

      {/* What to Expect */}
      <section style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '2rem' }}>
          What to expect
        </h2>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: 'Custom Formulations', desc: 'Bleaching earth activated to your specific oil type and decolourization requirements. Full lab analysis with every batch.' },
            { title: 'Process Expertise', desc: 'Backed by our process engineering division. We understand activation chemistry, kiln operation, and quality control from first principles.' },
            { title: 'Consistent Supply', desc: 'In-house production with batch traceability. Scheduled deliveries with quality certificates and material safety data sheets.' },
            { title: 'Technical Support', desc: 'Filtration rate optimization, dosage recommendations, and process troubleshooting from engineers who understand the complete system.' },
          ].map((item) => (
            <div key={item.title} style={{ padding: '2rem', background: '#eee8d8', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.75 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ borderTop: '1px solid #c8bfa8', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#5a6e58', marginBottom: '0.5rem' }}>
            For partnership or early access inquiries
          </p>
          <p style={{ fontSize: '14px', color: '#5a6e58' }}>
            Email us at{' '}
            <a href="mailto:info@lirn.co.in" style={{ color: '#1a2e1a', fontWeight: 500, borderBottom: '1px solid #c8bfa8' }}>
              info@lirn.co.in
            </a>
            {' '}or visit our{' '}
            <Link href="/contact" style={{ color: '#1a2e1a', fontWeight: 500, borderBottom: '1px solid #c8bfa8' }}>
              Contact page
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
