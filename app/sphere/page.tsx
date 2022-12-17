"use client";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

function Ball(props: any) {
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
      onClick={() => setActive(!active)}
    >
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial color={"hotpink"} />
    </animated.mesh>
  );
}

export default function Sphere() {
  return <Ball position={[0, 0, 0]} />;
}
