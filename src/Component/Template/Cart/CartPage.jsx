import { useDispatch, useSelector } from "react-redux";
import CartAddress from "../../Molecule/CartAddress";
import CartBill from "../../Molecule/CartBill";
import CartDelSeftyInst from "../../Molecule/CartDelSeftyInst";
import CartDeliveryInstruction from "../../Molecule/CartDeliveryInstruction";
import CartDeliveryPartner from "../../Molecule/CartDeliveryPartner";
import CartHeader from "../../Molecule/CartHeader";
import CartOffer from "../../Molecule/CartOffer";
import CartProduct from "../../Molecule/CartProduct";
import { resetCartData } from "../../Redux/Cart/CartSlice";
import CartEmptyPage from "../../Molecule/CartEmptyPage";
import Modal from "../../Atoms/Modal/Modal";
import { useState } from "react";
import MainHeader from "../../Molecule/MainHeader";
import { Link, json } from "react-router-dom";
import SuggestionCard from "../../Molecule/SuggestionCard";
import { recentButton } from "../../Atoms/Modal/recent.slice";
import { useEffect } from "react";

const CartPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(true);
  // const [jsonData, SetSavedMoney] = useState(0);
  const cartList = useSelector((state) => state.myCart);
  const cartData = cartList;
  const dispatch = useDispatch();
  ////////////console.log("cartData.data", cartData.data.length);

  const handleConfirmRemove = (confirmed) => {
    setShowModal(false);
    setConfirm(confirmed); // Update confirm state based on user's confirmation
    if (confirmed) {
      dispatch(resetCartData()); // Reset cart data only if user confirms
      localStorage.removeItem("selectCart");
      dispatch(recentButton());
    }
  };

  const onEmptyData = () => {
    setShowModal(true);
  };

    const jsonData = JSON.parse(localStorage.getItem("saved-money"))
    // SetSavedMoney(jsonData);
  // //console.log("CartPahe.cartDatacartDatacartData",cartData);
  return (
    <div className="relative bg-[#f5f1f7]">
      <Modal
        show={showModal}
        modalHeading={"Do you want to clear cart.?"}
        handleConfirm={handleConfirmRemove}
      />
      <div className="mb-4 md:block hidden sticky  top-0">
        <MainHeader
          cartData={cartData}
          address={false}
          logoImage={
            "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/header/primary-logo.svg"
          }
          profile={"Profile"}
          widthVal={"950px"}
        />
        {cartData.data.length > 0 && <CartHeader />}
      </div>
      <div className="bg-[#f5f1f7]">
        {cartData.data.length > 0 ? (
          <div className="  ">
            <div className="mx-auto sm:max-w-xl md:max-w-5xl  ">
              <div className="flex justify-between items-center md:p-0 p-2 md:bg-transparent bg-white md:static sticky top-0">
                <div className="flex  ">
                  <div className="flex items-center">
                    <Link to={"/"} className="md:hidden block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ height: "1.5rem", width: "1.5rem" }}
                        color="#000"
                      >
                        <path
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M15.5 19l-7-7 7-7"
                        ></path>
                      </svg>
                    </Link>
                    <h3 className=" font-bold text-[1.2rem] font-norms  mr-4 ">
                      Cart ({cartData.data.length} Item)
                    </h3>
                  </div>

                  {jsonData > 0 && jsonData !== undefined ? (
                    <div className="hidden md:flex justify-center items-center bg-[#daf4e5] py-2 px-10 md:rounded md:py-1">
                      <h5 className="block font-bold ">
                        ₹{jsonData.toFixed()}
                      </h5>
                      <p className="block font-norms    pl-1">
                        saved on this order
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={onEmptyData}
                    className="md:w-[95px] w-[60px] border  border-btnBack text-btnBack rounded md:rounded-md font-semibold md:text-[0.9rem] text-[0.6rem] md:h-[32px] p-1  text-center"
                  >
                    Empty Cart
                  </button>
                  <Link
                    to={"/"}
                    className="p-1 md:w-[95px] w-[60px]  border bg-[#4c1577bf] border-[#4c1577bf] text-white rounded md:rounded-md font-semibold md:text-[0.9rem] text-[0.6rem] md:h-[32px]  text-center"
                  >
                    Add More
                  </Link>
                </div>
              </div>
              {jsonData > 0 && jsonData !== undefined ? (
                <div className="md:hidden flex text-[12px] my-2 justify-center items-center bg-[#daf4e5] py-2 px-10 md:rounded md:py-1">
                  <h5 className="block font-bold ">₹{jsonData.toFixed()}</h5>
                  <p className="block font-norms    pl-1">
                    saved on this order
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className=" flex justify-between md:flex-row flex-col gap-4 ">
                <div className="md:w-[60%] md:mt-5   flex flex-col gap-4 ">
                  <CartProduct cartData={cartData} />
                  <div className="block md:hidden">
                    <SuggestionCard />
                  </div>
                  <div className="block md:hidden">
                    <CartOffer />
                  </div>
                  <div className="md:hidden block">
                    <CartDeliveryPartner />
                  </div>
                  <div className="block md:hidden">
                    <CartBill cartData={cartData} />
                  </div>
                  <div className="block md:hidden">
                    <CartDeliveryInstruction />
                  </div>

                  <div className="md:block hidden">
                    <SuggestionCard />
                  </div>

                  <div className="md:block hidden">
                    <CartDeliveryPartner />
                  </div>

                  <div className="md:block hidden">
                    <CartDeliveryInstruction />
                  </div>
                  <div className="md:mb-0 mb-[160px]">
                    <CartDelSeftyInst />
                  </div>
                </div>
                <div className="md:w-[40%] flex flex-col gap-4 md:mt-5">
                  <div className="md:block hidden">
                    <CartOffer />
                  </div>
                  <div className="md:block hidden ">
                    <CartBill cartData={cartData} />
                  </div>
                  <div className=" md:static shadow rounded-lg fixed bottom-0 left-0 w-full">
                    <CartAddress />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ height: "100vh" }}
            className=" overflow-y-hidden bg-[#f5f1f7]"
          >
            <CartEmptyPage />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
