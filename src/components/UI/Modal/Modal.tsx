import React, { ReactNode, useState } from "react";
import { Input, Label } from "../Input/Input";
import { useModal } from "../../../context/ModalContext";
import { addPerson } from "../../../context/api";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { showModal, closeModal } = useModal();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const errorCheck = () => {
    let validEmail = EMAIL_REGEX.test(email);
    let iserror = false;

    if (email.length < 3 || !validEmail) {
      setErrorMsg("Kindly input a valid email Address");

      iserror = true;
    }

    if (iserror) {
      return false;
    }
    return true;
  };
  function adPerson() {
    if (errorCheck()) {
      console.log("No error, calling handleSignUp");
      handleAddPerson();
    }
  }

  const handleAddPerson = async () => {
    try {
      const response = await addPerson(email, name);

      if (response.success) {
        console.log("Added successful");
        closeModal();
      } else {
        console.warn("Adding failed");
      }
    } catch (error) {
      console.error("Error during adding:", error);
    }
  };

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
                  {errorMsg && (
                    <p className=" text-red-500 font-bold text-xs pb-2">
                      <FontAwesomeIcon icon={faInfoCircle} className="" />{" "}
                      {errorMsg}
                    </p>
                  )}
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
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setErrorMsg("");
                          }}
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                        onClick={adPerson}
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
