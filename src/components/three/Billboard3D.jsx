import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

function BillboardPost({ position = [0, 0, 0] }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.08, 0.1, 3, 8]} />
      <meshStandardMaterial color="#3A3A3A" metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

function BillboardLight({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.3, 0.08, 0.12]} />
      <meshStandardMaterial color="#3A3A3A" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

export function Billboard3D({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + (rotation[1] || 0);
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Billboard board */}
      <RoundedBox args={[4, 2.2, 0.1]} radius={0.05} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#00B5E2" metalness={0.1} roughness={0.4} emissive="#00B5E2" emissiveIntensity={0.25} />
      </RoundedBox>

      {/* Inner panel (cream) */}
      <RoundedBox args={[3.6, 1.8, 0.02]} radius={0.03} position={[0, 1.5, 0.06]}>
        <meshStandardMaterial color="#F7F4EB" metalness={0} roughness={0.8} />
      </RoundedBox>

      {/* Billboard frame */}
      <mesh position={[0, 1.5, 0.04]}>
        <boxGeometry args={[4.1, 2.3, 0.03]} />
        <meshStandardMaterial color="#3A3A3A" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Inner frame overlay to create border effect */}
      <mesh position={[0, 1.5, 0.055]}>
        <boxGeometry args={[3.8, 2.0, 0.01]} />
        <meshStandardMaterial color="#F7F4EB" metalness={0} roughness={0.9} />
      </mesh>

      {/* Text - Company Name */}
      <Text
        position={[0, 1.7, 0.08]}
        fontSize={0.22}
        color="#00B5E2"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        AMRUT ADVERTISING
      </Text>

      {/* Separator line */}
      <mesh position={[0, 1.45, 0.08]}>
        <boxGeometry args={[2.5, 0.01, 0.005]} />
        <meshStandardMaterial color="#3D85A7" />
      </mesh>

      {/* Tagline */}
      <Text
        position={[0, 1.25, 0.08]}
        fontSize={0.09}
        color="#3A3A3A"
        anchorX="center"
        anchorY="middle"
      >
        Complete Advertising & Media Solutions
      </Text>

      {/* Since text */}
      <Text
        position={[0, 1.0, 0.08]}
        fontSize={0.07}
        color="#3D85A7"
        anchorX="center"
        anchorY="middle"
      >
        SINCE 2013
      </Text>

      {/* Support post */}
      <BillboardPost position={[0, -0.6, 0]} />

      {/* Lights on top */}
      <BillboardLight position={[-1.2, 2.75, 0.15]} rotation={[0.3, 0, 0]} />
      <BillboardLight position={[0, 2.75, 0.15]} rotation={[0.3, 0, 0]} />
      <BillboardLight position={[1.2, 2.75, 0.15]} rotation={[0.3, 0, 0]} />

      {/* Spot lights illuminating the billboard */}
      <spotLight
        position={[-1.2, 3.2, 1]}
        angle={0.5}
        penumbra={0.5}
        intensity={1.5}
        color="#ffffff"
        target-position={[0, 1.5, 0]}
      />
      <spotLight
        position={[1.2, 3.2, 1]}
        angle={0.5}
        penumbra={0.5}
        intensity={1.5}
        color="#ffffff"
        target-position={[0, 1.5, 0]}
      />
    </group>
  );
}
