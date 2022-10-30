import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/native";
import { Platform } from "react-native";
import { Rocket } from "./src/components/Rocket/Rocket";
import { Suspense } from "react";
import { useAssets } from "expo-asset";
import { Login } from "./src/components/Login";
import { Sky } from "./src/components/Sky";

export default function App() {
  const [assets] = useAssets([require("./src/Rocket.obj")]);

  return (
    <Suspense fallback={null}>
      <Login></Login>
      <Canvas camera={{ far: 100000 }}>
        <Sky />
        {assets ? <Rocket uri={assets[0].uri} /> : null}
        <ambientLight intensity={0.05} />
        <directionalLight />
        {Platform.OS === "web" ? <OrbitControls /> : null}
      </Canvas>
    </Suspense>
  );
}
