/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Target(props) {
  const targetRef = useRef();

  // simple float animation
  useFrame((state) => {
    if (!targetRef.current) return;
    const t = state.clock.getElapsedTime();
    targetRef.current.position.y = Math.sin(t * 1.2) * 0.4;
  });

  return (
    <group
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.7}
    >
      {/* stand */}
      <mesh position={[0, -0.75, 0]}>
        <boxGeometry args={[0.1, 1.5, 0.1]} />
        <meshStandardMaterial metalness={0.4} roughness={0.4} color="#ffffff" />
      </mesh>

      {/* target disc */}
      
      <mesh position={[0, 0.2, 0]}>
        <circleGeometry args={[0.6, 32]} />
        <meshStandardMaterial color="#008000" />

        {/* inner rings */}
        <mesh position={[0, 0, 0.001]}>
          <circleGeometry args={[0.4, 32]} />
          <meshStandardMaterial color="#00ff11" />
        </mesh>
        <mesh position={[0, 0, 0.002]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#008000" />
        </mesh>
      </mesh>
    </group>
  );
}

export default Target;
