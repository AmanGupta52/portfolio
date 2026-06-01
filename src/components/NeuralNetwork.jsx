import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralMesh() {
    const groupRef = useRef()
    const linesRef = useRef()

    // Generate nodes in layers
    const nodes = useMemo(() => {
        const layers = [3, 5, 5, 4, 3]
        const pts = []
        layers.forEach((count, li) => {
            for (let i = 0; i < count; i++) {
                pts.push(new THREE.Vector3(
                    (li - 2) * 2.2,
                    (i - (count - 1) / 2) * 1.4,
                    (Math.random() - 0.5) * 0.5
                ))
            }
        })
        return pts
    }, [])

    // Build edges between adjacent layers
    const edges = useMemo(() => {
        const layers = [3, 5, 5, 4, 3]
        const edgeList = []
        let offset = 0
        for (let l = 0; l < layers.length - 1; l++) {
            for (let a = 0; a < layers[l]; a++) {
                for (let b = 0; b < layers[l + 1]; b++) {
                    edgeList.push([offset + a, offset + layers[l] + b])
                }
            }
            offset += layers[l]
        }
        return edgeList
    }, [])

    // Build line segments geometry
    const lineGeometry = useMemo(() => {
        const positions = []
        edges.forEach(([a, b]) => {
            positions.push(nodes[a].x, nodes[a].y, nodes[a].z)
            positions.push(nodes[b].x, nodes[b].y, nodes[b].z)
        })
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
        return geo
    }, [nodes, edges])

    const pulseRefs = useRef(nodes.map(() => ({ current: null })))

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.3
            groupRef.current.rotation.x = Math.sin(t * 0.07) * 0.12
        }
        pulseRefs.current.forEach((ref, i) => {
            if (ref.current) {
                const s = 1 + 0.3 * Math.sin(t * 1.5 + i * 0.8)
                ref.current.scale.setScalar(s)
            }
        })
    })

    return (
        <group ref={groupRef}>
            {/* Edges */}
            <lineSegments geometry={lineGeometry}>
                <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
            </lineSegments>

            {/* Nodes */}
            {nodes.map((pos, i) => (
                <mesh
                    key={i}
                    ref={el => pulseRefs.current[i] = { current: el }}
                    position={[pos.x, pos.y, pos.z]}
                >
                    <sphereGeometry args={[0.08, 8, 8]} />
                    <meshStandardMaterial
                        color={i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'}
                        emissive={i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'}
                        emissiveIntensity={1.5}
                        roughness={0}
                        metalness={1}
                    />
                </mesh>
            ))}
        </group>
    )
}

export default function NeuralNetwork() {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.55,
        }}>
            <Canvas
                camera={{ position: [0, 0, 7], fov: 55 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.1} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
                <NeuralMesh />
            </Canvas>
        </div>
    )
}