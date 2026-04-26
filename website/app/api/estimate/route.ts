import { NextRequest, NextResponse } from 'next/server'

// Rate limiting
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
    // Rate limit
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    // Parse
    const body = await request.json()
    const { name, email, phone, company, projectType, description, timeline, budget } = body

    // Validate
    if (!name || !email || !company || !projectType || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Sanitize
    const sanitize = (input: string): string => {
      return input.replace(/[<>]/g, '').slice(0, 1000)
    }

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ''),
      company: sanitize(company),
      projectType: sanitize(projectType),
      description: sanitize(description),
      timeline: sanitize(timeline || ''),
      budget: sanitize(budget || ''),
    }

    // Send email
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
        subject: `Estimate Request: ${sanitizedData.projectType} - ${sanitizedData.name}`,
        html: `
          <h2>New Estimate Request</h2>
          <h3>Requestor Details</h3>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone || '(not provided)'}</p>
          <p><strong>Company:</strong> ${sanitizedData.company}</p>
          
          <h3>Project Information</h3>
          <p><strong>Project Type:</strong> ${sanitizedData.projectType}</p>
          <p><strong>Timeline:</strong> ${sanitizedData.timeline || '(not specified)'}</p>
          <p><strong>Budget Range:</strong> ${sanitizedData.budget || '(not specified)'}</p>
          
          <h3>Project Description</h3>
          <p>${sanitizedData.description.replace(/\n/g, '<br>')}</p>
          
          <hr>
          <p><em>This is an automated message from the LIRN website estimate request form.</em></p>
        `,
        reply_to: sanitizedData.email,
      }),
    })

    if (!emailResponse.ok) {
      console.error('Resend API error:', await emailResponse.text())
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Estimate request submitted successfully' })
  } catch (error) {
    console.error('Estimate API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
