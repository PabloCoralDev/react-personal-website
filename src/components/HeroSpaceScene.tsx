import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useTabVisible } from '../hooks/useTabVisible'
import { createGlowTexture, createMoonSurfaceTexture, createBandedTexture } from '../utils/spaceTextures'

function Sun({ reducedMotion }: { reducedMotion: boolean }) {
  const glowTexture = useMemo(() => createGlowTexture(
    'rgba(255, 244, 214, 0.95)',
    'rgba(255, 200, 120, 0.4)',
    'rgba(255, 160, 60, 0)',
  ), [])
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.y += delta * 0.01
    }
  })

  return (
    <group position={[-8, 4.5, -30]}>
      <sprite scale={[13, 13, 1]} renderOrder={-1}>
        <spriteMaterial map={glowTexture} transparent depthWrite={false} opacity={0.95} />
      </sprite>
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[1.6, 28, 28]} />
          <meshBasicMaterial color="#ffdf9e" />
        </mesh>
      </group>
      <pointLight color="#ffe4b0" intensity={20} distance={70} decay={2} />
    </group>
  )
}

function Earth({ reducedMotion }: { reducedMotion: boolean }) {
  const bandTexture = useMemo(() => createBandedTexture([
    '#1c4d7a', '#2f6b3f', '#1c4d7a', '#3a7a4a', '#1c4d7a', '#245f8a',
  ]), [])
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.y += delta * 0.03
    }
  })

  return (
    <group position={[6, 4, -16]}>
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[1.15, 28, 28]} />
          <meshStandardMaterial map={bandTexture} emissive="#0d2a45" emissiveIntensity={0.2} roughness={0.85} />
        </mesh>
      </group>
      <pointLight color="#bcd6ff" intensity={4} distance={20} decay={2} />
    </group>
  )
}

function Venus({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.y += delta * 0.018
    }
  })

  return (
    <group position={[-3, -3.5, -22]}>
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[0.75, 24, 24]} />
          <meshStandardMaterial color="#d8b978" emissive="#a9873f" emissiveIntensity={0.25} roughness={0.9} />
        </mesh>
      </group>
    </group>
  )
}

function Moon({ reducedMotion }: { reducedMotion: boolean }) {
  const glowTexture = useMemo(() => createGlowTexture(
    'rgba(255, 250, 230, 0.85)',
    'rgba(210, 220, 255, 0.35)',
    'rgba(150, 168, 240, 0)',
  ), [])
  const surfaceTexture = useMemo(() => createMoonSurfaceTexture(), [])
  const moonRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (moonRef.current && !reducedMotion) {
      moonRef.current.rotation.y += delta * 0.025
    }
  })

  return (
    <group position={[9, -1.5, -34]}>
      <sprite scale={[9, 9, 1]} renderOrder={-1}>
        <spriteMaterial map={glowTexture} transparent depthWrite={false} opacity={0.9} />
      </sprite>
      <group ref={moonRef}>
        <mesh>
          <sphereGeometry args={[0.85, 28, 28]} />
          <meshStandardMaterial
            map={surfaceTexture}
            emissive="#cfd6f2"
            emissiveIntensity={0.3}
            roughness={0.95}
            metalness={0}
          />
        </mesh>
      </group>
      <pointLight color="#dfe6ff" intensity={8} distance={35} decay={2} />
    </group>
  )
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Sun reducedMotion={reducedMotion} />
      <Earth reducedMotion={reducedMotion} />
      <Venus reducedMotion={reducedMotion} />
      <Moon reducedMotion={reducedMotion} />
    </>
  )
}

export function HeroSpaceScene() {
  const reducedMotion = usePrefersReducedMotion()
  const tabVisible = useTabVisible()

  return (
    <div className="hero-3d-background" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.2, 6], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={tabVisible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Scene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
