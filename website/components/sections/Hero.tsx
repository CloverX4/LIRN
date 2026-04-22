'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '1'
      ref.current.style.transform = 'translateY(0)'
    }
  }, [])

  return (
    <section style={{ background: '#1a3325', padding: '4rem 1.5rem 3.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#7aaa8a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
          Process Engineering & Industrial Fabrication — Hyderabad, India
        </div>
        <div style={{ width: '36px', height: '2px', background: '#c4a96b', marginBottom: '1.75rem' }} />
        <div ref={ref} style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.6rem)', color: '#f7f2ea', lineHeight: 1.15, fontWeight: 'normal', maxWidth: '680px', marginBottom: '1.5rem' }}>
            Built on decades of{' '}
            <em style={{ color: '#c4a96b', fontStyle: 'normal' }}>field-proven</em>{' '}
            engineering
          </h1>
          <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#9abaa4', lineHeight: 1.75, maxWidth: '520px', marginBottom: '2rem' }}>
            From rotary kilns and cyclone separators to full process plant consulting — LIRN Group fabricates, engineers, and delivers across the complete industrial spectrum.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimate" style={{ background: '#c4a96b', color: '#1a1a1a', fontSize: '12px', fontWeight: 500, padding: '13px 26px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
              Request an Estimate
            </Link>
            <Link href="/case-studies" style={{ color: '#7aaa8a', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #3a6a4a', paddingBottom: '2px' }}>
              View our work <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '3.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', maxWidth: '520px', gap: '1rem' }}>
          {[{ n: '25+', label: 'Years in industry' }, { n: '500+', label: 'Projects delivered' }, { n: '3', label: 'Divisions' }].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#f7f2ea', lineHeight: 1, marginBottom: '5px' }}>{stat.n}</div>
              <div style={{ fontSize: '10px', color: '#5a8a6a', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
