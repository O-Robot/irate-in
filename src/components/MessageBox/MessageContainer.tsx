import React from "react";
import InboxContainer from "./InboxContainer";

const MessageContainer = () => {
  return (
    <div className="grid grid-cols-12 items-center w-full h-[90vh] top-0  z-[80] overflow-y-hidden ">
      <div className="col-span-12 lg:col-span-5 md:col-span-4  !h-[100vh]">
        <InboxContainer />
      </div>
      {/* <!-- End Col --> */}

      <div className="col-span-12 lg:col-span-7 md:col-span-8 bg-red-600 !h-[100vh]"></div>
      {/* <!-- End Col --> */}
    </div>
  );
};

export default MessageContainer;
