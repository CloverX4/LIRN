'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Spec {
  label: string
  value: string
}

interface InquiryModalProps {
  equipment?: string
  category?: string
  specs?: Spec[]
  children: React.ReactNode
}

export default function InquiryModal({ equipment, category, specs, children }: InquiryModalProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '1',
    specs: specs?.map((s) => ({ label: s.label, value: s.value })) || [],
    customRequirements: '',
    honeypot: '',
  })

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset form when reopened
  const handleOpen = () => {
    setSubmitted(false)
    setSending(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      quantity: '1',
      specs: specs?.map((s) => ({ label: s.label, value: s.value })) || [],
      customRequirements: '',
      honeypot: '',
    })
    setCustomSpecs({})
    setOpen(true)
  }

  // Track which spec fields are in "other/custom" mode
  const [customSpecs, setCustomSpecs] = useState<Record<number, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSpecChange = (idx: number, value: string) => {
    setFormData((prev) => {
      const newSpecs = [...prev.specs]
      newSpecs[idx] = { ...newSpecs[idx], value }
      return { ...prev, specs: newSpecs }
    })
  }

  const handleSpecSelect = (idx: number, value: string) => {
    if (value === '__other__') {
      setCustomSpecs((prev) => ({ ...prev, [idx]: true }))
      handleSpecChange(idx, '')
    } else {
      setCustomSpecs((prev) => ({ ...prev, [idx]: false }))
      handleSpecChange(idx, value)
    }
  }

  // Detect if a spec value has multiple options (comma-separated, 3+ chars per option)
  const formatOption = (s: string) =>
    s.trim().replace(/\b\w/g, (c) => c.toUpperCase())

  const getSpecOptions = (value: string): string[] | null => {
    const parts = value.split(',').map((s) => s.trim()).filter((s) => s.length > 0)
    return parts.length >= 2 ? parts.map(formatOption) : null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honeypot) { setSubmitted(true); return }
    setSending(true)

    const equipmentName = equipment || ''
    const categoryName = category || ''
    const specLines = formData.specs.map((s) => `  ${s.label}: ${s.value}`).join('\n')
    const subject = encodeURIComponent(equipmentName ? `Equipment Inquiry: ${equipmentName}` : 'New Inquiry from Website')
    const bodyParts = [`Name: ${formData.name}`, `Email: ${formData.email}`, `Phone: ${formData.phone}`, `Company: ${formData.company}`]
    if (equipmentName) {
      bodyParts.push('', `Equipment: ${equipmentName}`)
      if (categoryName) bodyParts.push(`Category: ${categoryName}`)
      bodyParts.push(`Quantity: ${formData.quantity}`)
      if (specLines) bodyParts.push('', 'Specifications:', specLines)
    }
    bodyParts.push('', `${equipment ? 'Additional Requirements' : 'Requirement'}:`, formData.customRequirements)
    const body = encodeURIComponent(bodyParts.join('\n'))

    window.location.href = `mailto:orders@lirn.co.in?subject=${subject}&body=${body}`
    setTimeout(() => { setSubmitted(true); setSending(false) }, 1000)
  }

  const labelStyle = {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '10px',
    color: '#5a6e58',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: '0.4rem',
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #c8bfa8',
    borderRadius: '4px',
    background: '#fff',
    fontSize: '13px',
    fontFamily: 'Inter, sans-serif',
    color: '#1a2e1a',
  }

  return (
    <>
      {/* Trigger — render whatever children are passed */}
      <div onClick={handleOpen} style={{ cursor: 'pointer' }}>
        {children}
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(13, 31, 20, 0.6)',
            backdropFilter: 'blur(2px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1.5rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#f7f2ea',
              borderRadius: '6px',
              border: '1px solid #c8bfa8',
              width: '100%',
              maxWidth: '560px',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '14px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                color: '#5a6e58',
                cursor: 'pointer',
                lineHeight: 1,
                padding: '4px',
                zIndex: 1,
              }}
              aria-label="Close"
            >
              ×
            </button>

            {/* Header */}
            <div style={{ padding: '1.75rem 1.75rem 0' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#5a6e58', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {equipment ? 'Equipment Inquiry' : 'Get in Touch'}
              </div>
              {equipment ? (
                <>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1a2e1a', marginBottom: '0.25rem' }}>
                    {equipment}
                  </div>
                  {category && (
                    <div style={{ fontSize: '12px', color: '#5a6e58' }}>{category}</div>
                  )}
                </>
              ) : (
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#1a2e1a', marginBottom: '0.25rem' }}>
                  Tell us what you need
                </div>
              )}
            </div>

            {/* "Not sure?" banner */}
            <div style={{ margin: '1.25rem 1.75rem 0', background: '#1a3325', padding: '1rem 1.25rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <p style={{ fontSize: '12px', color: '#f7f2ea', lineHeight: 1.6, margin: 0, flex: 1, minWidth: '180px' }}>
                <strong style={{ color: '#c4a96b' }}>Unclear on dimensions or specs?</strong>{' '}
                Tell us your requirement and we&apos;ll call you back with a recommendation.
              </p>
              <Link
                href="/estimate"
                onClick={() => setOpen(false)}
                className="cta-btn-dark"
                style={{
                  background: '#f7f2ea',
                  color: '#1a3325',
                  padding: '8px 14px',
                  borderRadius: '3px',
                  fontSize: '10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Request a Callback
              </Link>
            </div>

            {/* Form body */}
            <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#1a2e1a', marginBottom: '0.75rem' }}>
                    Inquiry Sent
                  </div>
                  <p style={{ fontSize: '13px', color: '#5a6e58', lineHeight: 1.7 }}>
                    Your email client should have opened with the details. If not, email us at{' '}
                    <a href="mailto:orders@lirn.co.in" style={{ color: '#c4a96b', fontWeight: 500 }}>orders@lirn.co.in</a>
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    style={{
                      marginTop: '1.25rem',
                      background: '#1a3325',
                      color: '#f7f2ea',
                      padding: '10px 24px',
                      borderRadius: '4px',
                      border: 'none',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Full name" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label style={labelStyle}>Company / Plant</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle} placeholder="Your organization" />
                  </div>

                  {equipment && (
                    <div>
                      <label style={labelStyle}>Quantity</label>
                      <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} style={inputStyle} />
                    </div>
                  )}

                  {/* Prefilled specs — dropdown for multi-option, text for single-value */}
                  {formData.specs.length > 0 && (
                    <div style={{ borderTop: '1px solid #c8bfa8', paddingTop: '1rem' }}>
                      <div style={{ ...labelStyle, marginBottom: '0.75rem' }}>Specifications</div>
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {formData.specs.map((spec, idx) => {
                          const originalSpec = specs?.[idx]
                          const options = originalSpec ? getSpecOptions(originalSpec.value) : null
                          const isCustom = customSpecs[idx]

                          return (
                            <div key={idx}>
                              <div style={{ fontSize: '10px', color: '#5a6e58', fontFamily: 'JetBrains Mono, monospace', marginBottom: '3px' }}>{spec.label}</div>
                              {options && !isCustom ? (
                                <select
                                  value={options.includes(spec.value) ? spec.value : '__other__'}
                                  onChange={(e) => handleSpecSelect(idx, e.target.value)}
                                  style={inputStyle}
                                >
                                  {options.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                  ))}
                                  <option value="__other__">Other (specify)</option>
                                </select>
                              ) : isCustom ? (
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                  <input
                                    type="text"
                                    value={spec.value}
                                    onChange={(e) => handleSpecChange(idx, e.target.value)}
                                    style={{ ...inputStyle, flex: 1 }}
                                    placeholder="Enter custom value"
                                    autoFocus
                                  />
                                  {options && (
                                    <button
                                      type="button"
                                      onClick={() => { setCustomSpecs((prev) => ({ ...prev, [idx]: false })); handleSpecChange(idx, options[0]) }}
                                      style={{ background: 'none', border: '1px solid #c8bfa8', borderRadius: '4px', padding: '0 10px', fontSize: '11px', color: '#5a6e58', cursor: 'pointer', whiteSpace: 'nowrap' }}
                                    >
                                      Back
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <input
                                  type="text"
                                  value={spec.value}
                                  onChange={(e) => handleSpecChange(idx, e.target.value)}
                                  style={inputStyle}
                                />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div>
                    <label style={labelStyle}>{equipment ? 'Additional Requirements' : 'What do you need? *'}</label>
                    <textarea
                      name="customRequirements"
                      value={formData.customRequirements}
                      onChange={handleChange}
                      rows={equipment ? 3 : 5}
                      required={!equipment}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder={equipment ? 'Custom dimensions, materials, operating conditions...' : 'Describe your requirement — equipment, process challenge, or consultation need...'}
                    />
                  </div>

                  <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} />

                  <button
                    type="submit"
                    disabled={sending}
                    className="cta-btn"
                    style={{
                      background: '#c4a96b',
                      color: '#1a1a1a',
                      padding: '13px',
                      borderRadius: '4px',
                      border: 'none',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: sending ? 'not-allowed' : 'pointer',
                      opacity: sending ? 0.6 : 1,
                      width: '100%',
                    }}
                  >
                    {sending ? 'Opening email...' : 'Send Inquiry'}
                  </button>

                  <p style={{ fontSize: '11px', color: '#5a6e58', textAlign: 'center', lineHeight: 1.5 }}>
                    Opens your email client pre-filled. Sent to orders@lirn.co.in
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
