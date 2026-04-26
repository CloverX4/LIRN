import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { parseMarkdown } from '@/lib/markdown'

interface ProductFrontmatter {
  title: string
  category: string
  slug: string
  description: string
  specs?: Array<{ label: string; value: string }>
  applications?: string[]
}

export default function ProductPage({ params }: { params: { category: string; slug: string } }) {
  // Build the file path
  const categoryMap: Record<string, string> = {
    thermal: 'thermal',
    'dust-collection': 'dust-collection',
    cyclones: 'cyclones',
    conveyors: 'conveyors',
    crushers: 'crushers',
    trusses: 'trusses',
    'storage-tanks': 'storage-tanks',
  }

  const catPath = categoryMap[params.category]
  if (!catPath) notFound()

  const filePath = path.join(process.cwd(), 'content', 'products', catPath, `${params.slug}.mdx`)

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const frontmatter = data as ProductFrontmatter

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '3rem' }}>
        <Link href="/fabrications" style={{ color: '#5a6e58', textDecoration: 'none', fontSize: '14px' }}>
          Fabrications
        </Link>
        <span style={{ color: '#c8bfa8', margin: '0 0.5rem' }}>/</span>
        <Link href={`/fabrications/${params.category}`} style={{ color: '#5a6e58', textDecoration: 'none', fontSize: '14px' }}>
          {frontmatter.category}
        </Link>
        <span style={{ color: '#c8bfa8', margin: '0 0.5rem' }}>/</span>
        <span style={{ color: '#1a2e1a', fontSize: '14px' }}>{frontmatter.title}</span>
      </div>

      {/* Header */}
      <section style={{ paddingBottom: '3rem', borderBottom: '1px solid #c8bfa8', marginBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {frontmatter.category}
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1rem' }}>
            {frontmatter.title}
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75 }}>
            {frontmatter.description}
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        {/* Main Content */}
        <section><div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} /></section>

        {/* Sidebar */}
        <aside>
          {/* Specs */}
          {frontmatter.specs && frontmatter.specs.length > 0 && (
            <div style={{ background: '#eee8d8', padding: '2rem', borderRadius: '4px', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Specifications
              </h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {frontmatter.specs.map((spec, idx) => (
                  <div key={idx}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.05em' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '14px', color: '#1a2e1a', fontWeight: '500' }}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          {frontmatter.applications && frontmatter.applications.length > 0 && (
            <div style={{ background: '#1a3325', padding: '2rem', borderRadius: '4px', color: '#f7f2ea' }}>
              <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7aaa8a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Applications
              </h2>
              <ul style={{ fontSize: '14px', lineHeight: 1.8, listStyle: 'none', padding: 0 }}>
                {frontmatter.applications.map((app, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    • {app}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f7f2ea', border: '1px solid #c8bfa8', borderRadius: '4px', textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: '#5a6e58', marginBottom: '1rem' }}>Need customized specifications?</p>
            <a
              href="https://wa.me/919999999999?text=I'm%20interested%20in%20learning%20more%20about%20your%20products."
              style={{
                display: 'inline-block',
                background: '#25a244',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Message on WhatsApp
            </a>
          </div>
        </aside>
      </div>

      {/* Mobile Stack */}
      <style>{`
        @media (max-width: 768px) {
          .product-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
