import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/native";
import { Platform } from "react-native";
import { Rocket } from "./Visualizer/components/Rocket/Rocket";
import { Suspense } from "react";
import { useAssets } from "expo-asset";

export default function App() {
  const [assets, error] = useAssets([require("./public/models/Rocket.obj")]);

  return (
    <Suspense fallback={null}>
      <Canvas>
        {assets ? <Rocket uri={assets[0].uri} /> : null}
        <ambientLight intensity={0.05} />
        <directionalLight />
        {Platform.OS === "web" ? <OrbitControls /> : null}
      </Canvas>
    </Suspense>
  );
}
