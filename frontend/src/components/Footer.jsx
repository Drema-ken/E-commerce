import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" flex flex-col py-8 px-4 bg-gray-900 md:px-16 lg:px-24 border text-white  w-full ">
      <div className=" grid grid-cols-1 md:grid-cols-3 container mx-auto">
        <div className=" p-4 flex flex-col gap-2 ">
          <h2 className="text-xl font-bold">e-Shop</h2>
          <p className="text-sm ">
            Your one-stop shop for all your needs. Shop with us and experience
            the best online shopping experience
          </p>
        </div>
        <div className=" hidden md:flex md:flex-col md:items-center gap-2 p-4">
          <h1 className=" font-bold text-lg">Quick Links</h1>
          <ul className="text-sm space-y-2">
            <li className="">
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col py-4 px-2 gap-3">
          <h1 className="font-bold text-md">Follow Us</h1>
          <div className="flex space-x-4 text-lg">
            <a className="hover:text-gray-400" href="">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Your email"
              className="border h-full rounded-l-lg outline-none hover:border-white bg-gray-800 border-gray-600 w-full px-2 "
            />
            <button className="bg-red-600 text-white rounded-r-lg p-3 cursor-pointer   text-center ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" container mx-auto flex flex-col md:flex-row justify-between p-3 text-sm">
        <p>&copy;2025 e-Shop. All rights reserved</p>
        <p className="flex space-x-4 ">
          <a href="" className="hover:underline">
            Privacy Policy
          </a>{" "}
          <a className="hover:underline" href="">
            Terms of service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
