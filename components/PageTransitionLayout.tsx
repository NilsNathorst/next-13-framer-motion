"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 200,
      }}
    >
      {children}
    </motion.div>
  );
}
