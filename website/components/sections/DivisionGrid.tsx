import Link from 'next/link'
import { divisions } from '@/data/divisions'

export default function DivisionGrid() {
  return (
    <section style={{ background: '#f7f2ea', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#7a8c6a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our divisions</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#1a3325', fontWeight: 'normal', marginBottom: '0.75rem' }}>Three practices, one team</h2>
          <p style={{ fontSize: '15px', color: '#5a6e58', maxWidth: '480px', lineHeight: 1.7 }}>Each division operates with dedicated expertise. Together they cover the full lifecycle of an industrial process plant.</p>
        </div>
        <div className="division-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#c8bfa8', border: '1px solid #c8bfa8', borderRadius: '4px', overflow: 'hidden' }}>
          {divisions.map((div) => (
            <div key={div.name} style={{ background: '#f7f2ea', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: div.soon ? '#a8895a' : '#5a8a6a', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 500 }}>{div.tag}</div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#1a3325', fontWeight: 'normal', marginBottom: '0.75rem' }}>{div.name}</h3>
              <p style={{ fontSize: '13px', color: '#5a6e58', lineHeight: 1.7, marginBottom: '1.5rem', flexGrow: 1 }}>{div.desc}</p>
              <div style={{ marginBottom: '1.5rem' }}>
                {div.items.map((item) => (
                  <div key={item} style={{ fontSize: '12px', color: '#7a8c6a', padding: '5px 0', borderBottom: '1px solid #eee8d8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#c4a96b', fontSize: '10px' }}>—</span>{item}
                  </div>
                ))}
              </div>
              <Link href={div.href} style={{ fontSize: '11px', color: div.soon ? '#a8895a' : '#1a3325', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid', borderColor: div.soon ? '#a8895a' : '#c8bfa8', paddingBottom: '2px', alignSelf: 'flex-start' }}>
                {div.cta} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
