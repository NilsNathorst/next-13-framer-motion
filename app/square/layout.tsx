"use client";

import React from "react";
import CanvasLayout from "../../components/CanvasLayout";
import PageTransitionLayout from "../../components/PageTransitionLayout";

export default function Layout({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransitionLayout key="square">
      <CanvasLayout>{children}</CanvasLayout>
    </PageTransitionLayout>
  );
}
