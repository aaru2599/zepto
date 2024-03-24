import { useEffect, useState } from "react";
import CardButton from "../Atoms/Button/CardButton";
import AddToCard from "../Atoms/Button/AddToCard";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateCartQuantity,
} from "../Redux/Cart/CartSlice";
import Modal from "../Atoms/Modal/Modal";
import { recentButton } from "../Atoms/Modal/recent.slice";
// import Modal from "../Atoms/Modal/Modal";

const Card = ({ productsData }) => {
  const [selectedCards, setSelectedCards] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState(null);
  const [productToRemove, setProductToRemove] = useState(null);
  const [product, setProduct] = useState("");
  const cartData = JSON.parse(localStorage.getItem("selectCart")) || [];

  const dispatch = useDispatch();

  // ////console.log("myyycartDatacartDatacartDatacartData", myCartData);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("btnKey"));
    if (data) {
      setSelectedCards(data);
    } else {
      // Initialize selectedCards with counts from cartData
      const initialSelectedCards = {};

      cartData.forEach((item) => {
        initialSelectedCards[item.product_id] = item.count > 0;
      });
      setSelectedCards(initialSelectedCards);
      dispatch(recentButton(initialSelectedCards));
      // localStorage.setItem("btnKey", JSON.stringify(initialSelectedCards));
    }
  }, []);

  // ////console.log("cartDatacartDatacartDatacartData", cartData);
  // //console.log("selectedCardsselectedCardsselectedCards", selectedCards);

  const onAddToCart = (product) => {
    dispatch(addToCart(product));
    const updatedSelectedCards = {
      ...selectedCards,
      [product.product_id]: true,
    };
    //console.log("updatedSelectedCards", updatedSelectedCards);
    setSelectedCards(updatedSelectedCards);
    dispatch(recentButton(updatedSelectedCards));
    // localStorage.setItem("btnKey", JSON.stringify(updatedSelectedCards));

    const existingCartIndex = cartData.findIndex(
      (item) => item.product_id === product.product_id
    );
    if (existingCartIndex !== -1) {
      cartData[existingCartIndex].count += 1;
    } else {
      cartData.push({ ...product, count: 1 });
    }
    //console.log("cartData", cartData);

    // localStorage.setItem("selectCart", JSON.stringify(cartData));
    //console.log("product", product);
  };

  const handleConfirmRemove = (confirmed) => {
    setShowModal(false);
    if (confirmed) {
      dispatch(removeFromCart(productToRemove));
      const updatedSelectedCards = { ...selectedCards };
      delete updatedSelectedCards[productIdToRemove];
      setSelectedCards(updatedSelectedCards);
      dispatch(recentButton(updatedSelectedCards));
      // localStorage.setItem("btnKey", JSON.stringify(updatedSelectedCards));
    }
  };
  const onClickDecrease = (productIdData) => {
    const productId = productIdData.product_id;
    const productToUpdate = cartData.find(
      (item) => item.product_id === productId
    );
    if (productToUpdate.count === 1) {
      setShowModal(true);
      setProduct(productIdData.product_name);
      setProductIdToRemove(productId);
      setProductToRemove(productToUpdate);
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
      dispatch(recentButton(updatedSelectedCards));
      // localStorage.setItem("btnKey", JSON.stringify(updatedSelectedCards));
      localStorage.setItem("selectCart", JSON.stringify(productIdData));
    }
  };

  const onIncrement = (productId) => {
    const productToUpdate = cartData.find(
      (item) => item.product_id === productId
    );
    if (productToUpdate && productToUpdate.count < 9) {
      dispatch(
        updateCartQuantity({ productId, quantity: productToUpdate.count + 1 })
      );
      const updatedSelectedCards = { ...selectedCards };
      updatedSelectedCards[productId] = true;
      setSelectedCards(updatedSelectedCards);
      dispatch(recentButton(updatedSelectedCards));
      // localStorage.setItem("btnKey", JSON.stringify(updatedSelectedCards));
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
  ////console.log("product.data", productsData.products);

  return (
    <>
      <Modal
        product={product}
        modalHeading={"Do you want to remove this product from cart..?"}
        show={showModal}
        handleConfirm={handleConfirmRemove}
      />
      {productsData.products.map((item) => (
        <div
          key={item.product_id}
          className="rounded-md bg-white transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-sm"
        >
          <div className="main_card  flex flex-col ">
            <div className="">
              <div className="flex justify-center border-b border-gray-50  items-center relative ">
                <img
                  className="rounded-t-md h-[125px]  md:h-[200px]"
                  style={{ width: "100%", objectFit: "cover" }}
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
            <div className="md:flex md:flex-col  p-2 ">
              <div className="flex flex-col  md:h-[4.3rem]">
                <div className=" line-clamp-2 text-[10px] md:text-[13px] h-[2rem] md:h-[2.5rem] font-[700] tracking-[0.02rem]">
                  {item.product_name}
                </div>
                <div className=" font-semibold truncate rounded md:text-xs py-2 text-slate-600 text-[10px]">
                  {item.product_qty}
                </div>
              </div>
              <div className="flex   justify-between items-center">
                <div className="flex md:gap-2 gap-1 text-[10px] items-center">
                  {item.product_og_price > 0 && (
                    <div className="md:text-xs text-[10px] text-slate-600 line-through">
                      &#8377;{item.product_og_price}
                    </div>
                  )}
                  <div className="text-sm font-bold">
                    &#8377;{item.product_dis_price}
                  </div>
                </div>
                {selectedCards[item.product_id] ? (
                  <div className="flex  md:text-[14px] text-[10px] md:h-[32px] h-[24px] md:w-[95px] w-[58px] text-center    items-center justify-between bg-btnBack md:rounded-md rounded ">
                    {" "}
                    <button
                      className="font-bold md:px-3 px-2 text-white border-r-2  border-btnBorder"
                      onClick={() => onClickDecrease(item)}
                    >
                      -
                    </button>
                    <div className="font-bold md:py-0 px-1 flex justify-center md:w-[30px]   text-white">
                      {cartData.find(
                        (cartItem) => cartItem.product_id === item.product_id
                      )?.count || 0}
                    </div>
                    <button
                      className="font-bold md:px-3 px-2 border-l-2  text-center text-white border-btnBorder"
                      onClick={() => onIncrement(item.product_id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="md:w-[95px] px-1 w-[58px] h-[24px] border border-btnBack text-btnBack rounded md:rounded-md md:font-semibold md:text-[0.9rem] text-[0.6rem] md:h-[32px]  text-center "
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
