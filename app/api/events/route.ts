import { NextRequest, NextResponse } from 'next/server'
import { eventOperations } from '@/lib/data'

export async function GET() {
  try {
    const events = eventOperations.getAll()
    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, date, time, venue, description, category, image, isUpcoming } = await request.json()

    // Validate required fields
    if (!title || !date || !time || !venue || !description || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to data
    const event = eventOperations.add({
      title,
      date,
      time,
      venue,
      description,
      category,
      image,
      isUpcoming: isUpcoming ?? true,
    })

    return NextResponse.json(
      { message: 'Event created successfully', event },
      { status: 201 }
    )
  } catch (error) {
    console.error('Event creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}