import * as THREE from "three";

const Heart = () => (
  <mesh position={[0, 0, 0]}>
    <extrudeGeometry
      args={[
        new THREE.Shape()
          .moveTo(0, 0)
          .lineTo(1, 1)
          .lineTo(0, 2)
          .lineTo(-1, 1)
          .lineTo(0, 0),
        { depth: 1, bevelEnabled: true, bevelThickness: 0.2 },
      ]}
    />
    <meshStandardMaterial color="red" />
  </mesh>
);

export default Heart;
