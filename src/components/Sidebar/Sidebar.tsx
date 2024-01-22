import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.png";
import Logo from "../Logo/Logo";

const Sidebar = () => {
  return (
    <div className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 bg-[#0B468C]">
      {/* Logo  */}
      <div className="px-6">
        <Logo colour={"white"} />
      </div>
      {/* Logo  */}
      <nav className="p-6 mt-5 w-full flex flex-col flex-wrap">
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
    </div>
  );
};

export default Sidebar;
