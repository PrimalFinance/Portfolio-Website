import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCardVideo = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[600px]">
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="w-full  h-auto object-hover object-contain"
        src={src}
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCardVideo;
