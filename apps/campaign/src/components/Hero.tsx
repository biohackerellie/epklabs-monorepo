"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import SectionWrapper from "@/lib/sectionWrapper";
import { AuroraBackground } from "./ui/aurora";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div className="text-center text-3xl font-bold dark:text-white md:text-7xl">
          Free Palestine NOW!
        </div>
        <div className="py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl">
          Stop funding Israel's Genocide!
        </div>

        <Button
          className="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
          asChild
        >
          <Link href="https://donate.unrwa.org/gaza/~my-donation">Donate</Link>
        </Button>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
