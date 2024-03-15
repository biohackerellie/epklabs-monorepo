"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, spring } from "framer-motion";

import { rfs1 } from "@/assets";
import SectionWrapper from "@/lib/sectionWrapper";

const Endorsements = () => {
  return (
    <motion.div
      transition={spring}
      animate={{ scale: 1 }}
      className="max-w-screen flex h-auto flex-col items-center justify-center"
    >
      <div className="max-w-screen flex flex-col items-center  justify-center">
        <Link href="https://directory.runforsomething.net/candidate/5825542522114116370/kerns-ellie/">
          <Image src={rfs1} alt="Run For Something" />
        </Link>
      </div>
    </motion.div>
  );
};

export default SectionWrapper({
  Component: Endorsements,
  idName: "endorsements",
});
