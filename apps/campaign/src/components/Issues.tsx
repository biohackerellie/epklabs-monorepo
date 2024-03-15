"use client";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import Image from "next/image";

import { issues } from "@/lib/constants";
import { textVariant } from "@/lib/motion";
import SectionWrapper from "@/lib/sectionWrapper";
import { styles } from "@/lib/styles";

const Issues = () => {
  console.log(issues);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I stand on the</p>
        <h2 className={styles.sectionHeadText}>Issues</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {issues.map((issues, index) => (
            <IssueCard key={index} issues={issues} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const IssueCard = ({ issues }: any) => (
  <VerticalTimelineElement
    visible={true}
    contentStyle={{ background: "#a5b4fc", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={issues.title}
    iconStyle={{ background: issues.iconBG }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={issues.icon}
          alt={issues.title}
          className=" object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[24px] font-bold text-black">{issues.title}</h3>
      <p className="ml-5 mt-5 space-y-2 pl-1 text-[14px] tracking-wider text-white">
        {issues.description}
      </p>
    </div>
  </VerticalTimelineElement>
);

export default SectionWrapper({ Component: Issues, idName: "issues" });
