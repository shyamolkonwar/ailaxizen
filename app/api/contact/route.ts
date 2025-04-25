import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Initialize Supabase client with service role key
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name,
            email,
            subject,
            message,
            status: 'new',
            created_at: new Date().toISOString(),
          },
        ])
        .select()

      if (error) {
        console.error('Error inserting contact message:', error)
        return NextResponse.json(
          { error: 'Failed to save message' },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { message: 'Message sent successfully', data },
        { status: 200 }
      )
    } catch (error) {
      console.error('Error processing contact form:', error)
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Request error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
} 