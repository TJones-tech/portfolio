import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconType } from "react-icons";

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface Service {
  Icon: IconDefinition;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export type Category = "react" | "node" | "firebase" | "mongo" | "express";
