'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
    honeypot: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Honeypot check
    if (formData.honeypot) {
      setSubmitted(true)
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          inquiry: formData.inquiry,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', inquiry: '', honeypot: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ background: '#f7f2ea', minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Hero */}
      <section style={{ paddingBottom: '3rem', borderBottom: '1px solid #c8bfa8', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            GET IN TOUCH
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1rem' }}>
            We'd like to hear from you
          </h1>
          <p style={{ fontSize: '15px', color: '#5a6e58', maxWidth: '600px', lineHeight: 1.75 }}>
            Have a question about equipment, need engineering support, or want to discuss a project? Reach out using the form below or connect directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <div className="two-col-layout" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
        {/* Form */}
        <section>
          {submitted ? (
            <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '3rem', borderRadius: '4px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', marginBottom: '1rem' }}>
                ✓ Thank you
              </div>
              <p style={{ fontSize: '15px', color: '#c8bfa8', marginBottom: '0.75rem', lineHeight: 1.75 }}>
                Your message has been received. We'll review it and connect with you within 24-48 hours.
              </p>
              <p style={{ fontSize: '14px', color: '#7aaa8a' }}>
                For urgent inquiries, you can also reach us on WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              {/* Name */}
              <div>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    background: '#fff',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#1a2e1a',
                  }}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    background: '#fff',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#1a2e1a',
                  }}
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    background: '#fff',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#1a2e1a',
                  }}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Company */}
              <div>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Company/Plant Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    background: '#fff',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#1a2e1a',
                  }}
                  placeholder="Your organization"
                />
              </div>

              {/* Inquiry */}
              <div>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Your Inquiry *
                </label>
                <textarea
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #c8bfa8',
                    borderRadius: '4px',
                    background: '#fff',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#1a2e1a',
                    resize: 'vertical',
                  }}
                  placeholder="Tell us about your inquiry—equipment questions, process problems, documentation needs, or specific services you're interested in."
                />
              </div>

              {/* Honeypot */}
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} />

              {/* Error */}
              {error && (
                <div style={{ background: '#ffe8e8', color: '#c41e3a', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
                  {error}
                </div>
              )}

              {/* Submit */}
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
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p style={{ fontSize: '12px', color: '#5a6e58', marginTop: '1rem' }}>
                * Required fields. We'll respond to your message within one business day.
              </p>
            </form>
          )}
        </section>

        {/* Sidebar */}
        <aside>
          {/* Quick Contact */}
          <div style={{ background: '#eee8d8', padding: '2rem', borderRadius: '4px', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Quick Contact
            </h3>

            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', textTransform: 'uppercase', marginBottom: '6px' }}>
                Email
              </div>
              <a href="mailto:info@lirn.co.in" style={{ fontSize: '14px', color: '#1a2e1a', textDecoration: 'none', fontWeight: '500' }}>
                info@lirn.co.in
              </a>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', textTransform: 'uppercase', marginBottom: '6px' }}>
                WhatsApp
              </div>
              <a href="https://wa.me/919999999999" style={{ fontSize: '14px', color: '#25a244', textDecoration: 'none', fontWeight: '500' }}>
                +91 99999 99999
              </a>
            </div>

            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', textTransform: 'uppercase', marginBottom: '6px' }}>
                Location
              </div>
              <p style={{ fontSize: '13px', color: '#5a6e58', lineHeight: 1.6, margin: 0 }}>
                Hyderabad, India
              </p>
            </div>
          </div>

          {/* Response Time */}
          <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '2rem', borderRadius: '4px', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#7aaa8a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Response Time
            </h3>
            <p style={{ fontSize: '13px', color: '#c8bfa8', lineHeight: 1.7, margin: 0 }}>
              We aim to respond to all inquiries within 24 hours. For urgent issues, WhatsApp is the fastest way to reach us.
            </p>
          </div>

          {/* Ask About */}
          <div style={{ background: '#f7f2ea', padding: '2rem', border: '1px solid #c8bfa8', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              We Can Help With
            </h3>
            <ul style={{ fontSize: '13px', color: '#5a6e58', lineHeight: 2, listStyle: 'none', padding: 0, margin: 0 }}>
              <li>• Root cause analysis</li>
              <li>• Equipment design & specs</li>
              <li>• Process engineering</li>
              <li>• System documentation</li>
              <li>• Installation support</li>
              <li>• Operator training</li>
            </ul>
          </div>
        </aside>
      </div>

    </main>
  )
}
