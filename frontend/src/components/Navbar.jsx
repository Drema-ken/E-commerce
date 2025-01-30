import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShopify, FaShoppingCart, FaUser } from "react-icons/fa";
import NavDir from "./NavDir";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";

const Navbar = ({ setSearching }) => {
  const [signup, setSignUp] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);
  const productsInCart = cart.products;
  const navigate = useNavigate();
  const searchProducts = (search) => {
    const productSearched = product.products.filter((item) =>
      item.name.toLowerCase().match(search)
    );
    navigate("/shop");
    setSearching(true);
    console.log(productSearched);
  };

  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between">
        <div className="text-lg font-bold flex gap-1 items-center">
          <Link to="/" className="flex">
            <FaShopify className="text-3xl text-red-500 cursor-pointer" />
            <span className="hidden md:block">e-SHOP</span>
          </Link>
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
          <Link to="/cart" className="relative">
            <FaShoppingCart className="my-3 text-xl"></FaShoppingCart>
            {productsInCart.length > 0 && (
              <span className="absolute top-1 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {productsInCart.length}
              </span>
            )}
          </Link>

          <button
            className="hidden md:block cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {" "}
            Login | Register
          </button>
          <button
            className="block cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <FaUser></FaUser>
          </button>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Register
          setIsModalOpen={setIsModalOpen}
          setSignUp={setSignUp}
          signup={signup}
        />
        <Login
          setIsModalOpen={setIsModalOpen}
          setSignUp={setSignUp}
          signup={signup}
        />
      </Modal>
      <NavDir />
    </nav>
  );
};

export default Navbar;
