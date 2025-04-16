"use client";

import React from "react";
import ProjectCard from "../src/components/ProjectCard/ProjectCard";
import ProjectsNavbar from "../src/components/ProjectNavbar/ProjectNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/types";
import { useState } from "react";
import DashboardLayout from "../layout/layout";

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
    <DashboardLayout>
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "63vh" }}>
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
    </DashboardLayout>
  );
};

export default page;
