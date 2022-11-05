import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAssets } from "expo-asset";
import { Platform, View, StyleSheet } from "react-native";
import { Rocket } from "../Rocket";
import { Sky } from "../Sky";

export const Visualizer = () => {
  const [assets] = useAssets([require("./Rocket.obj")]);

  return (
    <View style={styles.canvas}>
      <Canvas camera={{ far: 100000 }}>
        <Sky />
        {assets ? <Rocket uri={assets[0].uri} /> : null}
        <ambientLight intensity={0.05} />
        <directionalLight />
        {Platform.OS === "web" ? <OrbitControls /> : null}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
});
