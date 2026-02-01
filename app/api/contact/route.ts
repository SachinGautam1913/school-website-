import { NextRequest, NextResponse } from 'next/server'
import { contactOperations } from '@/lib/data'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to data
    const contact = contactOperations.add({
      name,
      email,
      phone,
      subject,
      message,
    })

    // Send email notification
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'info@kirnajayvidyamandir.edu.in',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { message: 'Message sent successfully', id: contact.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}