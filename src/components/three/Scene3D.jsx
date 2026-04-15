import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useEffect } from 'react';
import * as THREE from 'three';

function MouseCamera({ intensity = 0.5 }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const basePos = useRef(null);

  useEffect(() => {
    basePos.current = camera.position.clone();
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [camera]);

  useFrame(() => {
    if (!basePos.current) return;
    const targetX = basePos.current.x + mouse.current.x * intensity;
    const targetY = basePos.current.y + mouse.current.y * intensity * 0.5;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function Scene3D({ children, camera, className = '', style = {}, mouseIntensity = 0.5 }) {
  return (
    <div className={`absolute inset-0 ${className}`} style={style}>
      <Canvas
        camera={camera || { position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <MouseCamera intensity={mouseIntensity} />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#3D85A7" />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
