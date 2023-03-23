import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const MailBox = () => {
  const mailBox = useGLTF('./mail_box/scene.gltf');

  return (
    <mesh>
      <pointLight position={[0, 5, 0]} color='white' intensity={1} />
      <pointLight position={[20, 0, 0]} color='white' intensity={1} />
      <hemisphereLight intensity={2} groundColor='white' />

      <primitive object={mailBox.scene} scale={4.5} position={[0, 0.5, 0]} />
    </mesh>
  );
};

const MailBoxCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 200,
      //   position: [-4, 3, 6],
      // }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MailBox />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MailBoxCanvas;
