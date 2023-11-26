"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [about, setAbout] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-900">
      <div className="block lg:hidden"></div>
      <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
        <a
          onClick={() => setAbout(!about)}
          onMouseEnter={() => setAbout(true)}
          onMouseLeave={() => setAbout(false)}
          className="block mt-4 mr-10 text-xl text-white hover:text-2xl hover:font-bold lg:inline-block lg:mt-0 active:underline active:decoration-4 active:decoration-solid active:decoration-amber-400"
          href="#"
        >
          About
        </a>
      </div>
      <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
        <a
          className="block mt-4 mr-10 text-xl text-white lg:inline-block lg:mt-0 hover:text-2xl hover:font-bold active:underline active:decoration-4 active:decoration-solid active:decoration-amber-400"
          href="#"
        >
          Resume
        </a>
        <a
          className="block mt-4 text-xl text-white lg:inline-block lg:mt-0 hover:text-2xl hover:font-bold active:underline active:decoration-4 active:decoration-solid active:decoration-amber-400"
          href="#"
        >
          Projects
        </a>
      </div>
    </nav>
  );
}
