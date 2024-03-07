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
  ////////console.log("productName", productName);
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
                    <div className="flex gap-2 ">
                      <div>
                        <img
                          className="max-h[3.35rem] w-[4.5rem]"
                          src={item.product_img}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <div className="text-[0.9375rem]">
                            {item.product_name}
                          </div>
                          <div className="flex items-center gap-2  text-[0.8rem] text-gray-400 font-[400]">
                            <div>{item.product_qty}</div>
                            <div>x</div>
                            <div>{item.count}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
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
                        className="border border-btnBack flex flex-end text-btnBack px-2 p-1 rounded "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                      </button>
                      <div className="flex h-[32px] items-center border border-btnBack justify-between rounded-md ">
                        <button
                          onClick={() => onClickDecrease(item)}
                          className="font-bold px-3  text-btnBack border-r text-[1rem] border-btnBack "
                        >
                          -
                        </button>
                        <div className="font-bold px-2 text-[1rem] text-btnBack">
                          {item.count}
                        </div>
                        <button
                          onClick={() => onIncrement(item.product_id)}
                          className="font-bold px-3  border-l text-[1rem] text-btnBack border-btnBack"
                        >
                          +
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
