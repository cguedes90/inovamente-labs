'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const CUBE_SIZE = 3;
const GAP = 0.08;
const BLOCK_SIZE = 0.45;
const SCATTER_RADIUS = 6;

interface BlockData {
  basePos: THREE.Vector3;
  scatterPos: THREE.Vector3;
  scatterRot: THREE.Euler;
  delay: number;
}

function generateBlocks(): BlockData[] {
  const blocks: BlockData[] = [];
  const half = (CUBE_SIZE - 1) / 2;

  for (let x = 0; x < CUBE_SIZE; x++) {
    for (let y = 0; y < CUBE_SIZE; y++) {
      for (let z = 0; z < CUBE_SIZE; z++) {
        if (
          x === 0 || x === CUBE_SIZE - 1 ||
          y === 0 || y === CUBE_SIZE - 1 ||
          z === 0 || z === CUBE_SIZE - 1
        ) {
          const basePos = new THREE.Vector3(
            (x - half) * (BLOCK_SIZE + GAP),
            (y - half) * (BLOCK_SIZE + GAP),
            (z - half) * (BLOCK_SIZE + GAP)
          );

          const angle = Math.random() * Math.PI * 2;
          const radius = SCATTER_RADIUS + Math.random() * 3;
          const scatterPos = new THREE.Vector3(
            Math.cos(angle) * radius * (0.5 + Math.random()),
            (Math.random() - 0.5) * radius * 1.5,
            Math.sin(angle) * radius * (0.5 + Math.random())
          );

          const scatterRot = new THREE.Euler(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
          );

          const dist = Math.sqrt(x * x + y * y + z * z);
          blocks.push({ basePos, scatterPos, scatterRot, delay: dist * 0.05 });
        }
      }
    }
  }
  return blocks;
}

const CubeBlock = ({
  data,
  assembleProgress,
}: {
  data: BlockData;
  assembleProgress: number;
  globalRotation: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    const delayed = Math.max(0, Math.min(1, (assembleProgress - data.delay) / (1 - data.delay + 0.01)));
    const eased = delayed * delayed * (3 - 2 * delayed);

    meshRef.current.position.lerpVectors(data.scatterPos, data.basePos, eased);

    meshRef.current.rotation.x = data.scatterRot.x * (1 - eased);
    meshRef.current.rotation.y = data.scatterRot.y * (1 - eased);
    meshRef.current.rotation.z = data.scatterRot.z * (1 - eased);

    if (materialRef.current) {
      materialRef.current.opacity = 0.3 + eased * 0.7;
      materialRef.current.emissiveIntensity = eased * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#0aa89c"
        emissive="#0dd3c5"
        emissiveIntensity={0}
        transparent
        opacity={0.4}
        roughness={0.15}
        metalness={0.8}
      />
    </mesh>
  );
};

const CubeAssembly = () => {
  const blocks = useMemo(() => generateBlocks(), []);
  const groupRef = useRef<THREE.Group>(null);
  const [assembleProgress, setAssembleProgress] = useState(0);
  const targetProgress = useRef(0);
  const globalRotation = useRef(0);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    const mouseDist = Math.sqrt(pointer.x * pointer.x + pointer.y * pointer.y);
    const isNear = mouseDist < 1.2;

    targetProgress.current = isNear ? 1 : 0;
    const speed = isNear ? 1.8 : 0.8;
    setAssembleProgress((prev) => {
      const diff = targetProgress.current - prev;
      return prev + diff * delta * speed;
    });

    globalRotation.current += delta * (0.1 + (1 - assembleProgress) * 0.3);

    if (groupRef.current) {
      groupRef.current.rotation.y = globalRotation.current;
      groupRef.current.rotation.x = Math.sin(globalRotation.current * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {blocks.map((block, i) => (
        <CubeBlock
          key={i}
          data={block}
          assembleProgress={assembleProgress}
          globalRotation={0}
        />
      ))}
      <pointLight
        color="#0dd3c5"
        intensity={assembleProgress * 8}
        distance={5}
        decay={2}
      />
    </group>
  );
};

const InteractiveCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-3, -3, 2]} intensity={0.3} color="#0dd3c5" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <CubeAssembly />
        </Float>
      </Canvas>
    </div>
  );
};

export default InteractiveCube;
