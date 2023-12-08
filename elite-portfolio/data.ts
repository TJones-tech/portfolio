import { IProject } from "./types";

export const projects: IProject[] = [
  {
    name: "Realtor App",
    description: "This app shows users prices and deals for luxury properties",
    image_path: "/realtor.png",
    deployed_url: "https://tjr-realestate.vercel.app",
    github_url: "https://github.com/TJones-tech",
    category: ["react", "node"],
    key_techs: ["React", "Material UI", "Next.js", "Rapid Api"],
  },
  {
    name: "Restaurant (Grub Palace)",
    image_path: "/grub.png",
    deployed_url: "https://github.com/TJones-tech",
    github_url: "https://github.com/TJones-tech/food-recipes",
    category: ["react"],
    description:
      "An web app which shows great recipes and quality meal plans for users",
    key_techs: ["React", "SCSS", "Chakra"],
  },

  {
    name: "Crypto App",
    image_path: "/crypto.png",
    deployed_url: "https://github.com/TJones-tech",
    github_url: "https://github.com/TJones-tech/crypto_app",
    category: ["node", "react", "express"],
    description:
      "A crypto currency app to keep users updated on the progress of the crypto world",
    key_techs: ["React", "Node", "Express", "Ant"],
  },

  {
    name: "Realtime Chat App",
    image_path: "/chatapp.png",
    deployed_url: "https://github.com/TJones-tech",
    github_url: "https://github.com/TJones-tech/chat-app",
    category: ["node", "react", "firebase"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Firebase"],
  },

  {
    name: "TJvision Movie App",
    image_path: "/movie.png",
    deployed_url: "https://github.com/TJones-tech",
    github_url: "https://github.com/TJones-tech/movie-app",
    category: ["react"],
    description: "A Movie app to launch and watch your favorite movies :)",
    key_techs: ["React", "Chakra", "Rapid Api"],
  },

  {
    name: "E-commerce Store",
    image_path: "/ecommerce.png",
    deployed_url: "https://github.com/TJones-tech",
    github_url: "https://github.com/TJones-tech/e_commerce",
    category: ["node", "express", "react", "mongo"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "React", "node", "Vanilla js"],
  },
  {
    name: "Calculator",
    image_path: "/calculator.png",
    deployed_url: "https://github.com/TJones-tech",
    github_url: "https://github.com/TJones-tech/TJ-Calculator",
    category: ["node", "react"],
    description: "A Calculator to use for your own personal use",
    key_techs: ["React", "Node", "Express"],
  },
];
