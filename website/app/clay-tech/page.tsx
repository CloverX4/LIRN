'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClayTechPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    // For now, store locally and show a thank-you. We'll add a backend later.
    try {
      const subscribers = JSON.parse(localStorage.getItem('clay-subscribers') || '[]')
      subscribers.push({ email, date: new Date().toISOString() })
      localStorage.setItem('clay-subscribers', JSON.stringify(subscribers))
      setStatus('sent')
      setEmail('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <main style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <section style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Clay Tech</h1>
        <p style={{ color: '#5a6e58', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          LIRN Clay Tech is our upcoming business division focused on bleaching earth production. We take orders for custom bleaching earth formulations and deliver high-quality products according to your specifications. Sign up to get notified when we launch our ordering system and production capabilities.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
          <input
            aria-label="Email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.6rem 0.8rem', borderRadius: 6, border: '1px solid #d6d6d6', width: 300 }}
          />
          <button type="submit" style={{ background: '#1a3325', color: '#fff', padding: '0.6rem 0.9rem', borderRadius: 6, border: 'none' }}>
            Notify me
          </button>
        </form>
        {status === 'sent' && <p style={{ color: '#1a3325' }}>Thanks — we'll notify you when Clay Tech goes live.</p>}
        {status === 'error' && <p style={{ color: '#b00020' }}>Please provide a valid email.</p>}
        <p style={{ marginTop: '1.25rem', color: '#4b5d49' }}>
          For partnership or early access, email us at <a href="mailto:info@lirn.co.in">info@lirn.co.in</a> or visit our <Link href="/contact">Contact page</Link>.
        </p>
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2 style={{ fontSize: '1.25rem' }}>What to expect</h2>
        <ul style={{ color: '#5a6e58', marginLeft: '1rem' }}>
          <li>Practical kiln recipes and firing profiles for common clays</li>
          <li>Case studies on bag filter maintenance and root-cause fixes</li>
          <li>Process flow diagrams and checklists for plant teams</li>
          <li>Short technical notes and printable reference sheets</li>
        </ul>
      </section>
    </main>
  )
}
