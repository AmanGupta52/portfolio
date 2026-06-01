import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Crystal({ position, geometry, color, speed, rotAxis, scale }) {
    const ref = useRef()
    const offset = useMemo(() => Math.random() * Math.PI * 2, [])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (!ref.current) return
        ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.5
        ref.current.rotation[rotAxis] = t * speed * 0.7
        ref.current.rotation.z = Math.sin(t * 0.3 + offset) * 0.2
    })

    return (
        <mesh ref={ref} position={position} scale={scale}>
            {geometry === 'ico' && <icosahedronGeometry args={[1, 0]} />}
            {geometry === 'oct' && <octahedronGeometry args={[1, 0]} />}
            {geometry === 'tetra' && <tetrahedronGeometry args={[1, 0]} />}
            <MeshDistortMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.4}
                distort={0.2}
                speed={2}
                roughness={0.05}
                metalness={0.9}
                transparent
                opacity={0.7}
                wireframe={false}
            />
        </mesh>
    )
}

function CrystalWireframe({ position, geometry, color, speed, scale }) {
    const ref = useRef()
    const offset = useMemo(() => Math.random() * Math.PI * 2, [])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (!ref.current) return
        ref.current.rotation.x = t * speed * 0.5
        ref.current.rotation.y = t * speed * 0.8
        ref.current.position.y = position[1] + Math.sin(t * 0.4 + offset) * 0.3
    })

    return (
        <mesh ref={ref} position={position} scale={scale}>
            {geometry === 'ico' && <icosahedronGeometry args={[1, 0]} />}
            {geometry === 'oct' && <octahedronGeometry args={[1, 0]} />}
            <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
        </mesh>
    )
}

const crystalData = [
    { position: [-6, 2, -3], geometry: 'ico', color: '#3b82f6', speed: 0.4, rotAxis: 'y', scale: 0.7 },
    { position: [6, -1, -4], geometry: 'oct', color: '#8b5cf6', speed: 0.3, rotAxis: 'x', scale: 0.9 },
    { position: [-4, -3, -2], geometry: 'tetra', color: '#06b6d4', speed: 0.5, rotAxis: 'z', scale: 0.5 },
    { position: [5, 3, -5], geometry: 'ico', color: '#8b5cf6', speed: 0.25, rotAxis: 'y', scale: 1.1 },
    { position: [0, 4, -6], geometry: 'oct', color: '#3b82f6', speed: 0.35, rotAxis: 'x', scale: 0.6 },
    { position: [-7, 0, -5], geometry: 'ico', color: '#06b6d4', speed: 0.45, rotAxis: 'z', scale: 0.8 },
]

const wireData = [
    { position: [3, -4, -3], geometry: 'ico', color: '#3b82f6', speed: 0.3, scale: 1.4 },
    { position: [-3, 5, -4], geometry: 'oct', color: '#8b5cf6', speed: 0.2, scale: 1.8 },
]

export default function FloatingCrystals() {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.7,
        }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.05} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
                <pointLight position={[-5, -5, -5]} intensity={0.8} color="#8b5cf6" />

                {crystalData.map((c, i) => <Crystal key={i} {...c} />)}
                {wireData.map((c, i) => <CrystalWireframe key={i} {...c} />)}
            </Canvas>
        </div>
    )
}