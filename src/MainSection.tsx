import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Avatar from "./Avatar";

function MainSection() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Avatar />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
      />
      <Environment preset="city" />
    </Canvas>
  );
}

export default MainSection;
