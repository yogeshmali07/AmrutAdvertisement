import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

// Global mouse NDC shared across all Billboard3D instances
const globalMouse = { x: 0, y: 0 };
let listenerAttached = false;
function ensureMouseListener() {
  if (listenerAttached) return;
  listenerAttached = true;
  window.addEventListener('mousemove', (e) => {
    globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });
}

function SupportPole({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.06, 0.08, 3.2, 12]} />
        <meshStandardMaterial color="#64748B" metalness={0.8} roughness={0.15} />
      </mesh>
      <mesh position={[0, -1.6, 0]}>
        <cylinderGeometry args={[0.2, 0.22, 0.06, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function Billboard3D({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  label = 'AMRUT ADVERTISING',
  tagline = 'Complete Advertising & Media Solutions',
  followMouse = true,
}) {
  const group = useRef();
  const CY = 1.8;

  useEffect(() => {
    if (followMouse) ensureMouseListener();
  }, [followMouse]);

  useFrame((state) => {
    if (!group.current) return;

    // Floating animation
    group.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;

    if (followMouse) {
      const cam = state.camera;
      const mx = globalMouse.x;
      const my = globalMouse.y;

      // SUNFLOWER: base angle faces camera, cursor adds extra rotation
      const baseY = Math.atan2(
        cam.position.x - position[0],
        cam.position.z - position[2]
      );
      const baseX = -Math.atan2(
        cam.position.y - (position[1] + CY),
        cam.position.z - position[2]
      ) * 0.35;

      const targetY = baseY + mx * 0.55;
      const targetX = baseX - my * 0.2;

      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.12
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.12
      );
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>

      {/* ── OUTER STEEL FRAME ── */}
      <RoundedBox args={[5.2, 3.1, 0.22]} radius={0.06} position={[0, CY, 0]}>
        <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      {/* Inner bevel */}
      <RoundedBox args={[5.0, 2.9, 0.16]} radius={0.04} position={[0, CY, 0.03]}>
        <meshStandardMaterial color="#1E293B" metalness={0.85} roughness={0.12} />
      </RoundedBox>

      {/* ── SCREEN — deep navy ── */}
      <mesh position={[0, CY, 0.11]}>
        <planeGeometry args={[4.7, 2.65]} />
        <meshStandardMaterial color="#060E1C" emissive="#091828" emissiveIntensity={0.6} />
      </mesh>

      {/* ── TOP BRAND BAR ── */}
      <mesh position={[0, CY + 1.12, 0.115]}>
        <planeGeometry args={[4.7, 0.42]} />
        <meshStandardMaterial color="#00B5E2" emissive="#00B5E2" emissiveIntensity={0.85} />
      </mesh>
      <Text
        position={[0, CY + 1.12, 0.13]}
        fontSize={0.09}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.18}
      >
        AMRUT ADVERTISING  ·  EST. 2013  ·  WASHIM
      </Text>

      {/* ── BOTTOM INFO BAR ── */}
      <mesh position={[0, CY - 1.12, 0.115]}>
        <planeGeometry args={[4.7, 0.42]} />
        <meshStandardMaterial color="#080F1E" emissive="#060C18" emissiveIntensity={0.5} />
      </mesh>
      <Text
        position={[-0.6, CY - 1.12, 0.13]}
        fontSize={0.088}
        color="#38BDF8"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
      >
        CALL FOR BEST RATES
      </Text>
      <Text
        position={[1.9, CY - 1.12, 0.13]}
        fontSize={0.088}
        color="#64748B"
        anchorX="center"
        anchorY="middle"
      >
        Since 2013
      </Text>

      {/* ── LOGO BADGE ── */}
      <mesh position={[-1.65, CY + 0.3, 0.12]}>
        <circleGeometry args={[0.38, 48]} />
        <meshStandardMaterial color="#0284C7" emissive="#00B5E2" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[-1.65, CY + 0.3, 0.119]}>
        <ringGeometry args={[0.38, 0.44, 48]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.35} />
      </mesh>
      <Text
        position={[-1.65, CY + 0.3, 0.135]}
        fontSize={0.21}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.04}
      >
        AA
      </Text>

      {/* ── MAIN HEADLINE ── */}
      <Text
        position={[0.28, CY + 0.3, 0.12]}
        fontSize={0.29}
        color="#F1F5F9"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.09}
        maxWidth={3.2}
      >
        {label}
      </Text>

      {/* ── GLOWING DIVIDER ── */}
      <mesh position={[0, CY - 0.1, 0.12]}>
        <planeGeometry args={[3.8, 0.007]} />
        <meshStandardMaterial color="#00B5E2" emissive="#00B5E2" emissiveIntensity={1.0} />
      </mesh>

      {/* ── TAGLINE ── */}
      <Text
        position={[0, CY - 0.42, 0.12]}
        fontSize={0.112}
        color="#7DD3FC"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.04}
        maxWidth={4.2}
      >
        {tagline}
      </Text>

      {/* ── LED EDGE STRIPS ── */}
      <mesh position={[0, CY + 1.555, 0.075]}>
        <boxGeometry args={[5.22, 0.028, 0.06]} />
        <meshStandardMaterial color="#00B5E2" emissive="#00B5E2" emissiveIntensity={1.0} />
      </mesh>
      <mesh position={[0, CY - 1.555, 0.075]}>
        <boxGeometry args={[5.22, 0.028, 0.06]} />
        <meshStandardMaterial color="#0284C7" emissive="#0284C7" emissiveIntensity={0.9} />
      </mesh>
      <mesh position={[-2.615, CY, 0.075]}>
        <boxGeometry args={[0.028, 3.11, 0.06]} />
        <meshStandardMaterial color="#3D85A7" emissive="#3D85A7" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[2.615, CY, 0.075]}>
        <boxGeometry args={[0.028, 3.11, 0.06]} />
        <meshStandardMaterial color="#3D85A7" emissive="#3D85A7" emissiveIntensity={0.8} />
      </mesh>

      {/* ── CORNER BOLTS ── */}
      {[[-2.44, CY + 1.37], [2.44, CY + 1.37],
        [-2.44, CY - 1.37], [2.44, CY - 1.37]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.04, 12]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.95} roughness={0.05} />
        </mesh>
      ))}

      {/* ── BILLBOARD GLOW LIGHT ── */}
      <pointLight position={[0, CY, 2.5]} color="#00B5E2" intensity={0.6} distance={7} decay={2} />

      {/* ── TWO-LEG SUPPORT STRUCTURE ── */}
      {/* Left pole */}
      <mesh position={[-1.2, CY - 2.8, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 3.6, 12]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Right pole */}
      <mesh position={[1.2, CY - 2.8, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 3.6, 12]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Cross brace */}
      <mesh position={[0, CY - 3.7, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 2.6, 8]} />
        <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Base plates */}
      {[-1.2, 1.2].map((x, i) => (
        <mesh key={i} position={[x, CY - 4.62, 0]}>
          <cylinderGeometry args={[0.22, 0.27, 0.08, 16]} />
          <meshStandardMaterial color="#1E293B" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
