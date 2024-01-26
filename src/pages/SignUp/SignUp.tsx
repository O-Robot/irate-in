import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Label } from "../../components/UI/Input/Input";
import Logo from "../../components/Logo/Logo";
import { signupApi } from "../../context/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errorType, setErrorType] = useState<string>("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    setErrorType("");
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    setErrorType("");
    setLastName(e.target.value);
  };

  const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const errorCheck = () => {
    let validEmail = EMAIL_REGEX.test(email);
    let iserror = false;

    if ((firstName.length || lastName.length) < 3) {
      setErrorMsg("Kindly Fill in all fields");
      setErrorType("all");
      iserror = true;
    } else if (email.length < 3 || !validEmail) {
      setErrorMsg("Kindly input a valid email Address");
      setErrorType("email");
      iserror = true;
    } else if (password.length < 6) {
      setErrorMsg("Password Should be at least 6 characters");
      setErrorType("password");
      iserror = true;
    }

    if (iserror) {
      return false;
    }
    return true;
  };
  //SignUp User
  function SignUp() {
    if (errorCheck()) {
      console.log("No error, calling handleSignUp");
      handleSignUp();
    } else {
      toast.error("Fill in all Fields Correctly!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      console.log("Error", errorMsg);
      console.log("Error found, showing alert");
    }
  }

  const handleSignUp = async () => {
    try {
      const response = await signupApi(firstName, lastName, password, email);
      console.log(response);
      if (response.success) {
        navigate("/");
        console.log("SignUp successful");
      } else {
        console.warn("SignUp failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto w-full ">
        <Logo color={"#0B468C"} />

        {/* //Boxes  */}
        <div className="mt-10 px-5 mx-auto w-full  lg:max-w-lg border-solid border-2 text-left border-gray-100 rounded-lg">
          <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>{" "}
          <p className="text-center ">Create an Account</p>
          <div className="mt-7">
            {errorMsg && (
              <p className="pb-4 text-red-500 font-bold text-xs">
                <FontAwesomeIcon icon={faInfoCircle} className="" /> {errorMsg}
              </p>
            )}
            {/* Full Name */}
            <div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <Label
                    htmlFor="fname"
                    label="First Name"
                    className="block text-sm font-medium leading-6 text-gray-500 text-left"
                  />
                  <Input
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className={`block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-300 ${
                      errorMsg && errorType === "all"
                        ? "ring-red-500 focus:ring-red-500"
                        : "ring-gray-100 focus:ring-[#0B468C]"
                    }  mb-3`}
                  />
                </div>
                <div className="w-1/2">
                  <Label
                    htmlFor="lname"
                    label="Last Name"
                    className="block text-sm font-medium leading-6 text-gray-500 text-left"
                  />
                  <Input
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className={`block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-300 ${
                      errorMsg && errorType === "all"
                        ? "ring-red-500 focus:ring-red-500"
                        : "ring-gray-100 focus:ring-[#0B468C]"
                    }  mb-3`}
                  />
                </div>
              </div>
            </div>
            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                label="Email Address"
                className="block text-sm font-medium leading-6 text-gray-500 text-left"
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
                    setErrorType("");
                  }}
                  placeholder="Email Address"
                  className={`block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-300 ${
                    errorMsg && errorType !== "password"
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-100 focus:ring-[#0B468C]"
                  }  mb-3`}
                />
              </div>
              {/* Password */}
              <div>
                <Label
                  htmlFor="password"
                  label="Password"
                  className="block text-sm font-medium leading-6 text-gray-500 text-left"
                />
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMsg("");
                      setErrorType("");
                    }}
                    placeholder="***********"
                    className={`block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-300 ${
                      errorMsg || errorType === "password"
                        ? "ring-red-500 focus:ring-red-500"
                        : "ring-gray-100 focus:ring-[#0B468C]"
                    }  mb-3`}
                  />
                </div>{" "}
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={SignUp}
            className="flex my-10 w-full justify-center rounded-md bg-[#0B468C] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0B468C]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Create Account
          </button>
          <div className="text-sm text-center pb-5">
            Already Have an Account? &nbsp;
            <Link
              to="/"
              className="font-semibold text-[#F9A242] hover:text-[#F9A242]-100"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
