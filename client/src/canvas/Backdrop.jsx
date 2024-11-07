import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={5} // Increased the number of lights slightly
        radius={10}
        intensity={1.2} // Increased intensity for a brighter light
        ambient={0.5} // Increased ambient to brighten up indirect lighting
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={5} // Matches the other light to keep the scene even
        radius={6}
        intensity={0.7} // Increased intensity for a softer fill light
        ambient={0.6} // Higher ambient for a well-lit background
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
