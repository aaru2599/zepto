import { useState } from "react";
import CardButton from "../Atoms/Button/CardButton";
import AddToCard from "../Atoms/Button/AddToCard";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateCartQuantity,
} from "../Redux/Cart/CartSlice";
import Modal from "../Atoms/Modal/Modal";
// import Modal from "../Atoms/Modal/Modal";

const Card = ({ productsData, cartData }) => {
  const [selectedCards, setSelectedCards] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [productIdToRemove,setProductIdToRemove]=useState(null)
  const [productToRemove,setProductToRemove]=useState(null)

  const dispatch = useDispatch();

  //console.log("cartData", cartData);
  //console.log("productsData", productsData);
  const onAddToCart = (product) => {
    dispatch(addToCart(product));
    setSelectedCards({ ...selectedCards, [product.product_id]: true });
  };
  const handleConfirmRemove = (confirmed) => {
    setShowModal(false);
    // setConfirm(confirmed);
    if (confirmed) {
      dispatch(removeFromCart(productToRemove)); // Remove the product directly
      // Remove the product from selectedCards
      const updatedSelectedCards = { ...selectedCards };
      delete updatedSelectedCards[productIdToRemove];
      setSelectedCards(updatedSelectedCards);
    }
    console.log("confirmed",confirmed);
  };

  const onClickDecrease = (productId) => {
    const productToUpdate = cartData?.data.find(
      (item) => item.product_id === productId
    );
    //console.log("productToUpdate", productToUpdate);
    if (productToUpdate.count === 1) {
      // const shouldRemove = confirm(
      //   "Are you sure you want to remove this item from the cart?"
      // );
      setShowModal(true);
      setProductIdToRemove(productId)
      // console.log("confirm inside fun", confirm);

setProductToRemove(productToUpdate)
      // if (confirm) {
      //   dispatch(removeFromCart(productToUpdate)); // Remove the product directly
      //   // Remove the product from selectedCards
      //   const updatedSelectedCards = { ...selectedCards };
      //   delete updatedSelectedCards[productId];
      //   setSelectedCards(updatedSelectedCards);
      // }
    } else if (productToUpdate.count > 0) {
      dispatch(
        updateCartQuantity({
          productId: productToUpdate.product_id,
          quantity: productToUpdate.count - 1,
        })
      );
    } else {
      const updatedSelectedCards = { ...selectedCards };
      delete updatedSelectedCards[productId];
      setSelectedCards(updatedSelectedCards);
    }
  };

  const onIncrement = (productId) => {
    const productToUpdate = cartData?.data.find(
      (item) => item.product_id === productId
    );
    if (productToUpdate) {
      dispatch(
        updateCartQuantity({ productId, quantity: productToUpdate.count + 1 })
      );
    }
  };

  // //console.log(handleConfirm);
  // //console.log("confirm", confirm);
  // //console.log(  selectedCards[item.product_id]);
  return (
    <>
      <Modal show={showModal} handleConfirm={handleConfirmRemove} />
      {productsData.products.map((item) => (
        <div
          key={item.product_id}
          className="rounded-md bg-white transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-sm"
        >
          <div className="main_card w-[200px] flex flex-col ">
            <div className="">
              <div className="flex justify-center border-b border-gray-50  items-center relative ">
                <img
                  className="rounded-t-md"
                  style={{ width: "100%", height: "195px", objectFit: "cover" }}
                  src={item.product_img}
                  alt=""
                />
                {item.product_og_price > 0 && (
                  <div className="font-bold absolute top-0 left-0 bg-[#9e38ae] text-white py-0 px-1 rounded text-[0.7rem]">
                    {(
                      ((item.product_og_price - item.product_dis_price) /
                        item.product_og_price) *
                      100
                    ).toFixed(0)}
                    % Off
                  </div>
                )}
                {item.product_origin && (
                  <div className="absolute bottom-0 left-0 bg-[#bbf1d4] rounded-r font-[600]  text-[#365c3b] text-[10px] px-1">
                    {item.product_origin}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col  p-2 ">
              <div className="flex flex-col  h-[4.3rem]">
                <div className=" line-clamp-2 text-[13px] h-[2.5rem] font-[700] tracking-[0.02rem]">
                  {item.product_name}
                </div>
                <div className=" font-semibold rounded text-xs py-2 text-slate-600">
                  {item.product_qty}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  {item.product_og_price > 0 && (
                    <div className="text-xs text-slate-600 line-through">
                      &#8377;{item.product_og_price}
                    </div>
                  )}
                  <div className="text-sm font-bold">
                    &#8377;{item.product_dis_price}
                  </div>
                </div>
                {selectedCards[item.product_id] ? (
                  <div className="flex h-[32px] items-center justify-between bg-btnBack rounded-md ">
                    {" "}
                    <button
                      className="font-bold px-3 text-white border-r-2 text-[1rem] border-btnBorder"
                      onClick={() => onClickDecrease(item.product_id)}
                    >
                      -
                    </button>
                    <div className="font-bold px-2 text-[1rem] text-white">
                      {cartData?.data.find(
                        (cartItem) => cartItem.product_id === item.product_id
                      )?.count || 0}
                    </div>
                    <button
                      className="font-bold px-3 border-l-2 text-[1rem] text-white border-btnBorder"
                      onClick={() => onIncrement(item.product_id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-[95px] border border-btnBack text-btnBack rounded-md font-semibold text-[0.9rem] h-[32px]  text-center"
                    onClick={() => onAddToCart(item)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
