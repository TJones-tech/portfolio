import { IProject, Service, Skill } from "./types";
import {
  faCircleNodes,
  faCode,
  faDisplay,
  faLaptopCode,
  faNetworkWired,
  faSitemap,
  faServer,
  faBrain,
  faDatabase,
  faTools,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { Bs0CircleFill, Bs1CircleFill, BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: faDisplay,
    title: "Frontend Devlopment",
    about:
      "Expert in React.js, TypeScript, Next.js, and modern JavaScript frameworks with a focus on responsive design and UI/UX principles",
  },
  {
    Icon: faNetworkWired,
    title: "Backend Devlopment",
    about:
      "Proficient in Python, PHP, C#, .NET Core, Node.js, and RESTful API development with enterprise-grade security protocols",
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
  {
    Icon: faServer,
    title: "AI & Emerging Tech",
    about:
      "Specialized in AI integrations, machine learning implementation, LLM APIs, and data analytics solutions",
  },
  {
    Icon: faDatabase,
    title: "Database & CMS",
    about:
      "Experienced in SQL, MongoDB, WordPress, Headless CMS architecture, and Faust.js implementations",
  },
  {
    Icon: faTools,
    title: "Development Tools",
    about:
      "Skilled in Git, GitHub, Azure DevOps, VS Code, and Figma for efficient development workflows",
  },
  {
    Icon: faProjectDiagram,
    title: "Project Management",
    about:
      "Proven track record in Agile methodologies, Scrum, Kanban, and team leadership across multiple industries",
  },
];

export const projects: IProject[] = [
  {
    name: "HouseEvo",
    description:
      "A creative financing marketplace connecting sellers and buyers with innovative home financing solutions",
    image_path: "/houseevo.png",
    deployed_url: "https://houseevo.com",
    github_url: "https://houseevo.com",
    category: ["react", "node", "mongo"],
    key_techs: [
      "React",
      "Next.js",
      "Node.js",
      "AI Integration",
      "Payment Processing",
    ],
  },
  {
    name: "LoadPay",
    description:
      "Instant payment solution for truckers, enabling fast and secure transactions similar to Venmo but tailored for the trucking industry",
    image_path: "/loadpay.png",
    deployed_url: "https://loadpay.com",
    github_url: "https://loadpay.com",
    category: ["react", "node", "express"],
    key_techs: [
      "React",
      "Node.js",
      "Ruby",
      "Payment Processing",
      "Real-time Transactions",
      "Mobile First",
    ],
  },
  {
    name: "MLS AI Agent",
    description:
      "AI-powered agent that scrapes MLS for wholesale deals and automatically cold calls potential sellers on behalf of clients",
    image_path: "/mls-agent.png",
    deployed_url: "https://github.com/TJones-tech",
    github_url: "https://github.com/TJones-tech",
    category: ["node", "express", "mongo"],
    key_techs: [
      "Python",
      "AI/ML",
      "Web Scraping",
      "Natural Language Processing",
      "Automation",
    ],
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React.js",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Rest API",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "C#/.NET",
    level: "35",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git/GitHub",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "WordPress/CMS",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "AI Integration",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Azure DevOps",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Jira",
    level: "85",
  },
];
