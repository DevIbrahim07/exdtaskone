import React from "react";

const FlagSix = () => {
  return (
    <>
      <div className="size-screen bg-gray-400 flex flex-col items-center justify-center mt-5 mb-5 ">
        <div className="flex flex-col mt-5 mb-5 relative">
          <div
            className="absolute top-0 left-0 h-0 w-0"
            style={{
              borderTop: "150px solid transparent",
              borderBottom: "150px solid transparent",
              borderLeft: "250px solid #DA291C",
            }}
          ></div>
          <div className="w-[700px] h-[100px] bg-black"></div>
          <div className="w-[700px] h-[100px] bg-white"></div>
          <div className="w-[700px] h-[100px] bg-green-700"></div>
        </div>
      </div>
    </>
  );
};

export default FlagSix;
