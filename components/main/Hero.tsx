import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section id="about-me">
      <div className="relative flex flex-col h-full w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute top-[-150px] h-[-1250px] w-full left-0 z-[1] object-cover">
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
