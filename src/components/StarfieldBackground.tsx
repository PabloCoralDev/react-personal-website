import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useTabVisible } from '../hooks/useTabVisible'

export function StarfieldBackground() {
  const reducedMotion = usePrefersReducedMotion()
  const tabVisible = useTabVisible()

  return (
    <div className="starfield-background" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={tabVisible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Stars radius={110} depth={60} count={7000} factor={2.5} fade speed={reducedMotion ? 0 : 0.4} />
      </Canvas>
    </div>
  )
}
