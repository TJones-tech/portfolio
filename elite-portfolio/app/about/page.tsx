import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative aspect-square w-full max-w-xl mx-auto">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-tech-light opacity-20"></div>
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl border-2 border-secondary/20"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-secondary"></div>
                <h1 className="text-3xl font-bold text-accent-lighter">
                  About Me
                </h1>
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
                  problem-solving, ensuring that every project I work on is both
                  functional and visually impressive.
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
    </div>
  );
}
