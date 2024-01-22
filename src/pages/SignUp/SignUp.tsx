import React from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "../../components/UI/Input/Input";
import home from "../../assets/home.png";
import Logo from "../../components/Logo/Logo";

const SignUp = () => {
  return (
    <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto w-full ">
        <Logo color={"#0B468C"} />

        {/* //Boxes  */}
        <div className="mt-10 px-5 mx-auto w-full  lg:max-w-lg border-solid border-2 text-left border-gray-100 rounded-lg">
          <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>{" "}
          <p className="text-center">Create an Account</p>
          <div className="mt-10">
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
                    className="block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-300  focus:ring-[#0B468C] mb-3"
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
                    className="block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-300  focus:ring-[#0B468C] mb-3"
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
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-300  focus:ring-[#0B468C] mb-3"
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
                    name="password"
                    type="password"
                    placeholder="***********"
                    className="block w-full bg-[#F8F8F8] rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-300 focus:ring-[#0B468C] mb-3"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={() => alert("Logged In")}
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
