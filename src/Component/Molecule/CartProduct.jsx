import { useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../Redux/Cart/CartSlice";
import { useEffect, useRef, useState } from "react";
import Modal from "../Atoms/Modal/Modal";
import { Bounce, toast } from "react-toastify";

const CartProduct = (cartData) => {
  const [showModal, setShowModal] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState(null);
  const [productName, setProductName] = useState("");
  const dispatch = useDispatch();

  const handleConfirmRemove = (confirmed) => {
    setShowModal(false);

    if (confirmed && productIdToRemove) {
      dispatch(
        // updateCartQuantity({ productId: productIdToRemove, quantity: 0 })
        removeFromCart(productIdToRemove)
      );
    }
  };

  const onClickDecrease = (productData) => {
    const productId = productData.product_id;
    const productToUpdate = cartData.cartData.data.find(
      (item) => item.product_id === productId
    );

    if (productToUpdate && productToUpdate.count === 1) {
      setShowModal(true);
      setProductName(productData.product_name);
      setProductIdToRemove(productData);
    } else if (productToUpdate && productToUpdate.count > 1) {
      // Dispatch updateCartQuantity without showing the modal
      dispatch(
        updateCartQuantity({ productId, quantity: productToUpdate.count - 1 })
      );
    }
  };

  const onIncrement = (productId) => {
    const productToUpdate = cartData.cartData.data.find(
      (item) => item.product_id === productId
    );
    if (productToUpdate && productToUpdate.count < 9) {
      dispatch(
        updateCartQuantity({ productId, quantity: productToUpdate.count + 1 })
      );
    } else {
      toast.warn(
        `Oops! You cant add more then ${productToUpdate.count} products at a time`,
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          width: "500px",
          transition: Bounce,
        }
      );
    }
  };
  const handleRemoveBtn = (product) => {
    setShowModal(true);
    setProductIdToRemove(product);
    setProductName(product.product_name);
  };
  //////////console.log("productName", productName);
  return (
    <>
      <Modal
        modalHeading={"Do you want to remove this  product from Cart.? "}
        show={showModal}
        product={productName}
        handleConfirm={handleConfirmRemove}
      />
      <div className=" overflow-y-auto">
        <div className="px-4 rounded bg-white ">
          {cartData.cartData.data.map(
            (item) =>
              item.count > 0 && (
                <div key={item.product_id} className="rounded ">
                  <div className="flex justify-between border-b  py-4">
                    <div className="flex items-start gap-2 ">
                      <img
                        className=" md:w-[4.5rem] w-[3.5rem]  "
                        src={item.product_img}
                        alt=""
                      />

                      <div className="flex flex-col gap-1">
                        <div>
                          <div className="line-clamp-2 md:text-[0.9375rem] text-[0.756rem]">
                            {item.product_name}
                          </div>
                          <div className="flex items-center gap-2  md:text-[0.8rem] text-[0.700rem] text-gray-400 font-[400]">
                            <div>{item.product_qty}</div>
                            <div>x</div>
                            <div>{item.count}</div>
                          </div>
                        </div>
                        <div className="flex gap-2 text-[12px]">
                          {item.product_og_price > 0 && (
                            <span className="line-through text-btnBack">
                              &#8377;{item.product_og_price * item.count}
                            </span>
                          )}
                          <span className="font-bold">
                            &#8377;{item.product_dis_price * item.count}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  items-end justify-between">
                      <button
                        onClick={() => handleRemoveBtn(item)}
                        className="border border-btnBack flex flex-end text-btnBack md:px-2 p-1 md:p-1 rounded "
                      >
                        <svg
                        className="md:w-[16px] w-[10px] h-[10px]  md:h-[16px]"
                          xmlns="http://www.w3.org/2000/svg"
                          // width="16"
                          // height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                      </button>
                      <div className="flex md:text-[14px] text-[10px] md:h-[32px] h-[24px] md:w-[95px] w-[58px] text-center items-center border border-btnBack justify-between md:rounded-md rounded">
                        <button
                          onClick={() => onClickDecrease(item)}
                          className="font-bold md:px-[10px] px-1  text-btnBack border-r text-[1rem] border-btnBack "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            style={{ height: "0.7rem", width: "0.7rem" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            ></path>
                          </svg>
                        </button>
                        <div className="font-bold md:px-1 md:text-[1rem] text-[0.7rem] text-btnBack">
                          {item.count}
                        </div>
                        <button
                          onClick={() => onIncrement(item.product_id)}
                          className="font-bold md:px-[10px]  px-1 border-l text-[1rem] text-btnBack border-btnBack"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            style={{ height: "0.7rem", width: "0.7rem" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default CartProduct;
