import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EmptyMessages = () => {
  return (
    <div className="flex  justify-center  w-full h-[80vh] overflow-y-hidden sm:px-6 md:px-8 lg:ps-72 flex-col items-center align-middle">
      <div className="flex justify-center flex-col items-center text-[#828282] w-[308px] text-center ">
        <FontAwesomeIcon
          icon={faComments}
          className="font-light text-[#828282] fa-shake"
          size="5x"
        />
        <h1 className="font-light text-lg p-2">No Chats</h1>
        <p className="font-extralight text-sm px-2">
          You have not received or sent anyone a message.
        </p>
        <div className="p-6">
          <button className="py-3 px-6  block border-gray-200 rounded-lg text-sm bg-[#0B468C] text-white ">
            <FontAwesomeIcon icon={faAdd} className="pr-2" />
            Add a Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyMessages;
