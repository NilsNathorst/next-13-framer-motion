"use client";
import React from "react";
import CanvasLayout from "../../components/CanvasLayout";
import PageTransitionLayout from "../../components/PageTransitionLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionLayout key="sphere">
      <CanvasLayout>{children}</CanvasLayout>
    </PageTransitionLayout>
  );
}
