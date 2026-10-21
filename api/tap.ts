import { Redis } from '@upstash/redis'

// NFC tags point at /tap?src=<tag> (rewritten here in vercel.json).
// Logs the tap, then 302s to the homepage. Must stay 302: browsers cache 301s,
// so repeat taps from the same phone would never reach this function.

const LOG_LIMIT = 1000

function sanitizeSource(raw: string | null): string {
  const cleaned = (raw ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '')
    .slice(0, 32)
  return cleaned || 'unknown'
}

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
  if (!url || !token) return null
  return new Redis({ url, token })
}

function getCity(request: Request): string | null {
  const city = request.headers.get('x-vercel-ip-city')
  if (!city) return null
  try {
    return decodeURIComponent(city)
  } catch {
    return city
  }
}

export async function GET(request: Request): Promise<Response> {
  const src = sanitizeSource(new URL(request.url).searchParams.get('src'))

  try {
    const redis = getRedis()
    if (!redis) throw new Error('Upstash Redis credentials are not configured')

    const entry = JSON.stringify({ t: new Date().toISOString(), src, city: getCity(request) })
    await redis
      .pipeline()
      .incr('taps:total')
      .hincrby('taps:bySource', src, 1)
      .lpush('taps:log', entry)
      .ltrim('taps:log', 0, LOG_LIMIT - 1)
      .exec()
  } catch (error) {
    console.error('[tap] failed to log tap', error)
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: `/?ref=nfc&src=${encodeURIComponent(src)}`,
      'Cache-Control': 'no-store',
    },
  })
}
