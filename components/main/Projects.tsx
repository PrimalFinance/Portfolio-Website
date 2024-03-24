import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectCardVideo from "../sub/ProjectCardVideo";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex md:flex-row gap-10 px-10">
          <ProjectCard
            src="/aapl_support_resistance.png"
            title="Stock Support & Resistance"
            description="Dynamically creates support & resistance levels based on candle patterns. "
            url="https://github.com/PrimalFinance/Support-Resistance-Levels"
          />
          <ProjectCard
            src="/halving_2020.png"
            title="Cryptocurrency Halving Performance"
            description="Tracks a coin's performance during a halving period."
            url="test"
          />
          <ProjectCardVideo
            src="resized_video.mp4"
            title="Neural Network Learns to play Snake"
            description="Using reinforcement learning, 
            this model tries to learn the objective of the game."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
