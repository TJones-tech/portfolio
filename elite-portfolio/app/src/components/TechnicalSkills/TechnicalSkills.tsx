import React from "react";
import { languages, tools } from "@/data";

const skills = [
  ...languages.map((lang) => ({
    letter: lang.name[0],
    name: lang.name,
    level: lang.level,
  })),
  ...tools.map((tool) => ({
    letter: tool.name[0],
    name: tool.name,
    level: tool.level,
  })),
];

export default function TechnicalSkills() {
  return (
    <section id="technical-skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 justify-center mb-12">
          <div className="h-px w-8 bg-secondary"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Technical Skills
          </h2>
          <div className="h-px w-8 bg-secondary"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="tech-card group hover:bg-primary-lighter transition-colors duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3 text-secondary text-xl font-bold">
                  {skill.letter}
                </div>
                <h3 className="text-lg font-medium text-accent-lighter mb-1">
                  {skill.name}
                </h3>
                <div className="w-full bg-primary rounded-full h-1.5 mt-2">
                  <div
                    className="bg-secondary h-1.5 rounded-full transition-all duration-500 ease-out group-hover:opacity-80"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
