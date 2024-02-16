import { useState } from "react";
import CardButton from "../Atoms/Button/CardButton";
import AddToCard from "../Atoms/Button/AddToCard";

const Card = ({ productsData }) => {
  const [selectedCards, setSelectedCards] = useState(
    Array(productsData.length).fill("")
  );

  const handleAddToCart = (product_id) => {
    const updatedSelectedCards = [...selectedCards];
    updatedSelectedCards[product_id] = product_id;
    setSelectedCards(updatedSelectedCards);
  };
  console.log("selectedCards", selectedCards);

  function discountPer(product_og_price, product_dis_price) {
    const result =
      ((product_og_price - product_dis_price) / product_og_price) * 100;
    return result;
  }

  return (
    <>
      {productsData.map((item) => (
        <div
          key={item.product_id}
          className="rounded-lg transition duration-500 ease-in-out shadow-xl hover:cursor-pointer hover:shadow-none	"
        >
          <div className="main_card w-[220px] flex flex-col ">
            <div className="">
              <div className="flex justify-center rounded-lg items-center relative bg-white ">
                <img
                className="rounded-t-lg"
                  style={{ width: "100%", height: "210px", objectFit: "cover" }}
                  src={item.product_img}
                  alt=""
                />

                {discountPer(item.product_og_price, item.product_dis_price) >
                  0 && (
                  <div className="font-bold absolute top-0 left-0 bg-[#be57cf] text-white py-0 px-1 rounded text-[0.7rem]">
                    {discountPer(
                      item.product_og_price,
                      item.product_dis_price
                    ).toFixed(0)}
                    % Off
                  </div>
                )}

                <div className="absolute bottom-0 right-0 bg-blue-200 rounded text-xs p-1">
                  {item.product_qty}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-2 ">
              <div className="line-clamp-2 h-[2.5rem] text-sm font-[600] tracking-[0.025rem]">
                {item.product_name}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                {item.product_og_price > 0?<div className="text-xs text-slate-600 line-through">
                  {item.product_og_price}
                  </div>:"" }
                  
                  <div className="text-sm font-bold">
                    &#8377;{item.product_dis_price}
                  </div>
                </div>
                {selectedCards[item.product_id] ? (
                  <CardButton count={1} />
                ) : (
                  <div onClick={() => handleAddToCart(item.product_id)}>
                    <AddToCard />
                  </div>
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
