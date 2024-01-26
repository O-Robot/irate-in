import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Input, Label } from "../../components/UI/Input/Input";
import Logo from "../../components/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../context/api";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useAuth } from "../../context/UserContext";
import { setCookie } from "../../context/utility";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errorType, setErrorType] = useState<string>("");

  const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const errorCheck = () => {
    let validEmail = EMAIL_REGEX.test(email);
    let iserror = false;

    if (email.length < 3 || !validEmail) {
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

  function LogIn() {
    if (errorCheck()) {
      console.log("No error, calling handleSignUp");
      handleSignIn();
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

  const handleSignIn = async () => {
    try {
      const response = await loginApi(password, email);
      const access = response?.access;
      const refresh = response?.refresh;
      const userInfo: { email: string; fullname: string } = jwtDecode(refresh);
      console.log("info", userInfo.email, userInfo.fullname);
      setCookie("id1", access, 3);
      setCookie("id2", refresh, 3);
      const updatedUserDetails = {
        user: {
          id: "",
          fullname: userInfo.fullname,
          userEmail: userInfo.email,
        },
      };
      setAuth(updatedUserDetails);
      navigate("/dashboard");
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
