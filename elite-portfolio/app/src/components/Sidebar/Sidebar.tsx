"use client";

import React from "react";
import Image from "next/legacy/image";
import CloudDownloadTwoToneIcon from "@mui/icons-material/CloudDownloadTwoTone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
  const handleDownload = () => {
    const resumePath: string = "/resume.pdf";
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "Terrance_Jones_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const emailAddress: string = "t.jones50.tj@gmail.com";
  const subject: string = "";

  return (
    <>
      <Image
        alt="Terrance Jones"
        src="/me.png"
        width={100}
        height={100}
        layout="intrinsic"
        className="mx-auto object-cover rounded-full h-40 w-40"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider text-amber-400">
        <span className="text-center text-white"> 𝓣𝓮𝓻𝓻𝓪𝓷𝓬𝓮</span> 𝓙𝓸
        <span className="text-rose-950">𝓷</span>𝓮𝓼
      </h3>
      <div className="text-center items-center">
        <p className="py-1 px-2 my-3 bg-gray-900 text-white rounded-full">
          Web Developer
        </p>
        <a
          onClick={handleDownload}
          className="flex items-center justify-center px-2 py-1 my-2 bg-gray-900 rounded-full cursor-pointer text-white space-x-2"
        >
          <CloudDownloadTwoToneIcon className="w-6 h-6" />
          <span>Download Resume</span>
        </a>
      </div>

      <div className="flex justify-around mx-auto my-5 md:w-full space-x-1">
        <a href="https://www.linkedin.com/in/terrance-jones-1b690b23a/">
          <FontAwesomeIcon
            className="bg-amber-400 rounded-lg p-3 w-8 h-8 cursor-pointer"
            icon={faLinkedin}
          />
        </a>
        <a href="https://github.com/TJones-tech">
          <FontAwesomeIcon
            className="bg-amber-400 rounded-lg p-3 w-8 h-8 cursor-pointer"
            icon={faGithub}
          />
        </a>
        <a
          href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`}
        >
          <FontAwesomeIcon
            className="bg-amber-400 rounded-lg p-3 w-8 h-8 cursor-pointer"
            icon={faEnvelope}
          />
        </a>
      </div>
      <div className="rounded-lg bg-gray-900 text-center text-white  p-4">
        <p className="pb-2">Dallas, Texas</p>
        <p className="pb-2">t.jones50.tj@gmail.com</p>
        <p className="pb-2">Contact me</p>
      </div>
      <div>
        <a
          type="button"
          href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`}
          className="py-2 px-8 bg-rose-950 text-center text-white rounded-full my-8 hover:bg-gray-500 focus:ring-gray-300 focus:ring-offset-yellow-800 transition ease-in duration-200 focus:ring-2 focus:ring-offset-2"
        >
          Email me
        </a>
      </div>
    </>
  );
}
