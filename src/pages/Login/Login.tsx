import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Input, Label } from "../../components/UI/Input/Input";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import { loginApi } from "../../context/api";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errorType, setErrorType] = useState<string>("");

  const LogIn = () => {
    if (!errorHand) {
      handleSignIn();
    } else {
      errorHand();
    }
  };

  const handleSignIn = async () => {
    try {
      const results = await loginApi(email, password);
      if (results.success) {
        console.log("hellor", results);
        alert("i got her");
      } else {
        console.error("Failed to sign in");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);

  const errorHand = () => {
    if ((email.length || password.length) < 6) {
      setErrorMsg("Kindly Fill in all fields");
      setErrorType("all");
    } else if (!isValid) {
      setErrorMsg("Kindly input a valid email Address");
      setErrorType("email");
    } else if (password.length < 6) {
      setErrorMsg("Password Should be at least 6 characters");
      setErrorType("password");
    } else {
      return false;
    }
    return true;
  };
  return (
    <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto w-full ">
        <Logo color={"#0B468C"} />

        {/* //Boxes  */}
        <div className="mt-10 px-5 mx-auto w-full  lg:max-w-lg border-solid border-2 text-left border-gray-100 rounded-lg">
          <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
            👋Welcome back
          </h2>{" "}
          <p className="text-center">Log in to your account</p>
          <div className="mt-10 ">
            <button
              type="submit"
              onClick={() => alert("Coming Soon!")}
              className="flex w-full justify-center rounded-md px-3 py-3 text-sm font-semiboldborder-solid border-2 text-left border-gray-100 text-[#0B468C]"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                className="mr-4 fa-lg"
                size="lg"
              />
              Continue with Google
            </button>
          </div>
          <hr className="py-0.2 h-0 my-7 bg-gray-300 w-1/2 mx-auto" />
          {errorMsg && (
            <p className=" text-red-500 font-bold text-xs">
              <FontAwesomeIcon icon={faInfoCircle} className="" /> {errorMsg}
            </p>
          )}
          <div className="mt-5">
            <div>
              <Label
                htmlFor="email"
                label="Email Address"
                className="block text-sm font-medium text-gray-500 text-left"
              />
              <div className="mt-2">
                <Input
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
                    (errorMsg && errorType !== "password") ||
                    errorType === "email"
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-100 focus:ring-[#0B468C]"
                  }  mb-3`}
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    label="Password"
                    className="block text-sm font-medium leading-6 text-gray-500 text-left"
                  />
                </div>
                <div className="mt-2">
                  <Input
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
                      (errorMsg && errorType !== "email") ||
                      errorType === "password"
                        ? "ring-red-500 focus:ring-red-500"
                        : "ring-gray-100 focus:ring-[#0B468C]"
                    }  mb-3`}
                  />
                </div>{" "}
                <div className="text-sm mt-4">
                  <a
                    href="#"
                    className="font-semibold text-[#F9A242] hover:text-[#F9A242]-100"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={LogIn}
            className="flex my-6 w-full justify-center rounded-md bg-[#0B468C] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0B468C]-500 "
          >
            Log In
          </button>
          <div className="text-sm text-center pb-4">
            Don't Have an Account yet? &nbsp;
            <Link
              to="/register"
              className="font-semibold text-[#F9A242] hover:text-[#F9A242]-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
