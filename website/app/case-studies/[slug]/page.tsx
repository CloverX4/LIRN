import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/data/case-studies'
import { parseMarkdown } from '@/lib/markdown'

interface CaseStudyFrontmatter {
  title: string
  category: string
  slug: string
  description: string
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // Find in data
  const cs = caseStudies.find((s) => s.slug === params.slug)

  if (!cs) {
    notFound()
  }

  // Load MDX
  const filePath = path.join(process.cwd(), 'content', 'case-studies', `${params.slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const frontmatter = data as CaseStudyFrontmatter

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '3rem' }}>
        <Link href="/case-studies" style={{ color: '#5a6e58', textDecoration: 'none', fontSize: '14px' }}>
          Case Studies
        </Link>
        <span style={{ color: '#c8bfa8', margin: '0 0.5rem' }}>/</span>
        <span style={{ color: '#1a2e1a', fontSize: '14px' }}>{frontmatter.title}</span>
      </div>

      {/* Header */}
      <section style={{ paddingBottom: '3rem', borderBottom: '1px solid #c8bfa8', marginBottom: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {cs.tag}
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1rem' }}>
            {frontmatter.title}
          </h1>
          <p style={{ fontSize: '16px', color: '#5a6e58', maxWidth: '700px', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            {frontmatter.description}
          </p>

          {cs.anonymized && cs.anonymizedNote && (
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', lineHeight: 1.7, borderLeft: '2px solid #c8bfa8', paddingLeft: '12px', marginTop: '1.5rem', fontStyle: 'italic' }}>
              {cs.anonymizedNote}
            </div>
          )}
        </div>
      </section>

      {/* Metrics Panel */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '3rem', borderRadius: '4px' }}>
          <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#7aaa8a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            Key Results
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: '#c4a96b', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '12px', color: '#7aaa8a' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        {/* Main Content */}
        <section><div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} /></section>

        {/* Sidebar */}
        <aside>
          <div style={{ background: '#eee8d8', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              The Problem
            </h3>
            <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.75, marginBottom: '2rem' }}>
              {cs.problem}
            </p>

            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #c8bfa8' }}>
              The Fix
            </h3>
            <p style={{ fontSize: '14px', color: '#5a6e58', lineHeight: 1.75 }}>
              {cs.fix}
            </p>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#1a3325', borderRadius: '4px', textAlign: 'center', color: '#f7f2ea' }}>
            <p style={{ fontSize: '13px', color: '#7aaa8a', marginBottom: '1rem' }}>Facing a similar challenge?</p>
            <a
              href="https://wa.me/919999999999?text=I%20have%20a%20similar%20process%20issue"
              style={{
                display: 'inline-block',
                background: '#c4a96b',
                color: '#1a1a1a',
                padding: '12px 20px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Get Help
            </a>
          </div>
        </aside>
      </div>

      {/* Mobile Stack */}
      <style>{`
        @media (max-width: 768px) {
          .case-study-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
