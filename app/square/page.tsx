"use client";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

function Box(props: any) {
  const mesh = useRef();

  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  useFrame((_, delta) => (mesh.current.rotation.x += delta));

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={() => setActive((prev) => !prev)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </animated.mesh>
  );
}

export default function Sphere() {
  return <Box position={[0, 0, 0]} />;
}
