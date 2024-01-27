import React from "react";

const PersonMessage = (props: any) => {
  const { name, email, id } = props;
  return (
    <div className="flex items-center gap-3 py-3 hover:bg-slate-400/50 w-full">
      <img
        className="inline-block h-[40px] w-[40px] rounded-[16px]"
        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
        alt="Image Description"
      />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <p className="text-xl leading-snug font-normal text-[#4F4F4F]">
            {name}
          </p>
          <span className="text-[#000] text-[12px] font-normal ">3:45 PM</span>
        </div>

        <div className="flex items-center justify-between ">
          <span className="text-nowrap block text-[12px] font-medium text-[#4F4F4F] ">
            Kindly check out these images, they are very...
          </span>
          <span className="text-[10px] font-normal rounded-full py-1 px-1.5 bg-[#1A75E0] text-white">
            12
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonMessage;
