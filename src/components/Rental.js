import React from "react";
import {BsStar} from "react-icons/bs"
const Rental = ({ title, image, price }) => {
  return (
    <div className="">
      <div className="relative">
        <div className="grad absolute w-full h-full rounded-b-[1.3rem] "></div>
        <div className="flex">
          {/* Bacground */}
          <img src={image} alt="" className=" object-cover rounded-[1.3rem]" />
        </div>
        {/* Title */}
        <div
          className="absolute text-white font-bold 
      bottom-6 left-6 text-[22px]
      flex items-center gap-4">
          {title}
          <span>&#x2022;</span>
          <p className="text-[18px] text-slate-200">${price}</p>
        </div>
      </div>
      {/* Description */}
      <div className="pt-3">
        {/* Left */}
        <div className="">
          <p className="max-w-[17rem] font-semibold text-[17px]">
            This is a rare find.
          </p>
          <p className="max-w-[17rem] text-[17px] -mt-1 text-gray-500">
            Jan 28 - Aug 9
          </p>
          <p className="max-w-[17rem] font-semibold text-[17px]">${price}</p>
        </div>
        {/* Right */}
        <div className="flex item-center">
          <BsStar />
          <p>5.0</p>
        </div>
      </div>
    </div>
  );
};

export default Rental;
