"use client";

import { motion } from "framer-motion";
const isStaticSection = true;
export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
     viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
