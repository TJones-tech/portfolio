"use client";
import { useState, useEffect, FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <span
        className="mx-2 cursor-pointer hover:border-b-4 hover:text-amber-400 hover:text-2xl hover:font-bold"
        onClick={() => setActive(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState("");

  //later
  useEffect(() => {
    if (pathname === "/") setActive("About");
    else if (pathname === "/projects") setActive("Projects");
    else if (pathname === "/resume") setActive("Resume");
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl text-white font-bold border-b-4 md:text-2xl border-amber-400">
        {active}
      </span>

      <div className="text-base text-white font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
