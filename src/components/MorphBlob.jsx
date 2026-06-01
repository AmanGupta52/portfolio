import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei'

function Blob() {
    const meshRef = useRef()
    const innerRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.12
            meshRef.current.rotation.y = t * 0.18
            meshRef.current.rotation.z = Math.sin(t * 0.08) * 0.3
        }
        if (innerRef.current) {
            innerRef.current.rotation.x = -t * 0.08
            innerRef.current.rotation.y = -t * 0.12
        }
    })

    return (
        <>
            {/* Outer blob */}
            <mesh ref={meshRef}>
                <sphereGeometry args={[2, 64, 64]} />
                <MeshDistortMaterial
                    distort={0.55}
                    speed={2}
                    roughness={0}
                    metalness={0.1}
                    transparent
                    opacity={0.12}
                >
                    <GradientTexture
                        stops={[0, 0.4, 1]}
                        colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
                        size={512}
                    />
                </MeshDistortMaterial>
            </mesh>

            {/* Inner solid blob */}
            <mesh ref={innerRef} scale={0.65}>
                <sphereGeometry args={[2, 48, 48]} />
                <MeshDistortMaterial
                    distort={0.4}
                    speed={3}
                    color="#8b5cf6"
                    emissive="#6d28d9"
                    emissiveIntensity={0.5}
                    roughness={0}
                    metalness={0.8}
                    transparent
                    opacity={0.18}
                />
            </mesh>

            {/* Wireframe shell */}
            <mesh scale={1.08}>
                <sphereGeometry args={[2, 20, 20]} />
                <meshBasicMaterial
                    color="#3b82f6"
                    wireframe
                    transparent
                    opacity={0.04}
                />
            </mesh>
        </>
    )
}

export default function MorphBlob() {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.9,
        }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.1} />
                <pointLight position={[4, 4, 4]} intensity={1.5} color="#3b82f6" />
                <pointLight position={[-4, -4, -4]} intensity={1} color="#8b5cf6" />
                <Blob />
            </Canvas>
        </div>
    )
}