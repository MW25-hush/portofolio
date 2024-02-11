import { Frontend_skill } from "@/constants";
import React from "react";
import SkillDataProvider from "../molecules/SkillDataProvider";
import SkillText from "../molecules/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20 pb-80"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="absolute h-full w-full">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-30">
          <video
            className="h-auto w-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/darkTheme/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
