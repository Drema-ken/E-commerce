import React from "react";
import { categories } from "../assets/mockData";
import cench from "../assets/images/cench.jpg";
import Services from "../components/Services";
import Gender from "../components/Gender";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div className="flex space-x-4 px-4 md:px-16 lg:px-24 py-4 flex-col md:flex-row container mx-auto ">
        <div className=" h-max w-full md:w-3/12 ">
          <header className="bg-red-500 p-3 text-white text-sm font-bold rounded">
            SHOP BY CATEGORIES
          </header>
          <ul className="bg-gray-100 rounded  ">
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="capitalize p-3 flex h-full  items-center text-sm font-medium cursor-pointer  transform  transition-transform duration-300 hover:bg-gray-400 hover:scale-103 rounded hover:text-white hover:text-md  hover:font-semibold"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative w-full md:w-9/12 mt-8 md:mt-0 h-96 ">
          <img src={cench} alt="" className="h-full w-full rounded " />
          <div className=" absolute top-16 left-0 text-white px-4">
            <p className="text-white mb-4">Drema - e-Shop</p>
            <h1 className="text-3xl font-bold">WELCOME TO E-SHOP</h1>
            <h2 className="text-xl mt-2.5 font-bold text-gray-800">
              MILLION+ PRODUCTS
            </h2>
            <button className="bg-red-600 rounded w-full h-13 px-8 py-1.5 text-white mt-4 hover:bg-red-700 font-bold transform transition-transform duration-300 hover:scale-105 uppercase cursor-pointer">
              shop now
            </button>
          </div>
        </div>
      </div>
      <Services />
      <Gender />
    </>
  );
};

export default Home;
