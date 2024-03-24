import React from "react";
import { Proficient_Languages } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import SkillText from "../sub/SkillText";
import SkillDataProvider from "../sub/SkillDataProvider";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}>
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Proficient_Languages.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
        {/* <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]">
          Hello, my name is William Kruta. I&apos;m an aspiring Software
          Developer with experience in data structures, algorithims, neural
          networks, data pipelines, smart contracts, and data visualization.
          I&apos;m always ready to learn new skills for the task at hand. My
          goal is to work on projects that have a meaningful impact. If this
          sounds like something you&apos;re looking for, then consider checking
          out my projects.
        </motion.p> */}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/space_fabric.webm"
          />
        </div>
      </div>
    </section>
  );
}
