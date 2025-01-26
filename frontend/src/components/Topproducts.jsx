import React from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import cench from "../assets/images/cench.jpg";
import ice from "../assets/images/ice.jpg";

const Topproducts = ({ product: { name, image, price }, key }) => {
  return (
    <div
      key={key}
      className="shadow-lg  flex flex-col gap-1 h-full bg-white  w-full  relative    cursor-pointer rounded-md border-2 border-gray-300 transform transition-transform duration-300 hover:scale-105  "
    >
      <img
        src={ice}
        className="rounded-md w-full object-cover h-48 mb-4"
        alt=""
      />
      <div className=" flex justify-between  px-1 pb-2 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold  text-sm md:text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{price}</p>
          <div className="flex text-yellow-400 text-sm">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
        </div>
        <div className="flex group">
          <span className="bg-red-600 group-hover:hidden p-2 md:p-3 my-auto text-center self-end rounded-[50%] text-white cursor-pointer">
            <FaPlus className="text-xs group-hover:hidden " />
          </span>
          <button className="hidden md:group-hover:block cursor-pointer bg-red-600 md:p-2 hover:text-gray-600 text-white font-bold rounded-lg self-end ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topproducts;
