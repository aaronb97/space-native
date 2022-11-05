import { useTexture } from "@react-three/drei";
import { DoubleSide, Texture } from "three";
import space from "./space.jpg";

export const Sky = () => {
  const texture = useTexture(space) as Texture;

  return (
    <mesh>
      <sphereGeometry args={[10000]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
};
