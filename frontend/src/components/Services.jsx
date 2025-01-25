import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaMoneyBillWave,
  FaLock,
  FaTag,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on products",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12  space-x-4 px-4 md:px-16 lg:px-24 py-4 flex-col md:flex-row container mx-auto ">
      <div className="  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-6 gap-4">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className=" justify-center items-center flex flex-col space-y-2 p-2 pb-4 text-center rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 uppercase cursor-pointer"
            >
              {service.icon}{" "}
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
