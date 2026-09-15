import { CanvasTexture } from 'three'

export function createGlowTexture(inner: string, mid: string, outer: string): CanvasTexture {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, inner)
  gradient.addColorStop(0.35, mid)
  gradient.addColorStop(1, outer)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  const texture = new CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function createMoonSurfaceTexture(): CanvasTexture {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#e9e6df'
  ctx.fillRect(0, 0, size, size)

  const shading = ctx.createRadialGradient(size * 0.35, size * 0.35, size * 0.05, size * 0.5, size * 0.5, size * 0.72)
  shading.addColorStop(0, 'rgba(255,255,255,0.18)')
  shading.addColorStop(1, 'rgba(140,140,155,0.3)')
  ctx.fillStyle = shading
  ctx.fillRect(0, 0, size, size)

  let seed = 42
  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  for (let i = 0; i < 26; i++) {
    const x = rand() * size
    const y = rand() * size
    const r = 3 + rand() * 12
    const shade = 0.05 + rand() * 0.15
    ctx.beginPath()
    ctx.fillStyle = `rgba(95, 92, 100, ${shade})`
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.strokeStyle = `rgba(255,255,255,${shade * 0.5})`
    ctx.lineWidth = Math.max(1, r * 0.12)
    ctx.arc(x - r * 0.15, y - r * 0.15, r * 0.88, 0, Math.PI * 2)
    ctx.stroke()
  }

  const texture = new CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function createBandedTexture(bands: string[]): CanvasTexture {
  const width = 8
  const height = 128
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!
  const bandHeight = height / bands.length
  bands.forEach((color, i) => {
    ctx.fillStyle = color
    ctx.fillRect(0, i * bandHeight, width, bandHeight + 1)
  })
  const texture = new CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function createRingTexture(base: string): CanvasTexture {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = 1
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createLinearGradient(0, 0, size, 0)
  gradient.addColorStop(0, 'rgba(0,0,0,0)')
  gradient.addColorStop(0.15, `${base}88`)
  gradient.addColorStop(0.35, `${base}dd`)
  gradient.addColorStop(0.5, `${base}55`)
  gradient.addColorStop(0.7, `${base}cc`)
  gradient.addColorStop(0.9, `${base}66`)
  gradient.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, 1)
  const texture = new CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export function createAsteroidTexture(): CanvasTexture {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#5a5450'
  ctx.fillRect(0, 0, size, size)

  let seed = 7
  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  for (let i = 0; i < 14; i++) {
    const x = rand() * size
    const y = rand() * size
    const r = 2 + rand() * 6
    const shade = 0.1 + rand() * 0.2
    ctx.beginPath()
    ctx.fillStyle = `rgba(20, 18, 16, ${shade})`
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  const texture = new CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}
