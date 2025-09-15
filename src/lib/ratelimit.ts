const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

type Entry = { count: number; expiresAt: number }
const store = new Map<string, Entry>()

async function upstashLimit(ip: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  // Use a simple sliding window counter
  const key = `rl:${ip}:${Math.floor(Date.now() / WINDOW_MS)}`
  const resp = await fetch(`${url}/incr/${key}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!resp.ok) return { ok: true }
  const count = await resp.json()
  if (count === 1) {
    await fetch(`${url}/pexpire/${key}/${WINDOW_MS}`, { headers: { Authorization: `Bearer ${token}` } })
  }
  return { ok: count <= MAX_PER_WINDOW }
}

export async function rateLimitByIp(ip: string) {
  const external = await upstashLimit(ip)
  if (external) return external
  const now = Date.now()
  const e = store.get(ip)
  if (!e || e.expiresAt < now) {
    store.set(ip, { count: 1, expiresAt: now + WINDOW_MS })
    return { ok: true }
  }
  if (e.count >= MAX_PER_WINDOW) return { ok: false }
  e.count += 1
  return { ok: true }
}
