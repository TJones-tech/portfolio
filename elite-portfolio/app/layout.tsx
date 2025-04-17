import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "../src/components/MobileMenu/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrance Jones | Full Stack Developer",
  description:
    "Versatile Full Stack Developer specializing in modern web technologies, AI integrations, and agile methodologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-tech min-h-screen relative`}
      >
        {/* Background Grid */}
        <div className="fixed inset-0 bg-grid-pattern bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-secondary/10">
          <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            {/* Logo/Name */}
            <a href="/" className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-white">Terrance</span>
                <span className="text-secondary">Jones</span>
              </span>
              <span className="hidden sm:inline text-accent-light text-sm">
                Software Engineer
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#about"
                className="text-accent-light hover:text-secondary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-accent-light hover:text-secondary transition-colors"
              >
                Projects
              </a>
              <a
                href="#technical-skills"
                className="text-accent-light hover:text-secondary transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-accent-light hover:text-secondary transition-colors"
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button px-4 py-2 bg-secondary border border-secondary hover:bg-secondary-light text-white hover:text-white"
              >
                View Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="relative pt-16 sm:pt-20">{children}</div>
      </body>
    </html>
  );
}
