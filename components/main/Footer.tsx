import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">View My Work</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <Link
              href="https://www.linkedin.com/in/william-kruta-0271b1300/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer">
              <CiLinkedin />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </Link>
          </div> */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact Me</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <HiOutlineMail />
              <span className="text-[15px] ml-[6px]">wjkruta@gmail.com</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <CiLinkedin />
              <span className="text-[15px] ml-[6px]">
                william-kruta-0271b1300/
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
