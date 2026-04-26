'use client'

import { useState } from 'react'

export default function EstimatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
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

    // Honeypot
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
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          projectType: formData.projectType,
          description: formData.description,
          timeline: formData.timeline,
          budget: formData.budget,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send estimate request')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', company: '', projectType: '', description: '', timeline: '', budget: '', honeypot: '' })
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
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            REQUEST AN ESTIMATE
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a2e1a', fontWeight: 'normal', lineHeight: 1.2, marginBottom: '1rem' }}>
            Tell us about your project
          </h1>
          <p style={{ fontSize: '15px', color: '#5a6e58', lineHeight: 1.75 }}>
            Whether you need new equipment fabricated, a process engineering study, or complete system documentation, share the details below and we'll prepare an estimate with timeline and scope.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ maxWidth: '800px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {submitted ? (
          <div style={{ background: '#1a3325', color: '#f7f2ea', padding: '4rem', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', marginBottom: '1rem' }}>
              ✓ Request Received
            </div>
            <p style={{ fontSize: '15px', color: '#c8bfa8', marginBottom: '1rem', lineHeight: 1.75 }}>
              Thank you for submitting your project details. We've received your estimate request and will review it carefully.
            </p>
            <p style={{ fontSize: '14px', color: '#7aaa8a', marginBottom: '2rem' }}>
              We'll prepare a detailed estimate with scope, timeline, and cost breakdown, and send it to you within 3-5 business days.
            </p>
            <p style={{ fontSize: '13px', color: '#7aaa8a' }}>
              For updates or questions in the meantime, reach out to us on WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
            {/* Contact Information */}
            <fieldset style={{ border: 'none', padding: 0 }}>
              <legend style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>
                Your Information
              </legend>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Your Name *
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a' }} />
                </div>

                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Email Address *
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Phone Number
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a' }} />
                </div>

                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Company/Plant Name *
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a' }} />
                </div>
              </div>
            </fieldset>

            {/* Project Details */}
            <fieldset style={{ border: 'none', padding: 0, paddingTop: '1.5rem', borderTop: '1px solid #c8bfa8' }}>
              <legend style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>
                Project Details
              </legend>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  What type of project? *
                </label>
                <select name="projectType" value={formData.projectType} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a' }}>
                  <option value="">— Select project type —</option>
                  <option value="new-equipment">New Equipment Manufacturing</option>
                  <option value="equipment-retrofit">Equipment Retrofit/Upgrade</option>
                  <option value="rca">Root Cause Analysis</option>
                  <option value="engineering-study">Process Engineering Study</option>
                  <option value="pressure-loss">Pressure Loss Budget</option>
                  <option value="documentation">System Documentation</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a', resize: 'vertical' }}
                  placeholder="Describe what you need. Include equipment type, current issues, desired outcomes, feedstock characteristics, and any other relevant context."
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Desired Timeline
                  </label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a' }}>
                    <option value="">— Select timeline —</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="short">Short term (1 month)</option>
                    <option value="medium">Medium term (2-3 months)</option>
                    <option value="long">Long term (3+ months)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Budget Range
                  </label>
                  <select name="budget" value={formData.budget} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #c8bfa8', borderRadius: '4px', background: '#fff', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#1a2e1a' }}>
                    <option value="">— Select budget range —</option>
                    <option value="under-1l">Under ₹1 Lakh</option>
                    <option value="1l-5l">₹1-5 Lakh</option>
                    <option value="5l-10l">₹5-10 Lakh</option>
                    <option value="10l-20l">₹10-20 Lakh</option>
                    <option value="20l-50l">₹20-50 Lakh</option>
                    <option value="above-50l">₹50 Lakh+</option>
                    <option value="flexible">Not fixed/Flexible</option>
                  </select>
                </div>
              </div>
            </fieldset>

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
              {loading ? 'Submitting...' : 'Request Estimate'}
            </button>

            <p style={{ fontSize: '12px', color: '#5a6e58', marginTop: '1rem', textAlign: 'center' }}>
              * Required fields. We'll review your project and send back a detailed estimate.
            </p>
          </form>
        )}
      </section>
    </main>
  )
}
