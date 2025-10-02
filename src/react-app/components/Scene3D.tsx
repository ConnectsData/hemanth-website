import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)
  
  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  )
}

function FloatingGeometry() {
  return (
    <>
      <mesh position={[-4, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#06B6D4" metalness={0.7} roughness={0.2} />
      </mesh>
      
      <mesh position={[4, -2, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <octahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.1} />
      </mesh>
      
      <mesh position={[0, 3, -2]} rotation={[0, Math.PI / 3, 0]}>
        <tetrahedronGeometry args={[0.7]} />
        <meshStandardMaterial color="#EF4444" metalness={0.6} roughness={0.3} />
      </mesh>
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.5} />
        
        <AnimatedSphere />
        <FloatingGeometry />
        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0.5} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
