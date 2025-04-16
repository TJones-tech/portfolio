"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-accent-light hover:text-secondary transition-colors p-2"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm border-b border-secondary/10"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-4">
              <a
                href="#about"
                className="text-accent-light hover:text-secondary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-accent-light hover:text-secondary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-accent-light hover:text-secondary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-accent-light hover:text-secondary transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button px-4 py-2 bg-secondary border border-secondary hover:bg-secondary-light text-white hover:text-white text-center"
                onClick={() => setIsOpen(false)}
              >
                View Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
