import React, { Suspense } from 'react';
import CanvasLoader from '../Loader';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const ShapesCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
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

//// Docs ////

// <Canvas>： 這是一個用來創建3D場景的react元素，它將創建一個Three.js的渲染器。

// <Suspense>： 這個元素可以讓我們在加載資源時顯示loading元素。在這個例子中，當Sphere的材質尚未加載時，會顯示<CanvasLoader />元素。

// <OrbitControls>： 這個元素是一個Three.js中的控制器，可以讓使用者旋轉和縮放場景。

// <ambientLight>： 這是一種環境光，會向四面八方發出光線。

// <directionalLight>： 這是一種方向性光源，需要指定它的位置。

// <Sphere>： 這是一個3D球體，可以設定它的大小和細分程度。

// <MeshDistortMaterial>： 這是一個Three.js材質，可以讓我們扭曲物體。在這個例子中，它設定了顏色，扭曲和速度。
