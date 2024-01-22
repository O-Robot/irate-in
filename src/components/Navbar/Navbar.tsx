import React from "react";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b border-[#F2F2F2] text-sm py-2.5 sm:py-4 lg:ps-64 ">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="me-5 lg:me-0 lg:hidden">
          <button type="button" className="text-blue-500">
            <span className="sr-only">Toggle Navigation</span>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="hidden sm:block">
            <div className="relative">
              <button className="py-2 px-4  block w-full border-gray-200 rounded-lg text-sm bg-[#0B468C] text-white ">
                <FontAwesomeIcon icon={faAdd} className="pr-2" />
                Add a Person
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-[#E0E0E0] text-gray-800 hover:bg-gray-100 "
            >
              <FontAwesomeIcon icon={faBell} className="fa-lg  " />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
