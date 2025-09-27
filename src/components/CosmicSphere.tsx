'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CosmicSphereMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Create vertex shader for cosmic effect
  const vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;

    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Create fragment shader for cosmic glow effect
  const fragmentShader = `
    uniform float time;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;

    void main() {
      vec3 cosmicBlue = vec3(0.0, 0.0, 0.1);
      vec3 neonCyan = vec3(0.0, 1.0, 1.0);
      vec3 organicGreen = vec3(0.0, 1.0, 0.4);
      vec3 holographicPurple = vec3(0.54, 0.17, 0.89);

      // Create swirling cosmic patterns
      float swirl = sin(vPosition.x * 2.0 + time * 0.5) * cos(vPosition.y * 2.0 + time * 0.3) * sin(vPosition.z * 2.0 + time * 0.7);

      // Add noise-like cosmic dust
      float dust = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time * 1.5) * 0.1;

      // Mix colors based on position and time
      vec3 color = mix(cosmicBlue, neonCyan, swirl * 0.5 + 0.5);
      color = mix(color, organicGreen, dust + 0.3);
      color = mix(color, holographicPurple, sin(time + vPosition.x) * 0.2 + 0.2);

      // Add glow effect
      float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      color += fresnel * neonCyan * 0.5;

      gl_FragColor = vec4(color, 0.8);
    }
  `;

  const uniforms = useMemo(() => ({
    time: { value: 0 }
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </Sphere>
  );
}

interface CosmicSphereProps {
  className?: string;
}

export default function CosmicSphere({ className = '' }: CosmicSphereProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ff88" />
        <CosmicSphereMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
}