"use client";

import React from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import ProjectCard from "../src/components/ProjectCard/ProjectCard";
import ProjectsNavbar from "../src/components/ProjectNavbar/ProjectNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/types";
import { useState } from "react";

const page: React.FC = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="grid grid-cols-12 gap-6 px-48 my-14 max-[767px]:grid max-[767px]:grid-rows-2 max-[767px]:grid-flow-col max-[767px]:gap-4 max-[767px]:px-3 max-[767px]:my-7">
      <div className="col-span-3 bg-neutral-950 rounded-2xl max-[767px]:col-span-12">
        <Sidebar />
      </div>
      <div className="col-span-9 bg-neutral-950  rounded-2xl max-[767px]:col-span-12">
        <nav className="flex flex-wrap items-center justify-between p-4 bg-neutral-950">
          <div className="block lg:hidden"></div>
          <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
            <a
              className="block mt-4 mr-10 text-2xl font-bold text-white hover:text-2xl hover:font-bold lg:inline-block lg:mt-0 underline underline-offset-8 decoration-4 decoration-solid decoration-amber-400"
              href="/projects"
            >
              Projects
            </a>
          </div>
          <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
            <a
              className="block mt-4 mr-10 text-xl text-white lg:inline-block lg:mt-0 hover:text-2xl hover:font-bold"
              href="/"
            >
              About
            </a>
            <a
              className="block mt-4 text-xl text-white lg:inline-block lg:mt-0 hover:text-2xl hover:font-bold"
              href="/resume"
            >
              Resume
            </a>
          </div>
        </nav>
        <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
          <ProjectsNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />

          <div className="relative grid grid-cols-12 gap-4 my-3">
            {projects.map((project) => (
              <div className="text-white col-span-12 p-2 bg-gray-900 rounded-lg sm:col-span-6 lg:col-span-4">
                <ProjectCard project={project} key={project.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
