"use client";

import { FunctionComponent, useState } from "react";
import Image from "next/legacy/image";
import { IProject } from "@/types";
import { MdClose } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetail(true)}
        /> */}
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-white bg-black md:grid-cols-2 gap-x-12">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex h-12 w-36 items-center px-4 py-2 text-lg bg-gray-900"
              >
                <FontAwesomeIcon
                  className="rounded-lg h-4 w-4 p-4 my-8"
                  icon={faGithub}
                />{" "}
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center h-12 w-36 px-4 py-2 text-lg bg-gray-900"
              >
                <FontAwesomeIcon
                  className="rounded-lg h-4 w-4 p-4 my-8"
                  icon={faGithub}
                />{" "}
                <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-900 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-900 rounded-full top-3 right-3 focus:outline-none"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
