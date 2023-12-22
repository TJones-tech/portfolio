import React from "react";
import DashboardLayout from "../layout/layout";
import Bar from "../src/components/Bar/Bar";
import { languages, tools } from "@/data";

const Resume: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="px-6 py-2">
        {/* //! Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2 text-white">
          <div>
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Bachelor of Business Administration
              </h5>
              <p className="font-semibold">Mid-America University</p>
              <p className="my-3">
                I am currently building and maintaing projects with specified
                tech stacks as required
              </p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
              <p className="font-semibold"> Professionally 5 years</p>
              <p className="my-3">
                I am a Software Engineer with 5 years of experience of
                designing, developing and maintaining web/mobile applications.
              </p>
            </div>
          </div>
        </div>

        {/*Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold text-white">
              Language & Framework
            </h5>
            <div className="my-2">
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl font-bold text-white">
              Tools & Softwares
            </h5>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Resume;
