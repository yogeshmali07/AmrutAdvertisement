import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export function Scene3D({ children, camera, className = '', style = {} }) {
  return (
    <div className={`absolute inset-0 ${className}`} style={style}>
      <Canvas
        camera={camera || { position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#fbbf24" />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
