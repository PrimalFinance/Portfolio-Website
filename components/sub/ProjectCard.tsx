import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[600px]">
      <Image
        src={src}
        alt={title}
        width={1200}
        height={1200}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <a
          href={url}
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Required for security when using target="_blank"
          className="py-3 px-3 button-primary text-center text-white cursor-pointer hover:animate-slowspin rounded-lg max-w-[200px]">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
