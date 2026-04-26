'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import InquiryModal from '@/components/sections/InquiryModal'

export default function CTABand() {
  const waMessage = 'Hi LIRN Group, I found your website and would like to discuss a requirement.'
  const waHref = 'https://wa.me/' + siteConfig.whatsapp + '?text=' + encodeURIComponent(waMessage)

  return (
    <section style={{ background: '#eee8d8', borderTop: '1px solid #c8bfa8', borderBottom: '1px solid #c8bfa8', padding: '5rem 2rem' }}>
      <div className="cta-band-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem' }}>
        <div style={{ flex: 1, maxWidth: '560px' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Ready to start?
          </div>
          <div style={{ width: '32px', height: '2px', background: '#c4a96b', marginBottom: '1.25rem' }} />
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1a2e1a', fontWeight: 'normal', marginBottom: '0.75rem', lineHeight: 1.25 }}>
            Have a process problem?<br />Let&apos;s solve it together.
          </h2>
          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.7, maxWidth: '460px' }}>
            From fabrication enquiries and RCA requests to full plant consultancy — reach us directly. No intermediaries, no delays.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'stretch', minWidth: '220px' }}>
          <InquiryModal>
            <span className="cta-btn" style={{ background: '#c4a96b', color: '#1a1a1a', fontSize: '12px', fontWeight: 500, padding: '15px 28px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', textAlign: 'center' }}>
              Send Inquiry
            </span>
          </InquiryModal>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="cta-btn-green" style={{ background: '#25a244', color: '#ffffff', fontSize: '12px', fontWeight: 500, padding: '15px 28px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'block', textAlign: 'center' }}>
            WhatsApp Us
          </a>
          <Link href="/contact" className="cta-link" style={{ fontSize: '13px', color: '#5a6e58', fontWeight: 500, textDecoration: 'none', paddingBottom: '2px', borderBottom: '1px solid #c8bfa8', textAlign: 'center', marginTop: '0.25rem' }}>
            Or use the contact form →
          </Link>
        </div>
      </div>
    </section>
  )
}
