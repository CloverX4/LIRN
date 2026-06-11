import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import { parseMarkdown } from '@/lib/markdown'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

interface ServiceFrontmatter {
  title: string
  slug: string
  category: string
  description: string
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Find service in data
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  // Load MDX file
  const filePath = path.join(process.cwd(), 'content', 'services', `${params.slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const frontmatter = data as ServiceFrontmatter

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '3rem' }}>
        <Link href="/solutions" style={{ color: '#5a6e58', textDecoration: 'none', fontSize: '14px' }}>
          Solutions
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

      {/* Main Content */}
      <section style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
      </section>

      {/* CTA */}
      <section style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #c8bfa8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', background: '#1a3325', padding: '2.5rem', borderRadius: '4px', textAlign: 'center', color: '#f7f2ea' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '1rem' }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: '14px', color: '#7aaa8a', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Reach out to discuss your specific process engineering needs. We work through WhatsApp for rapid consultation.
          </p>
          <a
            href="https://wa.me/919999999999?text=I'm%20interested%20in%20your%20services"
            style={{
              display: 'inline-block',
              background: '#c4a96b',
              color: '#1a1a1a',
              padding: '14px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
