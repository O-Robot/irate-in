import React from "react";
import InboxContainer from "./InboxContainer";
import MessageBox from "./MessageBox";

const MessageContainer = () => {
  return (
    <div className="grid grid-cols-12 items-center w-full h-[90vh] top-0  z-[80] !overflow-y-hidden ">
      <div className="col-span-12 lg:col-span-5 md:col-span-4  !h-[100vh] bg-[#F9FAFB] !sm:hidden">
        <InboxContainer />
        {/* <MessageBox /> */}
      </div>
      <div className="!sm:hidden md:block lg:block col-span-12 lg:col-span-7 md:col-span-8 bg-white !h-[100vh]  ">
        <MessageBox />
      </div>
    </div>
  );
};

export default MessageContainer;
