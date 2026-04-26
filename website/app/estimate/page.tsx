'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CallbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    requirement: '',
    honeypot: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.honeypot) {
      setSubmitted(true)
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          description: formData.requirement,
          projectType: 'callback',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send request')
      }

      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', company: '', requirement: '', honeypot: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const labelStyle = {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '10px',
    color: '#5a6e58',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: '0.5rem',
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #c8bfa8',
    borderRadius: '4px',
    background: '#fff',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    color: '#1a2e1a',
  }

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero */}
      <section style={{ paddingBottom: '3rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            REQUEST A CALLBACK
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1rem' }}>
            Tell us what you need
          </h1>
          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.75 }}>
            Not sure about specs, sizing, or which equipment fits your process? Describe your requirement and we&apos;ll call you back to discuss the right solution.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ maxWidth: '600px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {submitted ? (
          <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '3.5rem', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', marginBottom: '1rem' }}>
              We&apos;ll call you back
            </div>
            <p style={{ fontSize: '15px', color: '#c8bfa8', marginBottom: '1rem', lineHeight: 1.75 }}>
              Your request has been received. One of our engineers will review your requirement and get in touch within one business day.
            </p>
            <p style={{ fontSize: '14px', color: '#7aaa8a' }}>
              For anything urgent, WhatsApp us directly at{' '}
              <a href="https://wa.me/919999999999" style={{ color: '#c4a96b' }}>+91 99999 99999</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Your Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Full name" />
            </div>

            <div>
              <label style={labelStyle}>Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} placeholder="+91 XXXXX XXXXX" />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="you@company.com (optional)" />
            </div>

            <div>
              <label style={labelStyle}>Company / Plant</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle} placeholder="Your organization" />
            </div>

            <div>
              <label style={labelStyle}>What do you need help with? *</label>
              <textarea
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="e.g. We run a 10 TPH calcium bentonite line and need a bag filter system for kiln exhaust. Not sure about the sizing or duct layout. Looking for someone who can assess the setup and recommend the right configuration."
              />
            </div>

            {/* Honeypot */}
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} />

            {error && (
              <div style={{ background: '#ffe8e8', color: '#c41e3a', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="cta-btn"
              style={{
                background: '#c4a96b',
                color: '#1a1a1a',
                padding: '14px',
                borderRadius: '4px',
                border: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? 'Sending...' : 'Request a Callback'}
            </button>

            <p style={{ fontSize: '12px', color: '#5a6e58', textAlign: 'center', lineHeight: 1.6 }}>
              We&apos;ll call within one business day. Or{' '}
              <Link href="/contact" style={{ color: '#1a2e1a', fontWeight: 500, borderBottom: '1px solid #c8bfa8' }}>
                use the contact form
              </Link>{' '}
              for general enquiries.
            </p>
          </form>
        )}
      </section>
    </main>
  )
}
