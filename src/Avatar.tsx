import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  url: string;
  visible?: boolean;
  position?: [number, number, number];
  scale?: number;
};

export default function AnimatedModel({
  url,
  visible = true,
  position = [0, 0, 0],
  scale = 1,
}: Props) {
  const gltf = useGLTF(url) as unknown as {
    scene: THREE.Group;
    animations: THREE.AnimationClip[];
  };

  const { actions } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    const first = Object.values(actions)[0];
    first?.reset().fadeIn(0.3).play();

    return () => {
      first?.fadeOut(0.2);
    };
  }, [actions]);

  return (
    <primitive
      object={gltf.scene}
      visible={visible}
      position={position}
      scale={scale}
    />
  );
}
