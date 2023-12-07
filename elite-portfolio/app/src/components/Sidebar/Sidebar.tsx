"use client";

import React from "react";
import Image from "next/image";
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
    <div className="p-4">
      <div className="text-center my-1">
        <a href="#" className="relative block">
          <Image
            alt="Terrance Jones"
            src="/me.png"
            width={100}
            height={100}
            className="mx-auto object-cover rounded-full h-40 w-40"
          />
        </a>
        <div className="my-4 text-2xl text-center text-amber-400">
          <span className="text-center text-white"> 𝓣𝓮𝓻𝓻𝓪𝓷𝓬𝓮</span> 𝓙𝓸
          <span className="text-rose-950">𝓷</span>𝓮𝓼
        </div>
        <div className="text-center items-center">
          <div className="py-2 px-4 bg-gray-900 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full">
            Web Developer
          </div>
          <button
            type="button"
            onClick={handleDownload}
            className="py-2 px-4 mt-4 flex bg-gray-900 hover:bg-gray-500 focus:ring-offset-yellow-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            <div className="text-center ml-12">
              <span className="pr-1">
                <CloudDownloadTwoToneIcon />
              </span>{" "}
              Download Resume
            </div>
          </button>
        </div>

        <div className="text-center flex space-x-14">
          <a href="https://www.linkedin.com/in/terrance-jones-1b690b23a/">
            <FontAwesomeIcon
              className="bg-amber-400 rounded-lg h-6 w-6 p-4 ml-5 my-8"
              icon={faLinkedin}
            />
          </a>
          <a href="https://github.com/TJones-tech">
            <FontAwesomeIcon
              className="bg-amber-400 rounded-lg h-6 w-6 p-4 my-8"
              icon={faGithub}
            />
          </a>
          <a
            href={`mailto:${emailAddress}?subject=${encodeURIComponent(
              subject
            )}`}
          >
            <FontAwesomeIcon
              className="bg-amber-400 rounded-lg h-6 w-6 p-4 my-8"
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
            href={`mailto:${emailAddress}?subject=${encodeURIComponent(
              subject
            )}`}
            className="py-2 px-8 bg-rose-950 text-center text-white rounded-full my-8 hover:bg-gray-500 focus:ring-gray-300 focus:ring-offset-yellow-800 transition ease-in duration-200 focus:ring-2 focus:ring-offset-2"
          >
            Email me
          </a>
        </div>
      </div>
    </div>
  );
}
