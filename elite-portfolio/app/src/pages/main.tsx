import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {
  faCircleNodes,
  faCode,
  faDisplay,
  faLaptopCode,
  faNetworkWired,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="p-0">
        <p className="bg-gray-900 p-6 text-left text-lg text-white">
          I am a Software Engineer with 5 years of experience of designing,
          developing and maintaining web/mobile applications. I possess a very
          diverse experience of creating multiple highly scalable applications
          using different tech stacks.
        </p>
      </div>
      <div className="p-3 mt-8">
        <h2 className="text-white text-xl font-bold">What I am doing</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 p-4">
        <div className="text-white bg-gray-900 rounded-lg py-4 pr-2 flex space-x-4">
          <FontAwesomeIcon
            className="h-12 ml-4 my-4"
            icon={faDisplay}
            style={{ color: "#fbbf24" }}
          />{" "}
          <span className="text-left font-bold">
            Frontend Devlopment{" "}
            <span>
              <p className="text-left font-normal">
                I can build a beautiful and scalable SPA using HTML,CSS and
                React.js
              </p>
              {""}
            </span>
          </span>
        </div>
        <div className="text-white bg-gray-900 rounded-lg py-4 pr-2 flex space-x-4">
          <FontAwesomeIcon
            className="h-12 ml-4 my-4"
            icon={faNetworkWired}
            style={{ color: "#fbbf24" }}
          />{" "}
          <span className="text-left font-bold">
            Backend Devlopment{" "}
            <span>
              <p className="text-left font-normal">
                Handle database, server, api using Express & other popular
                frameworks
              </p>
              {""}
            </span>
          </span>
        </div>

        <div className="text-white bg-gray-900 rounded-lg py-4 pr-2 flex space-x-4">
          <FontAwesomeIcon
            className="h-12 ml-4 my-4"
            icon={faSitemap}
            style={{ color: "#fbbf24" }}
          />
          <span className="text-left font-bold">
            API Devlopment{" "}
            <span>
              <p className="text-left font-normal">
                I can dvelop robust REST API using django-rest-api & Node API
              </p>
              {""}
            </span>
          </span>
        </div>
        <div className="text-white bg-gray-900 rounded-lg py-4 pr-2 flex space-x-4">
          <FontAwesomeIcon
            className="h-12 ml-4 my-4"
            icon={faCode}
            style={{ color: "#fbbf24" }}
          />
          <span className="text-left font-bold">
            Up to Date Coder{" "}
            <span>
              <p className="text-left font-normal">
                Constanly learning and building with new and popular frameworks
              </p>
              {""}
            </span>
          </span>
        </div>

        <div className="text-white bg-gray-900 rounded-lg py-4 pr-2 flex space-x-4">
          <FontAwesomeIcon
            className="h-12 ml-4 my-4"
            icon={faCircleNodes}
            style={{ color: "#fbbf24" }}
          />
          <span className="text-left font-bold">
            UI/UX Designer{" "}
            <span>
              <p className="text-left font-normal">
                Stunning user interface designer using Figma
              </p>
              {""}
            </span>
          </span>
        </div>
        <div className="text-white bg-gray-900 rounded-lg py-4 pr-2 flex space-x-4">
          <FontAwesomeIcon
            className="h-12 ml-4 my-4"
            icon={faLaptopCode}
            style={{ color: "#fbbf24" }}
          />
          <span className="text-left font-bold">
            SEO Optimization{" "}
            <span>
              <p className="text-left font-normal">
                Great at optimizing websites, web pages and content for the
                purposes of ranking higher in search engines, like Google
              </p>
              {""}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
