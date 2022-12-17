"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";

export default function CanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
}
