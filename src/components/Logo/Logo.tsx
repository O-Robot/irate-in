import React from "react";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";

const Logo = (props: any) => {
  const { colour } = props;
  return (
    <Link to="/" className="flex items-end justify-center">
      <img className="h-10" src={home} alt="Logo" />{" "}
      <p className={`ml-1 text-[${colour}]`}>Home</p>{" "}
    </Link>
  );
};

export default Logo;
