import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingBasket, FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
  increaseProductQuantity,
  removeFromCart,
  decreaseProductQuantity,
} from "../redux/cart-slice";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("uyo,Nigeria");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto  py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div className="  gap-2 md:grid-cols-2">
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3 ">
              <div className="flex justify-between px-1 py-2 shadow-md items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 shadow-md "
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt=""
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className=" w-full lg:text-lg  font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>${product.price.toFixed(2)}</p>
                      <div className="flex justify-center border border-gray-500 items-center">
                        <button
                          className=" cursor-pointer text-xl font-bold px-1.5 border-r"
                          onClick={(e) => {
                            const quantity = product.quantity;
                            if (quantity === 1) {
                              return;
                            }

                            dispatch(decreaseProductQuantity(product));
                          }}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button
                          className=" cursor-pointer text-xl px-1 border-l "
                          onClick={() =>
                            dispatch(increaseProductQuantity(product))
                          }
                        >
                          +
                        </button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="text-red-500 cursor-pointer hover:text-red-700 "
                        onClick={() => dispatch(removeFromCart(product))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border-gray-300 border mt-4 ">
              <h3 className="text-sm font-semibold mb-5">CART TOTALS</h3>
              <div className="flex justify-between mb-5 border-b  border-gray-400 pb-1">
                <span className="text-sm">Total Items: </span>
                <span> {cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b border-gray-400 pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  shipping to{" "}
                  <span className="text-sm font-bold">{address}</span>
                </p>

                <button
                  className="text-blue-500 hover:underline mt-1 ml-2 cursor-pointer"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4 ">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-red-600 cursor-pointer rounded-md text-white py-2 hover:bg-red-800"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col container mx-auto  justify-center items-center gap-1 h-96">
          <FaShoppingBasket className="text-[180px] text-red-600" />
          <p className="text-red-600 text-lg font-semibold">
            Your cart is empty
          </p>
          <p className="text-gray-600">Add something to make me happy</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
