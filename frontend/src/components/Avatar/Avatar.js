import React from 'react';
import { useGLTF } from '@react-three/drei';

const Avatar = () => {
  const { scene } = useGLTF('/models/avatar.glb'); // mets le bon chemin ici

  return <primitive object={scene} position={[0, -1.5, 0]} />;
};

export default Avatar;
