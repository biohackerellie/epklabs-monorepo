"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { fadeIn, textVariant } from "@/lib/motion";
import SectionWrapper from "@/lib/sectionWrapper";
import { styles } from "@/lib/styles";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionSubText}>About me</h1>
        <h2 className={styles.sectionHeadText}>Who am I?</h2>
      </motion.div>
      <motion.p
        variants={fadeIn({ delay: 0.1, duration: 1 })}
        className="ml-1 mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary-foreground"
      >
        I'm Ellie Kerns, and I'm running for Montana House District 53! I have
        lived in Montana for almost my entire life. I moved to Billings in 1999
        when I was 6 years old, graduated from Billings Skyview High School in
        2011, and have been working in the Tech industry ever since. I am
        currently an independent Software Engineer and an IT Systems
        Administrator at Laurel Public Schools.
      </motion.p>
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>Why am I running?</h3>
      </motion.div>
      <motion.p
        variants={fadeIn({ delay: 0.5, duration: 1 })}
        className="ml-1 mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary-foreground"
      >
        As a trans, working class, millennial Montanan, I have seen firsthand
        the struggles that our community faces. I have seen the effects of our
        broken healthcare system, the lack of affordable housing, and the need
        for better paying jobs. I have seen the effects of climate change, and
        the need for a Green New Deal. <br /> <br />
        When I was growing up, Montana was a place where everyone could be who
        they wanted to be, a "live and let live" kinda place. But since 2016, I
        have seen attacks on LGBTQ+ rights, especially on trans youth,
        increasing drastically and I firmly believe we must stand up to these
        bullies. <br /> <br />I am running because I believe that we can do
        better. I am running because I believe that we can build a Montana that
        works for all of us, not just the wealthy few and those who align with
        their ideology.
      </motion.p>
      <motion.div variants={textVariant()}>
        <h4 className={styles.sectionHeadText}>A promise to you</h4>
      </motion.div>
      <motion.p
        variants={fadeIn({ delay: 1.1, duration: 1 })}
        className="mb-4 ml-1 mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary-foreground"
      >
        As your representative, I promise to be a voice for the marginalized and
        a staunch defender of our rights. My views will remain unapologetically
        leftist, calling out injustice wherever I see it, especially from those
        in power who aim to divide and conquer through fear and misinformation.
        Together, we can build a Montana that is inclusive, progressive, and
        just. A Montana where everyone has a voice, and no one is left behind.
        Let's make it happen! Join me in this journey. Your support means
        everything.
      </motion.p>
    </>
  );
};

export default SectionWrapper({ Component: About, idName: "about" });
