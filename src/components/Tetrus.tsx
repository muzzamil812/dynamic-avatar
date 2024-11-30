import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Plane } from "@react-three/drei";
import * as THREE from "three";

const BallCatchGame = () => {
  const canvasWidth = 10; // Width of the game area in 3D units
  const canvasHeight = 15; // Height of the game area in 3D units
  const sackWidth = 3;
  const sackHeight = 0.5;
  const imageWidth = 4; // Width of the image
  const imageHeight = 5; // Height of the image

  // Game state
  const [sackPosition, setSackPosition] = useState(0); // Horizontal position of the sack
  const [imagePosition, setImagePosition] = useState({
    x: 0,
    y: canvasHeight / 2,
  }); // Image position
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Falling speed adjustments
  const fallSpeed = score > 10 ? 0.2 : 0.1; // Faster speed after score 10

  // Ball falling logic
  useFrame(() => {
    if (gameOver) return;

    setImagePosition((prev) => {
      const newY = prev.y - fallSpeed; // Adjust fall speed based on score
      if (newY <= -canvasHeight / 2 + sackHeight) {
        // Check if image is caught
        if (
          prev.x > sackPosition - sackWidth / 2 &&
          prev.x < sackPosition + sackWidth / 2
        ) {
          setScore((prevScore) => prevScore + 1); // Image caught
          return {
            x: (Math.random() - 0.5) * canvasWidth,
            y: canvasHeight / 2,
          }; // Reset image position
        } else {
          setGameOver(true); // Image missed
        }
      }
      return { ...prev, y: newY };
    });
  });

  // Sack movement with smooth left/right movement
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setSackPosition((prev) =>
          Math.max(prev - 0.5, -canvasWidth / 2 + sackWidth / 2)
        );
      }
      if (event.key === "ArrowRight") {
        setSackPosition((prev) =>
          Math.min(prev + 0.5, canvasWidth / 2 - sackWidth / 2)
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [sackPosition]);

  return (
    <>
      {/* Sack */}
      <Box
        position={[sackPosition, -canvasHeight / 2 + sackHeight / 2, 0]}
        args={[sackWidth, sackHeight, 0.5]}
      >
        <meshStandardMaterial color="red" />
      </Box>

      {/* Image as falling object */}
      <Plane
        position={[imagePosition.x, imagePosition.y, 0]}
        args={[imageWidth, imageHeight]} // Image dimensions
      >
        <meshBasicMaterial
          attach="material"
          map={new THREE.TextureLoader().load("/Usamazz.jpg")} // Replace with your image path
          transparent={true}
          opacity={1} // Full opacity as requested
        />
      </Plane>

      {/* Score */}
      <Text position={[0, canvasHeight / 2 - 1, 0]} fontSize={1} color="black">
        Score: {score}
      </Text>

      {/* Game Over Message */}
      {gameOver && (
        <Text position={[0, 0, 0]} fontSize={2} color="red">
          Game Over!
        </Text>
      )}
    </>
  );
};

export default BallCatchGame;
