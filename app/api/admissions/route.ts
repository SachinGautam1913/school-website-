import { NextRequest, NextResponse } from 'next/server'
import { admissionOperations } from '@/lib/data'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const {
      studentName,
      parentName,
      email,
      phone,
      classApplying,
      dateOfBirth,
      address,
      previousSchool,
    } = await request.json()

    // Validate required fields
    if (!studentName || !parentName || !email || !phone || !classApplying || !dateOfBirth || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to data
    const admission = admissionOperations.add({
      studentName,
      parentName,
      email,
      phone,
      classApplying,
      dateOfBirth,
      address,
      previousSchool,
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
        to: 'admissions@kirnajayvidyamandir.edu.in',
        subject: `New Admission Application: ${studentName}`,
        html: `
          <h2>New Admission Application</h2>
          <p><strong>Student Name:</strong> ${studentName}</p>
          <p><strong>Parent Name:</strong> ${parentName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Class Applying:</strong> ${classApplying}</p>
          <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Previous School:</strong> ${previousSchool || 'Not provided'}</p>
        `,
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
    }

    return NextResponse.json(
      { message: 'Application submitted successfully', id: admission.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Admission form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const admissions = admissionOperations.getAll()
    return NextResponse.json(admissions)
  } catch (error) {
    console.error('Error fetching admissions:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}