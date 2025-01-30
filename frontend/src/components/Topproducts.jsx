import React, { useEffect } from "react";
import { FaPlus, FaStar } from "react-icons/fa";

import { addToCart } from "../redux/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Topproducts = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, productToAdd) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(productToAdd));
  };
  const cart = useSelector((state) => state.cart);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg  flex flex-col gap-1 h-full bg-white  w-full  relative    cursor-pointer rounded-md border-2 border-gray-300 transform transition-transform duration-300 hover:scale-105  ">
        <img
          src={product.image}
          className="rounded-md w-full object-cover h-48 mb-4"
          alt=""
        />
        <div className=" flex justify-between  px-1 pb-2 ">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold  text-sm md:text-lg">{product.name}</h3>
            <p className="text-gray-600 text-sm">${product.price}</p>
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
            <button
              onClick={(e) => {
                handleAddToCart(e, product);
              }}
              className="hidden text-sm md:group-hover:block cursor-pointer bg-red-600 md:p-2 hover:text-gray-600 text-white font-bold rounded-2xl self-end "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Topproducts;
