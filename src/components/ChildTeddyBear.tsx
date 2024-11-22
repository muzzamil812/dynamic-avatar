const ChildTeddyBear = ({
  position,
}: {
  position: [number, number, number];
}) => (
  <group position={position}>
    {/* Child Body */}
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Child Head */}
    <mesh position={[0, 1.5, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Child Eyes */}
    <mesh position={[-0.2, 1.7, 0.6]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>
    <mesh position={[0.2, 1.7, 0.6]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>

    {/* Child Nose */}
    <mesh position={[0, 1.5, 0.7]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>

    {/* Child Ears */}
    <mesh position={[-0.4, 2, 0]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>
    <mesh position={[0.4, 2, 0]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Child Arms */}
    <mesh position={[-0.8, 0.6, 0]}>
      <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>
    <mesh position={[0.8, 0.6, 0]}>
      <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Child Legs */}
    <mesh position={[-0.4, -1, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>
    <mesh position={[0.4, -1, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Child Shoes */}
    <mesh position={[-0.4, -1.5, 0]}>
      <boxGeometry args={[0.3, 0.1, 0.2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
    <mesh position={[0.4, -1.5, 0]}>
      <boxGeometry args={[0.3, 0.1, 0.2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  </group>
);

export default ChildTeddyBear;
