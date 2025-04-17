"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary z-0" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-10" />

      {/* Content Container */}
      <div className="container-width section-padding relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Building Digital
              <span className="text-secondary"> Experiences</span>
            </h1>
            <div className="h-12 sm:h-16">
              <TypeAnimation
                sequence={[
                  "Full Stack Development",
                  2000,
                  "AI Integration",
                  2000,
                  "Modern Web Apps",
                  2000,
                  "Cloud Solutions",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl md:text-3xl text-accent-light"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-accent-light max-w-2xl mx-auto"
          >
            Transforming ideas into powerful digital solutions with modern
            technologies and innovative approaches. Let's build something
            amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Link
              href="#projects"
              className="tech-button bg-secondary hover:bg-secondary-light text-white hover:text-white px-8 py-3 rounded-lg text-lg w-full sm:w-auto"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="tech-button bg-primary-light border-2 border-secondary hover:bg-primary-lighter text-secondary px-8 py-3 rounded-lg text-lg w-full sm:w-auto"
            >
              Let's Connect
            </Link>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-12"
          >
            <p className="text-accent-light mb-4">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "TypeScript",
                "AWS",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="px-4 py-2 bg-primary-light rounded-full text-accent-light text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-accent-light p-2">
          <div className="w-1.5 h-1.5 bg-accent-light rounded-full animate-bounce mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
