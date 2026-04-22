import Link from 'next/link'
import { featuredCaseStudy } from '@/data/case-studies'

export default function CaseStudyTeaser() {
  const cs = featuredCaseStudy
  if (!cs) return null

  return (
    <section style={{ background: '#1a3325', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="case-study-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a8a6a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Case study</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#f7f2ea', fontWeight: 'normal', lineHeight: 1.25, marginBottom: '1.25rem' }}>
              From backfire to stable operation — in one engagement
            </h2>
            <p style={{ fontSize: '14px', color: '#7aaa8a', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Our first LIRN engagement diagnosed a recurring furnace backfire and visible stack emissions at a 10 TPH calcium bentonite processing plant in Karnataka.
            </p>
            {cs.anonymized && cs.anonymizedNote && (
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#4a7a5a', lineHeight: 1.6, borderLeft: '2px solid #2a5a3a', paddingLeft: '12px', marginBottom: '1.75rem' }}>
                {cs.anonymizedNote}
              </div>
            )}
            <Link href={cs.href} style={{ background: '#c4a96b', color: '#1a1a1a', fontSize: '12px', fontWeight: 500, padding: '12px 24px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
              Read the full case study
            </Link>
          </div>
          <div style={{ background: '#0d1f14', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', padding: '2rem' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#5a8a6a', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 500 }}>{cs.tag}</div>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#f7f2ea', fontWeight: 'normal', marginBottom: '1.75rem', lineHeight: 1.35 }}>{cs.title}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: '1.5rem' }}>
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#c4a96b', lineHeight: 1, marginBottom: '5px' }}>{m.value}</div>
                  <div style={{ fontSize: '11px', color: '#5a8a6a', lineHeight: 1.4 }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[{ label: 'Problem', content: cs.problem }, { label: 'Fix', content: cs.fix }].map((block) => (
                <div key={block.label}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#5a8a6a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '8px' }}>{block.label}</div>
                  <p style={{ fontSize: '12px', color: '#6a8a74', lineHeight: 1.65 }}>{block.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
