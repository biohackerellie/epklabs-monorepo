"use client";

import React from "react";
import Image from "next/image";
import { motion, spring } from "framer-motion";
import { Tilt } from "react-tilt";

import { epk, Me, us } from "@/assets";
import SectionWrapper from "@/lib/sectionWrapper";
import { fadeIn, textVariant } from "../lib/motion";

const Hero = () => {
  return (
    <section className="relative mx-auto mb-8  h-screen w-full justify-center py-2">
      <div className="max-h-md inset-0  mx-auto my-0 mb-4 flex max-w-7xl justify-center gap-y-0  ">
        <motion.div
          variants={fadeIn({ direction: "down", type: "spring" })}
          className=" object-contain  pt-10 drop-shadow-sm"
        >
          <Image src={epk} alt="Ellie Paige Kerns for Montana" className="" />
        </motion.div>
      </div>
      <div className=" inset-0 flex max-w-7xl   flex-row items-center justify-center">
        <motion.div
          variants={fadeIn({ direction: "up", type: "spring" })}
          className="relative mx-0 hidden  px-0 md:block "
        >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className=" h-3/4 w-3/4 rounded-full  "
          >
            <Image
              src={Me}
              alt="Ellie Kerns"
              width={1080}
              height={1920}
              className=" aspect-auto  rounded-2xl border-4  object-cover drop-shadow-md "
            />
          </Tilt>
        </motion.div>
        <div className="max-w-8xl flex flex-grow flex-col items-end gap-y-2">
          <motion.div variants={fadeIn({ direction: "left", type: "spring" })}>
            <div className="mr-2 flex h-full w-auto justify-center rounded-l-full rounded-tr-full border bg-blue-400 pr-2 pt-2 text-center sm:text-end">
              <p className="ml-4 p-4 text-xl text-white sm:text-4xl">
                <span className="wave">👋</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", type: "spring", delay: 2 })}
          >
            <div className="mr-2 flex h-full w-auto justify-end rounded-l-full rounded-tr-full border bg-blue-400 pr-2 pt-2 text-center sm:text-end">
              <p className="ml-4 p-4 text-xl text-white sm:text-4xl">
                Meet{" "}
                <span className="text-pink-200 drop-shadow-md">
                  Ellie Kerns
                </span>
                , Democratic Candidate for Montana House District 53 in Billings{" "}
                <br />
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", type: "spring", delay: 4 })}
          >
            <div className="right-0 ml-0 mr-2 flex h-full w-auto justify-end rounded-l-full rounded-tr-full border bg-blue-400 pr-2 pt-2 text-center sm:text-end">
              <p className="ml-4 p-4 text-xl text-white sm:text-4xl">
                Scroll down to learn more
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" xs:bottom-10  absolute flex w-full items-end justify-center p-2">
        <a href="about">
          <div className="p02 flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-pink-400">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-pink-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper({ Component: Hero, idName: "hero" });
