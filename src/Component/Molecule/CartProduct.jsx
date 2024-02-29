import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../Redux/Cart/CartSlice";
import { useState } from "react";
import Modal from "../Atoms/Modal/Modal";

const CartProduct = (cartData) => {
  const [showModal, setShowModal] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState(null);
  const dispatch = useDispatch();

  const handleConfirmRemove = (confirmed) => {
    setShowModal(false);
    if (confirmed && productIdToRemove) {
      dispatch(updateCartQuantity({ productId: productIdToRemove, quantity: 0 }));
    }
  };

  const onClickDecrease = (productId) => {
    const productToUpdate = cartData.cartData.data.find(
      (item) => item.product_id === productId
    );
  
    if (productToUpdate && productToUpdate.count === 1) {
      // Show the modal only if count is 1
      setShowModal(true);
      setProductIdToRemove(productId);
    } else if (productToUpdate && productToUpdate.count > 0) {
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
    if (productToUpdate) {
      dispatch(
        updateCartQuantity({ productId, quantity: productToUpdate.count + 1 })
      );
    }
  };
  
  return (
    <>
      <Modal show={showModal} handleConfirm={handleConfirmRemove} />
      <div className="px-4 rounded bg-white ">
        {cartData.cartData.data.map(
          (item) =>
            item.count > 0 && (
              <div key={item.product_id} className="rounded ">
                <div className="flex justify-between border-b py-4">
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
                          {item.product_name}{" "}
                        </div>
                        <div className="text-[0.8rem] text-gray-400 font-[400]">
                          {item.product_qty}* {item.count}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="line-through text-btnBack">
                          &#8377;{item.product_og_price * item.count}
                        </span>
                        <span className="font-bold">
                          &#8377;{item.product_dis_price * item.count}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[32px] items-center justify-between  bg-btnBack rounded-md ">
                    <button
                      onClick={() => onClickDecrease(item.product_id)}
                      className="font-bold px-3  text-white border-r-2 text-[1rem] border-btnBorder "
                    >
                      -
                    </button>
                    <div className="font-bold px-2 text-[1rem] text-white">
                      {item.count}
                    </div>
                    <button
                      onClick={() => onIncrement(item.product_id)}
                      className="font-bold px-3  border-l-2 text-[1rem] text-white border-btnBorder"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default CartProduct;
