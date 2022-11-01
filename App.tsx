import { Suspense } from "react";
import { Login } from "./src/components/Login";
import { Visualizer } from "./src/components/Visualizer";

export default function App() {
  return (
    <Suspense fallback={null}>
      <Login></Login>
      <Visualizer />
    </Suspense>
  );
}
