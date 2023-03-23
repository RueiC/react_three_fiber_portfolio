import React, { Suspense } from 'react';
import CanvasLoader from '../Loader';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const ShapesCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />

        <OrbitControls enableZoom={false} />

        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color='#f2cd5d'
            attach='material'
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
};

export default ShapesCanvas;
