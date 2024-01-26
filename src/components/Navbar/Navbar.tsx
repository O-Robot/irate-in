import React, { FC, InputHTMLAttributes } from "react";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useModal } from "../../context/ModalContext";
import { useAuth } from "../../context/UserContext";

interface NavbarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ showSidebar, setShowSidebar }) => {
  const { openModal } = useModal();
  const { auth } = useAuth();

  console.log("user", auth);
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b border-[#F2F2F2] text-sm py-2.5 sm:py-4 lg:ps-64 ">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="me-5 lg:me-0 lg:hidden">
          <button
            type="button"
            onClick={() => setShowSidebar(true)}
            className="text-blue-500"
          >
            <span className="sr-only">Toggle Navigation</span>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 ">
          <div className="hidden sm:block">
            <div className="relative">
              <button
                onClick={openModal}
                className="py-2 px-6  block w-full border-gray-200 rounded-lg text-sm bg-[#0B468C] text-white "
              >
                <FontAwesomeIcon icon={faAdd} className="pr-2" />
                Add a Person
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="w-[3rem] h-[3rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-[#E0E0E0] text-gray-800 hover:bg-gray-100 "
            >
              <FontAwesomeIcon icon={faBell} className="fa-lg  " />
            </button>
            <div className="w-auto h-[3rem] inline-flex border rounded-lg border-[#E0E0E0] p-2 justify-center items-center gap-3">
              <img
                className="inline-block h-[32px] w-[32px] rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
              <p className="text-[#4F4F4F]">John Doe </p>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-[#E0E0E0] fa-lg"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
