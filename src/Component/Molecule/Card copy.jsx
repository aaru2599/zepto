import { useState } from "react";
import CardButton from "../Atoms/Button/CardButton";
import AddToCard from "../Atoms/Button/AddToCard";
import CardButtonProto from "../Atoms/Button/CardButton copy";
import AddToCardProto from "../Atoms/Button/AddToCard copy";

const CardProto = ({ productsData }) => {
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
          className="rounded-lg rounded bg-white transition duration-300 ease-in-out shadow-xl hover:cursor-pointer hover:shadow-none	"
        >
          <div className="main_card w-[200px] flex flex-col ">
            <div className="">
              <div className="flex justify-center shadow-md  items-center relative ">
                <img
                  className="rounded-t-lg "
                  style={{ width: "100%", height: "195px", objectFit: "cover" }}
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
                {item.product_origin && (
                  <div className="absolute bottom-0 left-0 bg-[#bbf1d4] rounded-r font-[600]  text-[#365c3b] text-[10px] px-1    ">
                    {item.product_origin}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col  p-2 ">
              <div className="flex flex-col  h-[4.3rem]">
                <div className=" line-clamp-2 text-[13px] h-[2.5rem] font-[600] tracking-[0.03rem]">
                  {item.product_name}
                </div>
                <div className="  rounded text-xs py-2 text-slate-600">
                  {item.product_qty}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  {item.product_og_price > 0 ? (
                    <div className="text-xs text-slate-600 line-through">
                      &#8377;{item.product_og_price}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="text-sm font-semibold">
                    &#8377;{item.product_dis_price}
                  </div>
                </div>

                {selectedCards[item.product_id] ? (
                  <CardButtonProto count={1} />
                ) : (
                  <div onClick={() => handleAddToCart(item.product_id)}>
                    <AddToCardProto />
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

export default CardProto;
