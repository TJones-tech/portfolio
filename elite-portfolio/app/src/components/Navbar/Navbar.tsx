import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-900">
      <div className="block lg:hidden"></div>
      <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
        <a
          className="block mt-4 mr-10 text-2xl text-white hover:text-3xl hover:font-bold hover:underline hover:decoration-4 hover:decoration-solid hover:decoration-amber-400 lg:inline-block lg:mt-0"
          href="#"
        >
          About
        </a>
      </div>
      <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
        <a
          className="block mt-4 mr-10 text-2xl text-white lg:inline-block lg:mt-0 hover:text-3xl hover:font-bold hover:underline hover:decoration-4 hover:decoration-solid hover:decoration-amber-400"
          href="#"
        >
          Resume
        </a>
        <a
          className="block mt-4 text-2xl text-white lg:inline-block lg:mt-0 hover:text-3xl hover:font-bold hover:underline hover:decoration-4 hover:decoration-solid hover:decoration-amber-400"
          href="#"
        >
          Projects
        </a>
      </div>
    </nav>
  );
}
