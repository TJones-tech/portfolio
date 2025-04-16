import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000", // Dark navy background
          light: "#112240", // Lighter navy
          lighter: "#233554", // Navy for hover states
        },
        secondary: {
          DEFAULT: "#2563EB", // Bright blue
          light: "#3B82F6", // Lighter blue
        },
        accent: {
          DEFAULT: "#8892B0", // Slate
          light: "#A8B2D1", // Light slate
          lighter: "#CCD6F6", // Lightest slate
        },
      },
      backgroundImage: {
        "gradient-tech":
          "radial-gradient(circle at top center, #112240 0%, #0A192F 100%)",
      },
      boxShadow: {
        tech: "0 4px 20px -2px rgba(37, 99, 235, 0.1)",
        "tech-lg": "0 8px 30px -2px rgba(37, 99, 235, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
