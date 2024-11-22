import { Text } from "@react-three/drei"; // Ensure Text is imported

const ColorfulText = () => (
  <Text
    position={[0, -6, 0]} // Position the text below the box
    fontSize={1}
    color="red" // Text color
    maxWidth={100}
    lineHeight={1}
    letterSpacing={0.02}
    textAlign="center"
    anchorX="center"
  >
    Developed With ❤️
  </Text>
);

export default ColorfulText;
