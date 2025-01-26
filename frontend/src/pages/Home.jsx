import React, { useEffect } from "react";
import { categories, mockData } from "../assets/mockData";
import cench from "../assets/images/cench.jpg";
import Services from "../components/Services";
import Gender from "../components/Gender";
import Footer from "../components/Footer";
import { setProducts } from "../redux/product-slice";
import { useDispatch, useSelector } from "react-redux";
import Topproducts from "../components/Topproducts";
import deadpool from "../assets/images/deadpool.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <>
      <div className="flex space-x-4 px-4 md:px-16 lg:px-24 py-4 flex-col md:flex-row container mx-auto ">
        <div className=" h-max w-full md:w-3/12 ">
          <header className="bg-red-500 p-3 text-white text-sm font-bold rounded-t-lg">
            SHOP BY CATEGORIES
          </header>
          <ul className="bg-gray-100 rounded-b-lg  ">
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
          <img
            src={deadpool}
            alt=""
            className="h-full w-full rounded object-cover "
          />
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
      <div className="container mx-auto py-12 ">
        <h2 className="font-bold text-center text-2xl p-7">Top Products</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 px-5 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {product.products.slice(0, 5).map((item, index) => {
            return <Topproducts product={item} key={index} />;
          })}
        </div>
      </div>
      <div className="container mx-auto  px-5 py-12 ">
        <h2 className="font-bold text-center text-2xl p-7">SHOP</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {product.products.slice(0, 10).map((item, index) => {
            return <Topproducts product={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
