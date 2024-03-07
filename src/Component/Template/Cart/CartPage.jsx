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
import { Link } from "react-router-dom";
import SuggestionCard from "../../Molecule/SuggestionCard";
import { recentButton } from "../../Atoms/Modal/recent.slice";

const CartPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(true);
  const cartList = useSelector((state) => state.myCart);
  const cartData = cartList;
  const dispatch = useDispatch();
  //////////console.log("cartData.data", cartData.data.length);

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

  // console.log("CartPahe.cartDatacartDatacartData",cartData);
  return (
    <div className="relative bg-[#f5f1f7]">
      <Modal
        show={showModal}
        modalHeading={"Do you want to clear cart.?"}
        handleConfirm={handleConfirmRemove}
      />
      <div className="mb-4 sticky  top-0">
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
              <div className="flex justify-between">
                <div className="flex">
                  <h3 className=" font-bold text-[1.2rem] font-norms    hidden mr-4 md:block">
                    Cart ({cartData.data.length} Item)
                  </h3>
                  <div className="  bg-sky-100     ">
                    <div className="flex justify-center items-center bg-[#daf4e5] py-2 px-10 md:rounded md:py-1">
                      <h5 className="block font-bold ">₹59.51</h5>
                      <p className="block font-norms    pl-1">
                        saved on this order
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={onEmptyData}
                    className="w-[95px] border  border-btnBack text-btnBack rounded-md font-semibold text-[0.9rem] h-[32px]  text-center"
                  >
                    Empty Cart
                  </button>
                  <Link
                    to={"/"}
                    className="w-[95px] flex justify-center items-center border bg-[#4c1577bf] border-[#4c1577bf] text-white rounded-md font-semibold text-[0.9rem] h-[32px]  text-center"
                  >
                    Add More
                  </Link>
                </div>
              </div>

              <div className=" flex justify-between gap-4 ">
                <div className="md:w-[60%] md:mt-5   flex flex-col gap-4 ">
                  <div className="">
                    <CartProduct cartData={cartData} />
                  </div>
                  <CartDeliveryPartner />
                  <SuggestionCard />
                  <CartDeliveryInstruction />
                  <CartDelSeftyInst />
                </div>
                <div className="md:w-[40%] flex flex-col gap-4 md:mt-5">
                  <CartOffer />
                  <CartBill cartData={cartData} />
                  <CartAddress />
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
