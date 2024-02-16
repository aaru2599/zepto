import React from "react";

const CardButton = () => {
  return (
    <>
      <div className="flex h-[32px] items-center justify-between  bg-btnBack rounded-md ">
        <button className="font-bold px-3  text-white border-r-2 text-[1rem] border-btnBorder ">
          -
        </button>
        <div className="font-bold px-2 text-[1rem] text-white">1</div>
        <button className="font-bold px-3  border-l-2 text-[1rem] text-white border-btnBorder">
          +
        </button>
      </div>
    </>
  );
};

export default CardButton;
