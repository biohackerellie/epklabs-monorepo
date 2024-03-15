"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Endorsements from "@/components/Endorsements";
import Hero from "@/components/Hero";
import Issues from "@/components/Issues";

export default function Home() {
  return (
    <motion.div
      className="relative z-0  bg-white"
      animate={{ opacity: 1 }}
      transition={{ from: 0, duration: 3 }}
    >
      <div className="bg-cover bg-center bg-no-repeat">
        <Hero />
      </div>
      <About />
      <Issues />
      <div className="relative z-10 pb-4">
        <Contact />
      </div>
      <div className="relative z-0 pb-4">
        <Endorsements />
      </div>
    </motion.div>
  );
}
