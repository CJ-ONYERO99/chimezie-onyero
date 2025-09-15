import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { buildCsp, generateNonce } from '@/lib/csp'

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const nonce = generateNonce()
  const csp = buildCsp(nonce)

  res.headers.set('Content-Security-Policy', csp)
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('X-Frame-Options', 'DENY')

  // Expose nonce and pathname to server components
  res.headers.set('x-nonce', nonce)
  res.headers.set('x-pathname', req.nextUrl.pathname)

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}

