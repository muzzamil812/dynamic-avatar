const Box = () => (
  <mesh position={[0, 0, 0]}>
    {/* Increase size of the box */}
    <boxGeometry args={[5, 5, 5]} />
    {/* Add a colorful material, e.g., gradient color */}
    <meshStandardMaterial color="cyan" />
  </mesh>
);

export default Box;
