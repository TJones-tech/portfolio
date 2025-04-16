import React from "react";
import DashboardLayout from "../layout/layout";
import Bar from "../src/components/Bar/Bar";
import { languages, tools } from "@/data";

const Resume: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="px-6 py-2">
        {/* Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2 text-white">
          <div>
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div className="mb-6">
              <h5 className="my-2 text-xl font-bold">
                Bachelor of Business Administration
              </h5>
              <p className="font-semibold">Mid-America Christian University</p>
              <p className="my-3">
                Comprehensive business education with focus on technology
                integration
              </p>
            </div>
            <div>
              <h5 className="my-2 text-xl font-bold">
                Associate of Business Administration
              </h5>
              <p className="font-semibold">Connors State College</p>
              <p className="my-3">
                Foundation in business principles and management
              </p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Professional Experience</h5>
            <div className="mb-6">
              <h5 className="my-2 text-xl font-bold">
                Software Engineer & Project Manager
              </h5>
              <p className="font-semibold">Triumph | Dec 2022 - Present</p>
              <ul className="my-3 list-disc pl-5">
                <li>
                  Spearheaded frontend development of "LoadPay" payment platform
                </li>
                <li>
                  Architected headless CMS solutions with 35% performance
                  improvement
                </li>
                <li>
                  Engineered AI-powered features for automated document
                  processing
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="my-2 text-xl font-bold">Web Developer</h5>
              <p className="font-semibold">
                Texas Christian University | May 2022 - Feb 2023
              </p>
              <ul className="my-3 list-disc pl-5">
                <li>Engineered university-wide website themes and plugins</li>
                <li>
                  Created responsive, accessible designs compliant with WCAG
                  standards
                </li>
                <li>Implemented custom WordPress blocks and templates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold text-white">
              Languages & Frameworks
            </h5>
            <div className="my-2">
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl font-bold text-white">
              Tools & Software
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
