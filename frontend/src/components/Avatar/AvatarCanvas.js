import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Avatar from './Avatar';
import TryOn from './TryOn';

const AvatarCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Avatar />
        <TryOn />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default AvatarCanvas;
