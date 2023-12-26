import { IProject, Service, Skill } from "./types";
import {
  faCircleNodes,
  faCode,
  faDisplay,
  faLaptopCode,
  faNetworkWired,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { Bs0CircleFill, Bs1CircleFill, BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: faDisplay,
    title: "Frontend Devlopment",
    about:
      "I can build a beautiful and scalable SPA using HTML,CSS and React.js",
  },
  {
    Icon: faNetworkWired,
    title: "Backend Devlopment",
    about:
      "Handle database, server, api using Express & other popular frameworks",
  },
  {
    Icon: faSitemap,
    title: "API Devlopment",
    about: "I can dvelop robust REST API using django-rest-api & Node API",
  },
  {
    Icon: faCode,
    title: "Up to Date Coder",
    about: "Constanly learning and building with new and popular frameworks",
  },
  {
    Icon: faCircleNodes,
    title: "UI/UX Designer",
    about: "Stunning user interface designer using Figma",
  },
  {
    Icon: faLaptopCode,
    title: "SEO Optimization",
    about:
      "Great at optimizing websites, web pages and content for the purposes of ranking higher in search engines, like Google",
  },
];

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
      "A E-commerce store that allow users to go in shop/buy their favorite items :)",
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

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Github",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Bitbucket",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Wrike",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Jira",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "Azure-Devops",
    level: "35",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "45",
  },
];
