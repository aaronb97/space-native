import { useTexture } from "@react-three/drei";
import { DoubleSide, Texture } from "three";

export const Sky = () => {
  const texture = useTexture(require("./space.jpg")) as Texture;

  return (
    <mesh>
      <sphereGeometry args={[10000]}></sphereGeometry>
      <meshBasicMaterial map={texture} side={DoubleSide}></meshBasicMaterial>
    </mesh>
  );
};
