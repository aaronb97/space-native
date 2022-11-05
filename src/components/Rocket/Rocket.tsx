import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

interface Props {
  uri: string;
}

export const Rocket = ({ uri }: Props) => {
  const obj = useLoader(OBJLoader, uri);

  return <primitive object={obj} />;
};
