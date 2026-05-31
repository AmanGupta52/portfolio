import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Globe() {
    const meshRef = useRef()
    const wireRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.y = t * 0.12
            meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.1
        }
        if (wireRef.current) {
            wireRef.current.rotation.y = t * 0.08
            wireRef.current.rotation.z = t * 0.04
        }
    })

    return (
        <>
            {/* Main distorted globe */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[1.8, 64, 64]} />
                <MeshDistortMaterial
                    color="#1a1a2e"
                    attach="material"
                    distort={0.25}
                    speed={1.2}
                    roughness={0.1}
                    metalness={0.8}
                    emissive="#1e3a5f"
                    emissiveIntensity={0.3}
                />
            </mesh>

            {/* Wireframe overlay */}
            <mesh ref={wireRef}>
                <sphereGeometry args={[1.9, 24, 24]} />
                <meshBasicMaterial
                    color="#3b82f6"
                    wireframe
                    transparent
                    opacity={0.08}
                />
            </mesh>

            {/* Outer glow ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.3, 0.008, 16, 120]} />
                <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
            </mesh>

            <mesh rotation={[Math.PI / 2.8, 0.4, 0]}>
                <torusGeometry args={[2.5, 0.004, 16, 120]} />
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.25} />
            </mesh>
        </>
    )
}

function FloatingOrbs() {
    const orbs = useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => ({
            position: [
                Math.cos((i / 6) * Math.PI * 2) * 3.5,
                (Math.random() - 0.5) * 2,
                Math.sin((i / 6) * Math.PI * 2) * 3.5,
            ],
            size: Math.random() * 0.08 + 0.04,
            color: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
            speed: Math.random() * 0.5 + 0.3,
            offset: i * 1.0,
        }))
    }, [])

    return (
        <>
            {orbs.map((orb, i) => (
                <OrbMesh key={i} {...orb} />
            ))}
        </>
    )
}

function OrbMesh({ position, size, color, speed, offset }) {
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.4
        ref.current.rotation.x = t * 0.5
    })

    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[size, 12, 12]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                roughness={0}
                metalness={1}
            />
        </mesh>
    )
}

export default function ThreeScene() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 7], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.1} />
                <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
                <pointLight position={[0, 10, -10]} intensity={0.4} color="#06b6d4" />

                <Stars
                    radius={80}
                    depth={50}
                    count={2000}
                    factor={3}
                    saturation={0.2}
                    fade
                    speed={0.5}
                />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                    <Globe />
                    <FloatingOrbs />
                </Float>
            </Canvas>
        </div>
    )
}