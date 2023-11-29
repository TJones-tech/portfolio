import React from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";

const Resume: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-48 my-14 max-[767px]:grid max-[767px]:grid-rows-2 max-[767px]:grid-flow-col max-[767px]:gap-4 max-[767px]:px-3 max-[767px]:my-7">
      <div className="col-span-3 bg-neutral-950 rounded-2xl max-[767px]:col-span-12">
        <Sidebar />
      </div>
      <div className="col-span-9 bg-neutral-950  rounded-2xl max-[767px]:col-span-12">
        <nav className="flex flex-wrap items-center justify-between p-4 bg-neutral-950">
          <div className="block lg:hidden"></div>
          <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
            <a
              className="block mt-4 mr-10 text-2xl font-bold text-white hover:text-2xl hover:font-bold lg:inline-block lg:mt-0 underline decoration-4 decoration-solid decoration-amber-400"
              href="/resume"
            >
              Resume
            </a>
          </div>
          <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
            <a
              className="block mt-4 mr-10 text-xl text-white lg:inline-block lg:mt-0 hover:text-2xl hover:font-bold active:underline active:decoration-4 active:decoration-solid active:decoration-amber-400"
              href="/"
            >
              About
            </a>
            <a
              className="block mt-4 text-xl text-white lg:inline-block lg:mt-0 hover:text-2xl hover:font-bold active:underline active:decoration-4 active:decoration-solid active:decoration-amber-400"
              href="#"
            >
              Projects
            </a>
          </div>
        </nav>
        <div className="grid grid-cols-2 gap-8 p-4 mt-2">
          <div className="bg-neutral-950 p-0">
            <h2 className="text-2xl text-white font-bold">Education</h2>
            <p className="text-white text-xl mt-4 font-semibold">
              Bachelor of Business Administration
            </p>
            <p className="text-white text-lg mt-4 font-semibold">
              Mid-America University
            </p>
            <p className="text-white text-lg mt-4">
              I am currently building and maintaing projects with specified tech
              stacks as required
            </p>
            <h2 className="text-2xl text-white font-bold mt-8">
              Language & Framework
            </h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-3/4 h-full  bg-amber-400 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Javascript
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-5/6 h-full  bg-rose-950 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • React
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-3/4 h-full  bg-amber-400 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Typescript
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-5/6 h-full  bg-rose-950 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • CSS
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-5/6 h-full  bg-amber-400 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • HTML
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-3/4 h-full  bg-rose-950 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Next.js
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 p-0">
            <h2 className="text-2xl text-white font-bold">Experience</h2>
            <p className="text-white text-xl mt-4 font-semibold">
              Software Engineer
            </p>
            <p className="text-white text-lg mt-4 font-semibold">
              Professionally
            </p>
            <p className="text-white text-lg mt-2">
              I am a Software Engineer with 5 years of experience of designing,
              developing and maintaining web/mobile applications.
            </p>
            <h2 className="text-2xl text-white font-bold mt-3">
              Tools & Software
            </h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-5/6 h-full  bg-amber-400 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Github
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-2/3 h-full  bg-rose-950 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Bitbucket
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-3/4 h-full  bg-amber-400 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Wrike
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-3/4 h-full  bg-rose-950 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Jira
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-1/2 h-full  bg-amber-400 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Azure Devops
                </p>
              </div>
            </div>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-4">
              <div className="w-2/3 h-full  bg-rose-950 rounded-full">
                <p className="text-left text-xl text-white py-0.5 px-2">
                  • Figma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
