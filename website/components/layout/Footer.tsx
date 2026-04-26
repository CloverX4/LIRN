import Link from 'next/link'

export default function Footer() {
  const linkStyle = {
    fontSize: '13px',
    color: '#3a5a3a',
    textDecoration: 'none',
    display: 'block',
  }

  const colHeadStyle = {
    fontSize: '10px',
    fontWeight: 500 as const,
    color: '#4a6a4a',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    marginBottom: '1rem',
  }

  return (
    <footer style={{ background: '#0d1f14' }}>
      <div
        className="footer-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3.5rem 2rem 2rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '2rem',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#f7f2ea', letterSpacing: '0.06em' }}>
              LIRN
            </span>
            <span style={{ display: 'block', fontSize: '9px', fontWeight: 500, color: '#4a6a4a', letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: '2px' }}>
              Group
            </span>
          </div>
          <p style={{ fontSize: '11px', color: '#3a5a3a', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '1rem' }}>
            Process Engineering & Industrial Fabrication
          </p>
          <div style={{ fontSize: '12px', color: '#2a4a2a', lineHeight: 1.9 }}>
            <div>Hyderabad, Telangana</div>
            <div>India — 500070</div>
            <div style={{ marginTop: '0.5rem' }}>
              <a href="mailto:info@lirn.co.in" style={{ color: '#4a7a5a' }}>info@lirn.co.in</a>
            </div>
          </div>
        </div>

        {/* Divisions */}
        <div>
          <div style={colHeadStyle}>Divisions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/fabrications" style={linkStyle}>LIRN Fabrications</Link>
            <Link href="/solutions" style={linkStyle}>LIRN Solutions</Link>
            <Link href="/clay-tech" style={linkStyle}>LIRN Clay Tech</Link>
          </div>
        </div>

        {/* Equipment */}
        <div>
          <div style={colHeadStyle}>Equipment</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/fabrications/thermal/rotary-kiln" style={linkStyle}>Rotary Kilns</Link>
            <Link href="/fabrications/cyclones" style={linkStyle}>Cyclone Separators</Link>
            <Link href="/fabrications/dust-collection/bag-filter-house" style={linkStyle}>Bag Filter Houses</Link>
            <Link href="/fabrications/conveyors" style={linkStyle}>Conveyors</Link>
            <Link href="/fabrications/trusses" style={linkStyle}>Trusses & Sheds</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={colHeadStyle}>Quick Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/case-studies" style={linkStyle}>Case Studies</Link>
            <Link href="/estimate" style={linkStyle}>Request Callback</Link>
            <Link href="/about" style={linkStyle}>About</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.25rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '11px', color: '#2a4a2a' }}>© 2026 LIRN Group. All rights reserved.</div>
        <div style={{ fontSize: '11px', color: '#2a4a2a' }}>Hyderabad · India</div>
      </div>
    </footer>
  )
}