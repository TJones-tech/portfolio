import React from "react";
import Image from "next/image";
import { projects } from "@/data";
import TechnicalSkills from "../src/components/TechnicalSkills/TechnicalSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Hero from "../src/components/Hero/Hero";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* About Section */}
      <section id="about" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative aspect-square w-full max-w-xl mx-auto">
              <div className="absolute inset-0 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-primary/50 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300 z-10"></div>
                <Image
                  src="/me.png"
                  alt="Terrance Jones"
                  fill
                  priority
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-secondary/20"></div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-secondary"></div>
                  <h2 className="text-3xl font-bold text-accent-lighter">
                    About Me
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-accent-light">
                  <p>
                    I'm a passionate developer with expertise in building modern
                    web applications. With a strong foundation in both frontend
                    and backend technologies, I create seamless digital
                    experiences that solve real-world problems.
                  </p>
                  <p>
                    My approach combines technical excellence with creative
                    problem-solving, ensuring that every project I work on is
                    both functional and visually impressive.
                  </p>
                  <p>
                    Versatile Full Stack Developer specializing in modern web
                    technologies, AI integrations, and agile methodologies. I
                    deliver high-performance solutions using React ecosystem,
                    Python, and headless CMS architecture.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/TJones-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-secondary hover:bg-primary-lighter transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/terrance-jones-1b690b23a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-secondary hover:bg-primary-lighter transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </a>
                <a
                  href="mailto:t.jones50.tj@gmail.com"
                  className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-secondary hover:bg-primary-lighter transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-accent-light">
                <span className="font-medium">Based in:</span>
                <span>Dallas, Texas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 px-4 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.name} className="tech-card group">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image_path}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-accent mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.key_techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-primary text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.deployed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-button text-sm"
                  >
                    View Demo →
                  </a>
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-light hover:text-secondary"
                  >
                    <span className="mr-2">Code</span>
                    <span className="inline-block">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <TechnicalSkills />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="tech-card max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-accent-light mb-12">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tech-card bg-primary/50">
              <p className="text-secondary mb-1">Email</p>
              <a
                href="mailto:t.jones50.tj@gmail.com"
                className="text-accent-lighter"
              >
                My Email
              </a>
            </div>
            <div className="tech-card bg-primary/50">
              <p className="text-secondary mb-1">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/terrance-jones-1b690b23a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-lighter"
              >
                My LinkedIn
              </a>
            </div>
            <div className="tech-card bg-primary/50">
              <p className="text-secondary mb-1">GitHub</p>
              <a
                href="https://github.com/TJones-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-lighter"
              >
                My GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
