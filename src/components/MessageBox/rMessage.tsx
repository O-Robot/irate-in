import React from "react";

interface RMessageProps {
  message: string;
  timestamp: string;
}

const RMessage: React.FC<RMessageProps> = ({ message, timestamp }) => {
  return (
    <div className="flex items-end justify-end">
      <div className="bg-[#EAF9FE] text-white p-3 rounded-l-lg flex flex-col max-w-[50%]">
        <span className="text-[#4F4F4F]">{message}</span>
        <span className="text-[#828282] text-[8px] ml-2 flex items-end justify-end">
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default RMessage;
