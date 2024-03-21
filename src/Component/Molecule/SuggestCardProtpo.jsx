import React, { useState } from "react";
import { addToCart } from "../Redux/Cart/CartSlice";
import { useDispatch } from "react-redux";

const SuggestCardProtpo = ({ productData }) => {
    const dispatch = useDispatch();
    const myProductData=productData.products
    const [suggestions, setSuggestions] = useState(myProductData)

  const handleAdd = (product) => {
    dispatch(addToCart(product)); // Dispatch addToCart action with the selected product
    setSuggestions(suggestions.filter((item) => item.product_id !== product.product_id));

  };
  //console.log("suggestionssuggestionssuggestions",suggestions);
  return (
    <div>
      <div className="flex justify-between scrollable-data overflow-hidden overflow-x-scroll ">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="mr-2   rounded-lg border md:w-[150px] w-[120px] border-skin-muted/50 flex flex-col  p-2 false"
          >
            <div className="flex justify-center items-center">
              <img
                alt={item.alt}
                width={80}
                height={80}
                className=""
                src={item.product_img}
                // style={{ color: "transparent", objectFit: "contain" }}
              />
            </div>
            <p className="line-clamp-2 py-2 h-[45px] md:w-[150px] w-[100px]   text-[0.7125rem] font-semibold ">
              {item.product_name}
            </p>
            {/* <div className="w-[11rem] text-left pl-2"> */}
            <div className="flex justify-between">
              <div className="text-[0.75rem]  font-[400] text-gray-500 block font-norms typography_paragraph-small__Cqv9t   !text-2xs md:!text-xs !text-skin-primary-void/50 pt-1">
                &#8377; {item.product_dis_price}
                {/* </div> */}
              </div>
              <button onClick={()=>handleAdd(item)} className="text-sm border border-btnBack rounded text-btnBack px-2">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestCardProtpo;
