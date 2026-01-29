import { Canvas } from "@react-three/fiber";

export default function HeroLeft() {

  
  return (
    <div className="flex justify-center items-center">
      <div
        className="
          w-55 h-55
          sm:w-65 sm:h-65
          md:w-80 md:h-80
          lg:w-95 lg:h-95
          rounded-full
          bg-white/5
          border border-white/10
          backdrop-blur-sm
          flex items-center justify-center
        "
      >
        <Canvas camera={{ position: [0, 3, 7], fov: 40 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
         
        </Canvas>
      </div>
    </div>
  );
}
