import { NextRequest, NextResponse } from 'next/server'

// Rate limiting - simple in-memory store
const requestCounts = new Map<string, { count: number; reset: number }>()

function rateLimit(ip: string, limit: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.reset) {
    requestCounts.set(ip, { count: 1, reset: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    // Parse body
    const body = await request.json()
    const { name, email, phone, company, inquiry } = body

    // Validate
    if (!name || !email || !inquiry) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Sanitize inputs
    const sanitize = (input: string): string => {
      return input.replace(/[<>]/g, '').slice(0, 500)
    }

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ''),
      company: sanitize(company || ''),
      inquiry: sanitize(inquiry),
    }

    // Send email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'noreply@lirn.co.in',
        to: process.env.LIRN_NOTIFY_EMAIL || 'info@lirn.co.in',
        subject: `New Contact Form Submission from ${sanitizedData.name}`,
        html: `
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone || '(not provided)'}</p>
          <p><strong>Company:</strong> ${sanitizedData.company || '(not provided)'}</p>
          <h3>Message:</h3>
          <p>${sanitizedData.inquiry.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This is an automated message from the LIRN website contact form.</em></p>
        `,
        reply_to: sanitizedData.email,
      }),
    })

    if (!emailResponse.ok) {
      console.error('Resend API error:', await emailResponse.text())
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
