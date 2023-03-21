import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const MailBox = ({ isMobile }) => {
  const mailBox = useGLTF('./mail_box/scene.gltf');

  return (
    <mesh>
      <pointLight position={[0, 5, 0]} color='white' intensity={1} />
      <pointLight position={[20, 0, 0]} color='white' intensity={1} />
      <hemisphereLight intensity={2} groundColor='white' />

      <primitive
        object={mailBox.scene}
        scale={isMobile ? 0.7 : 4.5}
        position={isMobile ? [0, -3, -2.2] : [0, 0.5, 0]}
      />
    </mesh>
  );
};

const MailBoxCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

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
        <MailBox isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MailBoxCanvas;
