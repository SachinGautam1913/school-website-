import { NextRequest, NextResponse } from 'next/server'
import { facultyOperations } from '@/lib/data'

export async function GET() {
  try {
    const faculty = facultyOperations.getAll()
    return NextResponse.json(faculty)
  } catch (error) {
    console.error('Error fetching faculty:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, role, department, qualification, experience, email, phone, image, bio } = await request.json()

    // Validate required fields
    if (!name || !role || !department || !qualification || !experience) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to data
    const faculty = facultyOperations.add({
      name,
      role,
      department,
      qualification,
      experience,
      email,
      phone,
      image,
      bio,
    })

    return NextResponse.json(
      { message: 'Faculty member added successfully', faculty },
      { status: 201 }
    )
  } catch (error) {
    console.error('Faculty creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}