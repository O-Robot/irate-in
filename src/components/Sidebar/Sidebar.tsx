import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/home.png";
import Logo from "../Logo/Logo";
import {
  faAngleRight,
  faArrowRightFromBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import { logUserOut } from "../../context/api";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <section>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div
        className={`transform ${
          showSidebar ? "block w-full" : "hidden w-64 "
        }  fixed top-0 start-0 bottom-0 z-[60] border-e lg:w-64 border-gray-200 pt-3 pb-10 overflow-y-none lg:block lg:translate-x-0 bg-[#0B468C] h-[100vh]`}
      >
        {/* Logo  */}
        {showSidebar && (
          <div className="w-full lg:hidden pr-8 pt-2 flex items-center">
            <div className="ml-auto cursor-pointer">
              <button onClick={() => setShowSidebar(false)}>
                <FontAwesomeIcon icon={faXmark} className="text-white" />
              </button>
            </div>
          </div>
        )}
        <div className="px-6">
          <Logo colour={"white"} />
        </div>
        {/* Logo  */}
        <nav className="p-6 h-[80%] mt-5 w-full flex flex-col flex-wrap lg:h-[83%]">
          <ul className="space-y-1.5">
            <li className="bg-slate-300/10">
              <Link
                className="flex items-center gap-x-3.5 py-4 px-5 text-sm text-white "
                onClick={() => setShowSidebar(false)}
                to={"/dashboard"}
              >
                <FontAwesomeIcon icon={faComments} size="lg" />
                Messages
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-6">
          <button
            type="submit"
            onClick={() => {
              logUserOut();
              navigate("/");
            }}
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
