'use client'

import { useState } from 'react'
import Link from 'next/link'
import InquiryModal from '@/components/sections/InquiryModal'

const fabricationCategories = [
  { name: 'Conveyors', href: '/fabrications/conveyors' },
  { name: 'Thermal Equipment', href: '/fabrications/thermal' },
  { name: 'Dust Collection', href: '/fabrications/dust-collection' },
  { name: 'Cyclones', href: '/fabrications/cyclones' },
  { name: 'Crushers', href: '/fabrications/crushers' },
  { name: 'Trusses & Structures', href: '/fabrications/trusses' },
  { name: 'Storage Tanks', href: '/fabrications/storage-tanks' },
  { name: 'Gas Handling', href: '/fabrications/gas-handling' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [fabricOpen, setFabricOpen] = useState(false)

  return (
    <header style={{ background: '#f7f2ea', borderBottom: '1px solid #c8bfa8', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1a3325', letterSpacing: '0.06em', fontWeight: 'normal' }}>LIRN</span>
            <span style={{ fontSize: '9px', fontWeight: 500, color: '#5a6e58', letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: '2px' }}>Group</span>
          </div>
        </Link>

        <nav className="desktop-nav" style={{ alignItems: 'center', gap: '2rem' }}>
          <div style={{ position: 'relative' }} onMouseEnter={() => setFabricOpen(true)} onMouseLeave={() => setFabricOpen(false)}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 500, color: '#1a3325', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 0' }}>
              Fabrications <span style={{ fontSize: '10px', color: '#5a6e58' }}>▾</span>
            </button>
            {fabricOpen && (
              <div style={{ position: 'absolute', top: '100%', left: '0', background: '#f7f2ea', border: '1px solid #c8bfa8', borderRadius: '4px', padding: '8px 0', minWidth: '200px', boxShadow: '0 4px 16px rgba(26,50,37,0.08)', zIndex: 100 }}>
                {fabricationCategories.map((cat) => (
                  <Link key={cat.href} href={cat.href} style={{ display: 'block', padding: '8px 16px', fontSize: '13px', color: '#1a3325' }}>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/solutions" style={{ fontSize: '13px', fontWeight: 500, color: '#1a3325', letterSpacing: '0.04em' }}>Solutions</Link>
          <Link href="/case-studies" style={{ fontSize: '13px', fontWeight: 500, color: '#1a3325', letterSpacing: '0.04em' }}>Case Studies</Link>
          <Link href="/about" style={{ fontSize: '13px', fontWeight: 500, color: '#1a3325', letterSpacing: '0.04em' }}>About</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <InquiryModal>
            <span className="cta-btn-dark" style={{ background: '#1a3325', color: '#f7f2ea', fontSize: '11px', fontWeight: 500, padding: '9px 16px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', display: 'inline-block' }}>
              <span className="nav-cta-text">Send Inquiry</span>
              <span style={{ display: 'none' }} className="nav-cta-short">Inquiry</span>
            </span>
          </InquiryModal>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }} aria-label="Toggle menu">
            <span style={{ width: '22px', height: '1.5px', background: '#1a3325', display: 'block' }} />
            <span style={{ width: '22px', height: '1.5px', background: '#1a3325', display: 'block' }} />
            <span style={{ width: '22px', height: '1.5px', background: '#1a3325', display: 'block' }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ background: '#f7f2ea', borderTop: '1px solid #c8bfa8', padding: '1rem 1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#7a8c6a', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '8px 0', marginBottom: '4px' }}>Fabrications</div>
          {fabricationCategories.map((cat) => (
            <Link key={cat.href} href={cat.href} style={{ display: 'block', padding: '9px 0 9px 12px', fontSize: '13px', color: '#1a3325', borderBottom: '1px solid #eee8d8' }} onClick={() => setMobileOpen(false)}>{cat.name}</Link>
          ))}
          {[{ label: 'Solutions', href: '/solutions' }, { label: 'Case Studies', href: '/case-studies' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: 'block', padding: '10px 0', fontSize: '14px', color: '#1a3325', borderBottom: '1px solid #eee8d8', fontWeight: 500 }} onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <InquiryModal>
            <div style={{ marginTop: '1rem', background: '#1a3325', color: '#f7f2ea', fontSize: '12px', fontWeight: 500, padding: '12px 20px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center', cursor: 'pointer' }}>
              Send Inquiry
            </div>
          </InquiryModal>
        </div>
      )}
    </header>
  )
}
