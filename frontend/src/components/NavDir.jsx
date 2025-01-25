import React from "react";
import { Link } from "react-router-dom";

const NavDir = () => {
  return (
    <ul className="flex  items-center justify-center space-x-10 text-sm py-3 font-bold ">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/shop" className="hover:underline">
        Shop
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
      <Link to="/about" className="hover:underline">
        About
      </Link>
    </ul>
  );
};

export default NavDir;
