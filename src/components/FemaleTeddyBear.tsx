const FemaleTeddyBear = ({
  position,
}: {
  position: [number, number, number];
}) => (
  <group position={position}>
    {/* Female Body */}
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Female Head */}
    <mesh position={[0, 2.5, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Female Eyes */}
    <mesh position={[-0.4, 2.7, 0.8]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>
    <mesh position={[0.4, 2.7, 0.8]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>

    {/* Female Nose */}
    <mesh position={[0, 2.3, 1]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="black" />
    </mesh>

    {/* Female Ears */}
    <mesh position={[-0.7, 3.3, 0]}>
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>
    <mesh position={[0.7, 3.3, 0]}>
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Female Arms */}
    <mesh position={[-1.5, 1.2, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>
    <mesh position={[1.5, 1.2, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Female Legs */}
    <mesh position={[-0.6, -1.5, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>
    <mesh position={[0.6, -1.5, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
      <meshStandardMaterial color="#D2B48C" />
    </mesh>

    {/* Skirt */}
    <mesh position={[0, -0.3, 0]}>
      <torusGeometry args={[1.3, 0.3, 16, 100]} />
      <meshStandardMaterial color="pink" />
    </mesh>

    {/* Hair (larger) */}
    <mesh position={[-0.4, 3.7, 0]}>
      <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
      <meshStandardMaterial color="brown" />
    </mesh>
    <mesh position={[0.4, 3.7, 0]}>
      <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
      <meshStandardMaterial color="brown" />
    </mesh>
    <mesh position={[-0.6, 3.8, 0]}>
      <cylinderGeometry args={[0.15, 0.15, 1.5, 32]} />
      <meshStandardMaterial color="brown" />
    </mesh>
    <mesh position={[0.6, 3.8, 0]}>
      <cylinderGeometry args={[0.15, 0.15, 1.5, 32]} />
      <meshStandardMaterial color="brown" />
    </mesh>
    <mesh position={[0, 4.0, 0]}>
      <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
      <meshStandardMaterial color="brown" />
    </mesh>

    {/* Lady Shoes */}
    <mesh position={[-0.6, -1.8, 0]}>
      <boxGeometry args={[0.5, 0.2, 0.3]} />
      <meshStandardMaterial color="pink" />
    </mesh>
    <mesh position={[0.6, -1.8, 0]}>
      <boxGeometry args={[0.5, 0.2, 0.3]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  </group>
);

export default FemaleTeddyBear;
