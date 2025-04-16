"use client";

import Link from "next/link";
import { XMarkIcon as XIcon } from "@heroicons/react/24/outline";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="absolute right-0 h-full w-[250px] bg-background shadow-lg">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-accent-light transition-colors"
              aria-label="Close menu"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <a
              href="#about"
              className="text-lg text-white hover:text-accent-light transition-colors py-2"
              onClick={onClose}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-lg text-white hover:text-accent-light transition-colors py-2"
              onClick={onClose}
            >
              Projects
            </a>
            <a
              href="#technical-skills"
              className="text-lg text-white hover:text-accent-light transition-colors py-2"
              onClick={onClose}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-lg text-white hover:text-accent-light transition-colors py-2"
              onClick={onClose}
            >
              Contact
            </a>
            <a
              href="/TJ-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button px-4 py-2 bg-secondary border border-secondary hover:bg-secondary-light text-white text-center"
              onClick={onClose}
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
