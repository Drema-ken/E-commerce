import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import NavDir from "./NavDir";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full rounded border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className=" flex space-between  space-x-4 center">
          <Link to="/cart">
            <FaShoppingCart className="my-3 text-lg"></FaShoppingCart>
          </Link>
          <button className="hidden md:block"> Login - Register</button>
          <button className="hidden md:block">
            <FaUser></FaUser>
          </button>
        </div>
      </div>

      <NavDir />
    </nav>
  );
};

export default Navbar;
