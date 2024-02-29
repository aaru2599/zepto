const CartAddress = () => {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center">
          <div>
            <img
            height={34}
            width={34}
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.0/images/location-pin.svg"
              alt=""
            />
          </div>
          <div className="pb-1 pl-3 ">Enter your delivery address</div>
        </div>
        <button className="bg-btnBack rounded text-[0.8125rem] text-white">
          <div className="py-3 px-7 text tracking-[0.1rem]">{`Add Address To proceed`.toUpperCase()} </div>
        </button>
        <div className="border-y flex !items-center !content-center mt-1 pt-1 !pb-2 pl-3">
          <input type="checkbox" className="h-4 w-4" />
          <p className="block font-norms text-[0.875rem]  md:!text-body ml-2">
            Pay ₹50 from Zepto Wallet
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartAddress;
