import Link from 'next/link'
import { products } from '@/data/products'

export default function ProductsGrid() {
  return (
    <section style={{ background: '#eee8d8', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#7a8c6a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Equipment we fabricate</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#1a3325', fontWeight: 'normal' }}>Built to spec, built to last</h2>
          </div>
          <Link href="/fabrications" style={{ fontSize: '12px', color: '#1a3325', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #c8bfa8', paddingBottom: '2px', whiteSpace: 'nowrap' }}>View all equipment →</Link>
        </div>
        <div style={{ width: '36px', height: '2px', background: '#c4a96b', marginBottom: '2rem' }} />
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#c8bfa8', border: '1px solid #c8bfa8', borderRadius: '4px', overflow: 'hidden' }}>
          {products.map((item) => (
            <Link key={item.href} href={item.href} style={{ background: '#f7f2ea', padding: '1.25rem', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#8aab6e', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 500 }}>{item.cat}</div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a3325', marginBottom: '4px', fontFamily: 'Georgia, serif' }}>{item.name}</div>
              <div style={{ fontSize: '12px', color: '#7a8c6a' }}>{item.spec}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
