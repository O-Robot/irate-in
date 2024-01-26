import React, { ReactNode } from "react";
import { Input, Label } from "../Input/Input";
import { useModal } from "../../../context/ModalContext";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { showModal, closeModal } = useModal();
  return (
    <>
      {showModal && (
        <section className="w-full h-full bg-slate-900/50  fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
          <div className="flex justify-center w-full h-[100vh] overflow-y-hidden sm:px-6 md:px-8 lg:ps-80 flex-col items-center align-middle">
            <div className="border lg:w-[40%] sm:w-[100%] rounded-lg shadow-sm  bg-white ">
              <div className="p-4 sm:p-7">
                <div className="text-left">
                  <h2 className="block text-2xl font-bold text-[#4F4F4F] ">
                    Invite a Person
                  </h2>
                </div>

                <div className="mt-5">
                  <div className="grid gap-y-2">
                    <div>
                      <Label
                        htmlFor="email"
                        label="Email Address"
                        className="block text-sm font-medium text-gray-500 text-left"
                      />
                      <div className="mt-2">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="E.g. john@gmail.com"
                          className="block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-300  focus:ring-[#0B468C] mb-3"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="name"
                        label="Name (Optional)"
                        className="block text-sm font-medium leading-6 text-gray-500 text-left"
                      />
                      <div className="mt-2 ">
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="E.g. John"
                          className="block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-300 focus:ring-[#0B468C] mb-3"
                        />
                      </div>
                    </div>

                    <div className="flex my-5">
                      <button
                        type="submit"
                        onClick={closeModal}
                        className="w-1/2 py-3 px-4 mr-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border- bg-white text-[#828282] hover:text-[#0B468C] hover:border-[#0B468C]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 py-3 px-4 ml-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#0B468C] text-white hover:bg-white hover:text-[#0B468C] hover:border-[#0B468C] disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Add Person
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
