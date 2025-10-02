import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  OrbitControls, 
  Stars, 
  Sphere, 
  MeshDistortMaterial,
  Environment,
  ContactShadows,
  PerspectiveCamera,
  useTexture,
  Float,
  Text3D,
  Center,
  MeshTransmissionMaterial,
  Icosahedron,
  Torus,
  Box,
  Sphere as SphereGeometry
} from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import * as THREE from 'three'

// Advanced animated sphere with multiple materials
function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3
      sphereRef.current.scale.setScalar(hovered ? 2.7 : 2.5)
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere 
        ref={sphereRef} 
        args={[1, 128, 128]} 
        scale={2.5}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          transmission={0.3}
          thickness={0.5}
        />
      </Sphere>
    </Float>
  )
}

// Advanced floating geometries with premium materials
function FloatingGeometry() {
  const geometries = useMemo(() => [
    {
      component: Box,
      position: [-4, 2, 0] as [number, number, number],
      rotation: [0, 0, Math.PI / 4] as [number, number, number],
      color: "#06B6D4",
      metalness: 0.8,
      roughness: 0.1,
      transmission: 0.2
    },
    {
      component: Icosahedron,
      position: [4, -2, 0] as [number, number, number],
      rotation: [Math.PI / 4, 0, 0] as [number, number, number],
      color: "#F59E0B",
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.3
    },
    {
      component: Torus,
      position: [0, 3, -2] as [number, number, number],
      rotation: [0, Math.PI / 3, 0] as [number, number, number],
      color: "#EF4444",
      metalness: 0.7,
      roughness: 0.2,
      transmission: 0.4
    }
  ], [])

  return (
    <>
      {geometries.map((geo, index) => (
        <Float key={index} speed={1.5 + index * 0.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh 
            position={geo.position} 
            rotation={geo.rotation}
            scale={[0.8, 0.8, 0.8]}
          >
            <geo.component args={[0.6]} />
            <meshStandardMaterial 
              color={geo.color}
              metalness={geo.metalness}
              roughness={geo.roughness}
              transmission={geo.transmission}
              thickness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

// Particle system for enhanced visual effects
function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const particleCount = 2000
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [particleCount])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.1
      points.current.rotation.x = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Advanced lighting setup
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06B6D4" />
      <pointLight position={[0, 10, 0]} intensity={0.6} color="#F59E0B" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
      />
    </>
  )
}

// Enhanced environment and effects
function SceneEffects() {
  return (
    <>
      <Environment preset="night" />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -2, 0]}
        opacity={0.25}
        width={20}
        height={20}
        blur={1.5}
        far={4.5}
      />
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0.8}
        fade
        speed={1}
      />
    </>
  )
}

// Performance-optimized scene
function SceneOptimization() {
  const { gl } = useThree()
  
  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    gl.antialias = true
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFSoftShadowMap
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 1.2
  }, [gl])

  return null
}

// Responsive camera component
function ResponsiveCamera() {
  const { viewport } = useThree()
  const isMobile = viewport.width < 768
  const isTablet = viewport.width < 1024

  return (
    <PerspectiveCamera
      makeDefault
      position={isMobile ? [0, 0, 6] : isTablet ? [0, 0, 7] : [0, 0, 8]}
      fov={isMobile ? 60 : isTablet ? 50 : 45}
    />
  )
}

// Performance monitoring component
function PerformanceMonitor() {
  const { gl, scene } = useThree()
  const [fps, setFps] = useState(60)
  
  useFrame(() => {
    const currentFps = 1000 / (gl.info.render.frame as number)
    setFps(currentFps)
  })

  // Adjust quality based on performance
  useEffect(() => {
    if (fps < 30) {
      // Reduce quality for better performance
      gl.setPixelRatio(1)
    } else if (fps > 50) {
      // Increase quality for better visuals
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  }, [fps, gl])

  return null
}

export default function Scene3D() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth < 1024)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: !isMobile, 
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance",
          stencil: false,
          depth: true
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = !isMobile
          gl.shadowMap.type = THREE.PCFSoftShadowMap
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = isMobile ? 1.0 : 1.2
        }}
      >
        <ResponsiveCamera />
        <PerformanceMonitor />
        <SceneOptimization />
        <Lighting />
        <SceneEffects />
        
        {isLoaded && (
          <>
            <AnimatedSphere />
            <FloatingGeometry />
            {!isMobile && <ParticleField />}
          </>
        )}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={isMobile ? 0.4 : 0.8}
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN
          }}
        />
      </Canvas>
    </div>
  )
}
