import React from "react";

const TeddyBear = () => (
  <group>
    {/* Body */}
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>

    {/* Head */}
    <mesh position={[0, 2.2, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>

    {/* Eyes */}
    <mesh position={[-0.5, 2.5, 0.8]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>
    <mesh position={[0.5, 2.5, 0.8]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>

    {/* Nose */}
    <mesh position={[0, 2.2, 1]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>

    {/* Ears */}
    <mesh position={[-1.2, 3.4, 0]}>
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
    <mesh position={[1.2, 3.4, 0]}>
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>

    {/* Arms */}
    <mesh position={[-2, 1.2, 0]}>
      <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
    <mesh position={[2, 1.2, 0]}>
      <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>

    {/* Legs */}
    <mesh position={[-1, -1.2, 0]}>
      <cylinderGeometry args={[0.6, 0.6, 2, 32]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
    <mesh position={[1, -1.2, 0]}>
      <cylinderGeometry args={[0.6, 0.6, 2, 32]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  </group>
);

export default TeddyBear;
