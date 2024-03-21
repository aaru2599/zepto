import React from "react";

const CartOffer = () => {
  return (
    <div className=" bg-white rounded">
      <div className="  h-16 flex items-center cursor-default px-4  ">
        <div className="">
          <div className="!text-sm !font-body  ">
            <img src="assets/percent.png" alt="" />
          </div>
        </div>
        <div className="flex justify-between w-full items-center cursor-pointer">
          <p className="block font-norms text-sm   pl-3 ">
            Avail Offers / Coupons
          </p>
        </div>
      <div ><img src="assets/Pause.png" alt="" /></div>
      </div>
      
    </div>
  );
};

export default CartOffer;
