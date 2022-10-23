import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/native";
import * as THREE from "three";
import { useRef } from "react";
import { Platform } from "react-native";

function MyRotatingBox() {
  const myMesh = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshPhongMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <MyRotatingBox />
      <ambientLight intensity={0.1} />
      <directionalLight />
      {Platform.OS === "web" ? <OrbitControls /> : null}
    </Canvas>
  );
}
