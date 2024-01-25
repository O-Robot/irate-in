import React from "react";

interface LMessageProps {
  message: string;
  timestamp: string;
}

const LMessage: React.FC<LMessageProps> = ({ message, timestamp }) => {
  return (
    <div className="flex items-start">
      <div className="bg-[#EAF9FE] p-3 rounded-r-lg flex flex-col max-w-[50%]">
        <span className="text-[#4F4F4F]">{message}</span>
        <span className="text-[#828282] text-[8px] pt-1">{timestamp}</span>
      </div>
    </div>
  );
};

export default LMessage;
