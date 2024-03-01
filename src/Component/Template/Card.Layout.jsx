import { useEffect, useState } from "react";
import Card from "../Molecule/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Products/Products.Slice";
import { Link, useNavigate } from "react-router-dom";

const CardLayout = () => {
  const cartList = useSelector((state) => state.myCart);
  const cartData = cartList;
  //console.log("cardDataCardLayout", cartData);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.myProducts.data);
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
  ////console.log("productsData");

  ////console.log("productsData", productsData);
  return (
    <div>
      <div className="flex justify-end p-4">
        <Link to={"/cart"} className=" relative ">
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.0/images/header/cart.svg"
            className=" "
            alt=""
          />
          <div>Card</div>
          <span className="absolute -top-2 -right-1">
            <span className="relative flex h-4 w-4">
{
              cartData.data.length>0&&<span className="absolute inline-flex h-full w-full rounded-full bg-[#9e38ae] opacity-75 p-2.5 animate-ping-short"></span>
              
}
              <span className="relative inline-flex rounded-full h-4 w-4 p-2.5 text-[10px] bg-skin-primary-violet text-white text-sm items-center justify-center">
                {cartData.data.length > 0 && cartData.data.length}
              </span>
            </span>
          </span>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 p-4 justify-center">
          {/* Render the CardProto component passing productsData as props */}
          {isLoading ? "Loading" : <Card productsData={productsData} cartData={cartData} />}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
