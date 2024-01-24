import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.png";
import Logo from "../Logo/Logo";
import {
  faAngleRight,
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";

const Sidebar = () => {
  return (
    <section>
      <Navbar />

      <div className="transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 border-e border-gray-200 pt-7 pb-10 overflow-y-none lg:block lg:translate-x-0 bg-[#0B468C] h-[100vh]">
        {/* Logo  */}
        <div className="px-6">
          <Logo colour={"white"} />
        </div>
        {/* Logo  */}
        <nav className="p-6 mt-5 w-full flex flex-col flex-wrap h-[80%]">
          <ul className="space-y-1.5">
            <li className="bg-slate-300/10">
              <a
                className="flex items-center gap-x-3.5 py-4 px-5 text-sm text-white "
                href="#"
              >
                <FontAwesomeIcon icon={faComments} size="lg" />
                Messages
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-6">
          <button
            type="submit"
            onClick={() => alert("Coming Soon!")}
            className="flex w-full border-none justify-center rounded-md px-3 py-3 text-sm text-left bg-[#FFEBEB]  text-[#FF0000]"
          >
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="mr-4 fa-lg fa-rotate-180"
              size="lg"
            />
            Log out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
