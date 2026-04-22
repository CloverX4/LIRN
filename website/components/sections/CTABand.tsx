import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function CTABand() {
  const waMessage = 'Hi LIRN Group, I found your website and would like to discuss a requirement.'
  const waHref = 'https://wa.me/' + siteConfig.whatsapp + '?text=' + encodeURIComponent(waMessage)

  return (
    <section style={{ background: '#1a3325', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a8a6a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Get in touch
          </div>
          <div style={{ width: '32px', height: '2px', background: '#c4a96b', marginBottom: '1.25rem' }} />
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: '#f7f2ea', fontWeight: 'normal', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Have a process problem? Let us talk.
          </h2>
          <p style={{ fontSize: '14px', color: '#7aaa8a', lineHeight: 1.6, maxWidth: '420px' }}>
            Fabrication enquiries, RCA requests, plant consultancy — reach us directly. No intermediaries.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/estimate" style={{ background: '#c4a96b', color: '#1a1a1a', fontSize: '12px', fontWeight: 500, padding: '14px 28px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
            Request estimate
          </Link>
          <a href={waHref} target="_blank" rel="noopener noreferrer" style={{ background: '#25a244', color: '#ffffff', fontSize: '12px', fontWeight: 500, padding: '14px 28px', borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
            WhatsApp us
          </a>
          <Link href="/contact" style={{ fontSize: '13px', color: '#7aaa8a', fontWeight: 500, textDecoration: 'none', paddingBottom: '2px', borderBottom: '1px solid #3a6a4a' }}>
            Or use the contact form
          </Link>
        </div>
      </div>
    </section>
  )
}
