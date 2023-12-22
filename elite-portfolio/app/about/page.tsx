import React from "react";

import {
  faCircleNodes,
  faCode,
  faDisplay,
  faLaptopCode,
  faNetworkWired,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "@/data";
import ServiceCard from "../src/components/ServiceCard/ServiceCard";

const Main: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 bg-gray-900 p-6 text-base font-medium text-white">
        I am a Software Engineer with 5 years of experience of designing,
        developing and maintaining web/mobile applications. I possess a very
        diverse experience of creating multiple highly scalable applications
        using different tech stacks.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-black"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl text-white font-semibold tracking-wide">
          What I am Doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-900 rounded-lg text-white md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
