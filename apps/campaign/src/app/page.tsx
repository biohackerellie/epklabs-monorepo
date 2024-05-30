"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <motion.div
      className="relative z-0  bg-black"
      animate={{ opacity: 1 }}
      transition={{ from: 0, duration: 3 }}
    >
      <div className="bg-cover bg-center bg-no-repeat">
        <Hero />
      </div>
    </motion.div>
  );
}
