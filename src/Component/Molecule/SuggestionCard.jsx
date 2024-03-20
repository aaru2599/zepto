import { useState } from "react";
import CartCustomInstruction from "../Atoms/Button/CustomInstruction/CartCustomInstruction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../Redux/Products/Products.Slice";
import Card from "./Card";
import SuggestCardProtpo from "./SuggestCardProtpo";

const SuggestionCard = () => {
    const dispatch=useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const products = useSelector((state) => state.myProducts.data);
    //console.log("productsproducts",products);
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
      dispatch(getProduct());
    }, [dispatch]);
  
    useEffect(() => {
      if (products) {
        setIsLoading(false);
        setProductsData(products);
      }
    }, [products]);
    //console.log("productsDataproductsDataproductsData",productsData);
  return (
    <div className="bg-white rounded p-4 ">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-[0.875rem] font-bold">Add More</div>
        </div>
        <div>
            {
                isLoading?"":<SuggestCardProtpo productData={productsData}/>
            }
         
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
