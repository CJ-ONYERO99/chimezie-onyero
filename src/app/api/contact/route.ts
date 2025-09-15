import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimitByIp } from '@/lib/ratelimit'
import { sendMail } from '@/lib/email'
import { validateContact } from './validation'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1'
    const limited = await rateLimitByIp(ip)
    if (!limited.ok) {
      return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 })
    }
    const body = await req.json()
    const v = validateContact(body)
    if (!v.ok) {
      return NextResponse.json({ ok: false, error: v.error }, { status: 400 })
    }

    if (process.env.TEST_MODE === 'true') {
      return NextResponse.json({ ok: true })
    }

    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.CONTACT_FROM_EMAIL
    if (!to || !from) {
      return NextResponse.json({ ok: false, error: 'Email not configured' }, { status: 500 })
    }
    await sendMail({ to, from, subject: `Portfolio Contact: ${v.data.name}`, text: `${v.data.message}\n\nFrom: ${v.data.name} <${v.data.email}>` })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
