import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Product from "./pages/Product";

const App = () => {
  const [searching, setSearching] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setSearching={setSearching} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/shop" element={<Shop searching={searching} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<Order />} />
        <Route path="/product/:productid" element={<Product />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
