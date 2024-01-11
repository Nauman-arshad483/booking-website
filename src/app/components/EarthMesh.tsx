// EarthMesh.tsx
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import styles from "@/app/ui/loader.module.css";

function Earth() {
  const fileUrl = "earth_globe.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useEffect(() => {
    if (mesh.current) {
      mesh.current.scale.set(1.5, 1.5, 1.5);
      mesh.current.position.setY(17.4); 
      mesh.current.position.setX(0.5);
    }
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function EarthMesh() {
  return (
    <div className={`${styles.EarthMesh}`}>
      <div className={`${styles.EarthMeshContainer} ${styles.AlignTop}`}>
        <Canvas
          className={`${styles.EarthMeshContainerSub}`}
          camera={{ position: [0, 0, 30] }} 
        >
          <OrbitControls />
          <ambientLight />
          <pointLight position={[0, 0, 5]} />
          <Earth />
        </Canvas>
      </div>
    </div>
  );
}
