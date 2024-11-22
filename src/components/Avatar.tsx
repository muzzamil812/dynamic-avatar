import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

const AvatarCanvas = ({ children }: React.PropsWithChildren) => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} />
    <OrbitControls />
    {children}
  </Canvas>
);

export default AvatarCanvas;
