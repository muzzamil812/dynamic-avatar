import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

const AvatarCanvas = ({ children }: React.PropsWithChildren) => (
  <Canvas style={{ width: "100%", height: "500px" }}>
    {/* Add lighting to enhance material color */}
    <ambientLight intensity={0.5} color={"red"} /> {/* Neutral light */}
    <directionalLight position={[5, 5, 5]} intensity={1} />{" "}
    {/* Highlight from a direction */}
    <OrbitControls />
    {children}
  </Canvas>
);

export default AvatarCanvas;
