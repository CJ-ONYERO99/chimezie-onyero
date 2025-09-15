import { NextResponse } from 'next/server'
import { getAllProjects } from '@/lib/projects'

export const runtime = 'nodejs'

export async function GET() {
  const items = await getAllProjects()
  return NextResponse.json(items, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
}
