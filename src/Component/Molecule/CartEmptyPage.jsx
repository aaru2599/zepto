import { Link } from "react-router-dom";

const CartEmptyPage = () => {
  return (
    <>
      <div className=" mt-20 flex flex-col gap-3 justify-center items-center">
        <img src="https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-640,q-70"
        height={50}
        width={50} alt="" />
        
        <p>Your cart is empty</p>
        <Link to={"/"} className="px-4 py-2 border border-btnBack text-btnBack rounded-md font-semibold text-[0.9rem]  text-center">
        Browse Products
      </Link>
      </div>
    </>
  );
};

export default CartEmptyPage;
