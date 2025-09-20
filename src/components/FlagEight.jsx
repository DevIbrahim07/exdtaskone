import React from "react";

const FlagEight = () => {
  return (
    <>
      <div className="size-screen bg-gray-400 flex flex-col items-center justify-center mt-5 mb-5 ">
        <div className="flex flex-col mt-5 mb-5 relative rounded-full overflow-hidden ">
          <div className="bg-[#DA291C] w-[100px] h-[300px] absolute"></div>
          <div className="w-[300px] h-[100px] bg-green-700"></div>
          <div className="w-[300px] h-[100px] bg-white"></div>
          <div className="w-[300px] h-[100px] bg-black"></div>
        </div>
      </div>
    </>
  );
};

export default FlagEight;
