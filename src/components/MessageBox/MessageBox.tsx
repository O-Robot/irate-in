import React, { useState } from "react";
import image from "../../assets/image.png";
import { Input, Label } from "../UI/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import LMessage from "./lMessage";
import RMessage from "./rMessage";
import { toast } from "react-toastify";
import { useAuth } from "../../context/UserContext";

const MessageBox = () => {
  const { auth } = useAuth();
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    toast.info("Sending Message...", {
      position: "top-right",
      autoClose: 1000,
      toastId: "sending",
      hideProgressBar: true,
    });
    setTimeout(() => {
      toast.error("Sending Failed! Contact Support.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        toastId: "failed",
      });
    }, 2000);
  };
  return (
    <>
      {auth.userm ? (
        <section
          id="selectedMessage"
          className="border-e border-gray-200 pt-7 pb-10 overflow-y-hidden lg:block lg:translate-x-0 h-[100vh] flex-col flex-wrap"
        >
          <div className="flex items-center gap-3 px-10 py-5">
            <img
              className="inline-block h-[40px] w-[40px] rounded-[16px]"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
              alt="Image Description"
            />
            <div className="flex flex-col w-full">
              <p className="text-xl leading-snug font-normal text-[#4F4F4F]">
                {auth.userm?.name}
              </p>

              <span className="text-[12px] font-normal text-[#008000] ">
                Online
              </span>
            </div>
          </div>
          <hr className="py-0.2 h-0 bg-gray-300 w-full mx-auto" />
          {/* Message Body  */}
          <section className=" p-6 w-full overflow-y-auto h-[62vh]">
            <div className="w-[100%]">
              <span className=" block text-[12px] font-medium text-[#828282] text-center ">
                Nov 23, 2023
              </span>
              <img
                className="w-full rounded-[16px] pt-4"
                src={image}
                alt="Image Description"
              />
              <b className=" block text-[16px] font-medium text-[#4F4F4F] pt-3">
                2 Bedroom Duplex
              </b>
            </div>

            {/* Messages  */}
            <div className="flex flex-col gap-y-4 py-5">
              <LMessage message="Hello! How are you?" timestamp="10:15 AM" />
              <RMessage
                message="I'm doing well, thank you! How about you?"
                timestamp="10:18 AM"
              />
            </div>
          </section>
          {/* Message Body  */}
          {/* Message Send  */}
          <div id="SendMessage" className="p-6 mb-10">
            <div>
              <Label
                htmlFor="search"
                label="Search"
                className="block text-sm font-medium sr-only leading-6 text-gray-500 text-left"
              />
              <div className="flex rounded-lg shadow-sm">
                <Input
                  id="message"
                  name="message"
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Write your Message"
                  className="block w-full text-gray-900 shadow-sm placeholder:text-[#828282] pe-14 py-5 px-4 bg-[#F8F8F8] rounded-md text-sm  focus:z-10 focus:outline-none focus:border-none focus:ring-none  "
                />

                <button
                  type="button"
                  onClick={() => {
                    handleSendMessage();
                  }}
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-[#F8F8F8]"
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-[#1A75E0] fa-xl"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Message Send  */}
        </section>
      ) : (
        <section id="noSelectedMessage">
          <div className="flex  justify-center  w-full h-[80vh] overflow-y-hidden sm:px-6 md:px-8  flex-col items-center align-middle ">
            <div className="flex justify-center flex-col items-center text-[#828282] w-[308px] text-center ">
              <FontAwesomeIcon
                icon={faComments}
                className="font-light text-[#828282]"
                size="5x"
              />

              <p className="text-sm fa-thin pt-6">
                Click on chat to read conversation
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MessageBox;
