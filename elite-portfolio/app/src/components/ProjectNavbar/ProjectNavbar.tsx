"use client";

import { FunctionComponent } from "react";
import { Category } from "@/types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    "capitalize border-b border-gray-200 text-white cursor-pointer hover:text-amber-400";
  if (active === value)
    className = "bg-gray-200 p-2 rounded-t-lg text-rose-950 capitalize";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="firebase" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
