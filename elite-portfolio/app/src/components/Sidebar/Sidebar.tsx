import React from "react";
import CloudDownloadTwoToneIcon from "@mui/icons-material/CloudDownloadTwoTone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
  return (
    <div className="p-4">
      <div className="text-center my-1">
        <a href="#" className="relative block">
          <img
            alt="Terrance Jones"
            src="https://mail.google.com/mail/u/0?ui=2&ik=046f2490a3&attid=0.1&permmsgid=msg-a:r-8787582277496189245&th=18bdebd977dfada6&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9Bm9YCxmB1lYd1YjL0JzaCMb99etybaeOuK3X5p2Nn1SNcZGqqOPFVfmAvfStx0LkEZx5l8VjubuMvRv0ptV7eSPxORpMO7qudShb9JP1LPIy2o_cZR9sRN4c&disp=emb&realattid=18bdebd8bda56833ef51"
            className="mx-auto object-cover rounded-full h-40 w-40"
          />
        </a>
        <div className="my-4 text-2xl text-center text-amber-400">
          <span className="text-center text-white"> 𝓣𝓮𝓻𝓻𝓪𝓷𝓬𝓮</span> 𝓙𝓸
          <span className="text-rose-950">𝓷</span>𝓮𝓼
        </div>
        <div className="text-center items-center">
          <button
            type="button"
            className="py-2 px-4 bg-gray-900 hover:bg-gray-500 focus:ring-gray-300 focus:ring-offset-yellow-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            Web Developer
          </button>
          <button
            type="button"
            className="py-2 px-4 mt-4 flex bg-gray-900 hover:bg-gray-500 focus:ring-gray-300 focus:ring-offset-yellow-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            <div className="text-center ml-12">
              <span className="pr-1">
                <CloudDownloadTwoToneIcon />
              </span>{" "}
              Download Resume
            </div>
          </button>
        </div>

        <div className="text-center flex space-x-14">
          <a href="https://www.linkedin.com/in/terrance-jones-1b690b23a/">
            <FontAwesomeIcon
              className="bg-amber-400 rounded-lg h-14 w-14 p-4 ml-5 my-8"
              icon={faLinkedin}
            />
          </a>
          <a href="https://github.com/TJones-tech">
            <FontAwesomeIcon
              className="bg-amber-400 rounded-lg h-14 w-14 p-4 my-8"
              icon={faGithub}
            />
          </a>
          <a>
            <FontAwesomeIcon
              className="bg-amber-400 rounded-lg h-14 w-14 p-4 my-8"
              icon={faEnvelope}
            />
          </a>
        </div>
        <div className="rounded-lg bg-gray-900 text-center text-white  p-4">
          <p className="pb-2">Dallas, Texas</p>
          <p className="pb-2">t.jones50.tj@gmail.com</p>
          <p className="pb-2">Contact me</p>
        </div>
        <div>
          <button
            type="button"
            className="py-2 px-8 bg-rose-950 text-center text-white rounded-full my-8 800 hover:bg-gray-500 focus:ring-gray-300 focus:ring-offset-yellow-800 transition ease-in duration-200 focus:ring-2 focus:ring-offset-2"
          >
            Email me
          </button>
        </div>
      </div>
    </div>
  );
}
