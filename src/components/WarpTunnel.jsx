import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Tunnel() {
    const groupRef = useRef()
    const COUNT = 180

    const { positions, colors } = useMemo(() => {
        const pos = []
        const col = []
        for (let i = 0; i < COUNT; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 1.5 + Math.random() * 3.5
            const z = (Math.random() - 0.5) * 30
            const len = 0.3 + Math.random() * 1.2
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            // Each streak = two points (start + end)
            pos.push(x, y, z - len, x, y, z)

            // Alternate blue/purple/cyan
            const c = i % 3 === 0
                ? new THREE.Color('#3b82f6')
                : i % 3 === 1
                    ? new THREE.Color('#8b5cf6')
                    : new THREE.Color('#06b6d4')

            col.push(c.r, c.g, c.b, 0)         // start: transparent
            col.push(c.r, c.g, c.b, 0.7)       // end: visible
        }
        return {
            positions: new Float32Array(pos),
            colors: new Float32Array(col),
        }
    }, [])

    const geo = useMemo(() => {
        const g = new THREE.BufferGeometry()
        g.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
        g.setAttribute('color', new THREE.BufferAttribute(colors.slice(), 4))
        return g
    }, [positions, colors])

    const posAttr = geo.getAttribute('position')

    useFrame((_, delta) => {
        const speed = 8 * delta
        for (let i = 0; i < COUNT; i++) {
            const base = i * 6
            // Move both points along Z toward camera
            posAttr.array[base + 2] += speed
            posAttr.array[base + 5] += speed

            // Reset if past camera
            if (posAttr.array[base + 5] > 15) {
                const angle = Math.random() * Math.PI * 2
                const radius = 1.5 + Math.random() * 3.5
                const z = -15
                const len = 0.3 + Math.random() * 1.2
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                posAttr.array[base] = x
                posAttr.array[base + 1] = y
                posAttr.array[base + 2] = z
                posAttr.array[base + 3] = x
                posAttr.array[base + 4] = y
                posAttr.array[base + 5] = z + len
            }
        }
        posAttr.needsUpdate = true
    })

    return (
        <lineSegments geometry={geo}>
            <lineBasicMaterial vertexColors transparent />
        </lineSegments>
    )
}

export default function WarpTunnel() {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
        }}>
            <Canvas
                camera={{ position: [0, 0, 3], fov: 80 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Tunnel />
            </Canvas>
        </div>
    )
}