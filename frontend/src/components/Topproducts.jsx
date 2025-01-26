import React from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import cench from "../assets/images/cench.jpg";
import ice from "../assets/images/ice.jpg";

const Topproducts = ({ product: { name, image, price }, key }) => {
  return (
    <div
      key={key}
      className="shadow-lg  flex flex-col gap-2 h-70  w-full  relative    cursor-pointer rounded-md border-2 border-gray-300"
    >
      <img
        src={ice}
        className="h-[70%] rounded-md w-full object-cover"
        alt=""
      />
      <div className=" flex justify-between  px-1 pb-2 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-600 text-sm">{price}</p>
          <div className="flex text-yellow-400">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
        </div>
        <div className="flex">
          <span className="bg-red-600 p-4 my-auto text-center self-end rounded-[50%] text-white cursor-pointer">
            <FaPlus className="text-xs" />
          </span>
          <span className="hidden">Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default Topproducts;
