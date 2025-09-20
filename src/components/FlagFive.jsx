import React from "react";
import red from "../img/red.png";
import blue from "../img/blue.webp";
const FlagFive = () => {
  return (
    <>
      <div className="size-screen bg-black flex itemcenter justify-center ">
        <div className="grid grid-cols-2 w-[700px] h-[500px] mt-5 mb-5">
          <div className="bg-white flex items-center justify-center">
            <img src={blue} alt="" className="w-[150px]" />
          </div>
          <div className="bg-[#DF0000]"></div>
          <div className="bg-[#2055A5]"></div>
          <div className="bg-white flex items-center justify-center ">
            <img src={red} alt="" className="w-[150px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlagFive;
