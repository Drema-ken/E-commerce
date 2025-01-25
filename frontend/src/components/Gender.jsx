import React from "react";
import cench from "../assets/images/cench.jpg";

const Gender = () => {
  const info = [{ gender: "Men" }, { gender: "Women" }, { gender: "Kids" }];
  return (
    <div className="grid w-full px-4 md:px-12 lg:px-12 py-4 grid-cols-1  sm:grid-cols-3 container mx-auto  justify-center gap-8  items-center">
      {info.map((item, index) => (
        <div
          key={index}
          className="shadow-lg  h-64 w-[80vw]  w-full  relative transform transition-transform duration-300 hover:scale-105  cursor-pointer"
        >
          <div className="absolute top-16 left-0 px-16">
            <h2 className="font-bold text-white text-xl">{item.gender}</h2>
            <button className="cursor-pointer  ">View All</button>
          </div>
          <img
            src={cench}
            className="w-full h-full rounded-lg object-cover"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Gender;
