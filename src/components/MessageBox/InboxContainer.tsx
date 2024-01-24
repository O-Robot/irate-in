import React from "react";
import { Input, Label } from "../UI/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PersonMessage from "./PersonMessage";

const InboxContainer = () => {
  return (
    <div className="w-full">
      <header className="pt-5 px-4 sm:px-6 md:px-8 lg:ps-72">
        <h1 className="block text-lg  text-gray-800 sm:text-3xl dark:text-white">
          Inbox
        </h1>
        <div className="">
          <Label
            htmlFor="search"
            label="Search"
            className="block text-sm font-medium sr-only leading-6 text-gray-500 text-left"
          />
          <div className="relative my-4">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <FontAwesomeIcon icon={faSearch} className="text-[#E0E0E0]" />
            </div>
            <Input
              name="search"
              type="text"
              placeholder="Search for message"
              className="block w-full bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-[#E0E0E0] placeholder:text-[#828282] mb-3 py-3 px-4 ps-11 border-[#828282] rounded-md text-sm focus:border-[#0B468C] focus:ring-[#0B468C] "
            />
          </div>
        </div>
      </header>
      <hr className="py-0.2 h-0 mt-7 bg-gray-300 w-full mx-auto" />
      <section className="pt-2 px-4 sm:px-6 md:px-8 lg:ps-72 mt-3">
        <PersonMessage />
        <PersonMessage />
      </section>
    </div>
  );
};

export default InboxContainer;
