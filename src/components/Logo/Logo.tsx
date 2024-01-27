import React from "react";
import home from "../../assets/home.png";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard");
  
  return (
    <Link to="/" className="flex items-end justify-center">
      <img className="h-10" src={home} alt="Logo" />{" "}
      <p className={`ml-1 ${isDashboard ? "text-white" : "text-[#0B468C]"}`}>
        Home
      </p>{" "}
    </Link>
  );
};

export default Logo;
