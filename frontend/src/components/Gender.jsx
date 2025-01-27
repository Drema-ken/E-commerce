import React from "react";
import female from "../assets/images/female.jpg";
import men from "../assets/images/men.jpg";
import kids from "../assets/images/kids.jpg";

const Gender = () => {
  const info = [
    { gender: "Men", image: men },
    { gender: "Women", image: female },
    { gender: "Kids", image: kids },
  ];
  return (
    <div className="grid w-full px-4 md:px-12 lg:px-12 py-4 grid-cols-1  sm:grid-cols-3 container mx-auto  justify-center gap-8  items-center">
      {info.map((item, index) => (
        <div
          key={index}
          className="shadow-lg  h-70  w-full  relative transform transition-transform duration-300 hover:scale-105  cursor-pointer"
        >
          <div className="absolute top-30 left-0 px-16">
            <h2 className="font-bold text-white text-xl ">{item.gender}</h2>
            <button className="cursor-pointer text-xs font-semibold text-red-400">
              View All
            </button>
          </div>
          <img
            src={item.image}
            className="object-cover w-full h-full rounded-lg "
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Gender;
