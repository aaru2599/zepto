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

const CartPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(true);
  const cartList = useSelector((state) => state.myCart);
  const cartData = cartList;
  const dispatch = useDispatch();
  console.log("cartData.data", cartData.data.length);

  const handleConfirmRemove = (confirmed) => {
    setShowModal(false);
    setConfirm(confirmed); // Update confirm state based on user's confirmation
    if (confirmed) {
      dispatch(resetCartData()); // Reset cart data only if user confirms
    }
  };

  const onEmptyData = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Modal show={showModal} handleConfirm={handleConfirmRemove} />
      {cartData.data.length > 0 ? (
        <div className="h-[100vh] relative"> 
          <div className="mb-4 sticky top-0">
            <CartHeader />
          </div>
          <div className="mx-auto sm:max-w-xl md:max-w-5xl md:max-h-screen">
            <div className="flex justify-between">
              <div className="flex">
                <h3 className=" font-bold text-[1.2rem] font-norms    hidden mr-4 md:block">
                  Cart ({cartData.data.length} Item)
                </h3>
                <div className="  bg-sky-100     ">
                  <div className="flex justify-center items-center bg-skin-success-light py-2 px-10 md:rounded md:py-1">
                    <h5 className="block font-bold ">₹59.51</h5>
                    <p className="block font-norms    pl-1">
                      saved on this order
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={onEmptyData}
                className="w-[95px] border bg-white border-btnBack text-btnBack rounded-md font-semibold text-[0.9rem] h-[32px]  text-center"
              >
                Empty Cart
              </button>
            </div>

            <div className=" flex justify-between gap-4 ">
              <div className="md:w-[60%] md:mt-5  flex flex-col gap-4 ">
                <div className="">
                  <CartProduct cartData={cartData} />
                </div>
                <CartDeliveryPartner />
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
        <div>
          <CartEmptyPage />
        </div>
      )}
    </div>
  );
};

export default CartPage;
