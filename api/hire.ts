import { Redis } from '@upstash/redis'

// "Hiring?" form endpoint: validates the message, rate-limits per IP, and emails it via Resend.
// Env: RESEND_API_KEY (required), HIRE_TO (inbox), HIRE_FROM (verified sender; defaults to Resend's test sender).

const MAX_PER_HOUR = 5
const LIMITS = { name: 100, contact: 200, company: 100, message: 4000 }

type Field = keyof typeof LIMITS

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
  if (!url || !token) return null
  return new Redis({ url, token })
}

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } })

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return json(503, { error: 'not_configured' })

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return json(400, { error: 'bad_request' })
  }

  // Honeypot: real visitors never see this field.
  if (typeof body.website === 'string' && body.website.trim()) return json(200, { ok: true })

  const fields = {} as Record<Field, string>
  for (const key of Object.keys(LIMITS) as Field[]) {
    const value = typeof body[key] === 'string' ? (body[key] as string).trim() : ''
    if (value.length > LIMITS[key]) return json(400, { error: 'too_long', field: key })
    fields[key] = value
  }
  if (!fields.name || !fields.contact || !fields.message) return json(400, { error: 'missing_fields' })

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  try {
    const redis = getRedis()
    if (redis) {
      const key = `hire:rate:${ip}`
      const count = await redis.incr(key)
      if (count === 1) await redis.expire(key, 3600)
      if (count > MAX_PER_HOUR) return json(429, { error: 'rate_limited' })
    }
  } catch (error) {
    console.error('[hire] rate limit check failed', error)
  }

  const city = request.headers.get('x-vercel-ip-city')
  const header = [
    `Name: ${fields.name}`,
    `Contact: ${fields.contact}`,
    fields.company && `Company: ${fields.company}`,
    city && `Sent from: ${decodeURIComponent(city)}`,
  ].filter(Boolean)
  const text = `${header.join('\n')}\n\n${fields.message}`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.HIRE_FROM ?? 'Website <onboarding@resend.dev>',
      to: [process.env.HIRE_TO ?? 'pablo.coral03@icloud.com'],
      subject: `Hiring inquiry from ${fields.name}${fields.company ? ` (${fields.company})` : ''}`,
      text,
      ...(isEmail(fields.contact) ? { reply_to: fields.contact } : {}),
    }),
  })

  if (!res.ok) {
    console.error('[hire] Resend error', res.status, await res.text())
    return json(502, { error: 'send_failed' })
  }
  return json(200, { ok: true })
}
