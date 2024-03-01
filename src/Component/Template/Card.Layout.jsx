import { useEffect, useState } from "react";
import Card from "../Molecule/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Products/Products.Slice";
import { Link, useNavigate } from "react-router-dom";
import MainHeader from "../Molecule/MainHeader";

import ProductCategory from "../Molecule/ProductCAtegory";
import "/src/Component/Atoms/Button/CustomInstruction/CartCusIns.css";

const CardLayout = () => {
  const cartList = useSelector((state) => state.myCart);
  const cartData = cartList;
  ////console.log("cardDataCardLayout", cartData);
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
  //////console.log("productsData");

  //////console.log("productsData", productsData);
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <MainHeader
          widthVal={"600px"}
          cart={"Cart"}
          profile={"Profile"}
          address={true}
          cartData={cartData}
        />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center " style={{ width: "1300px" }}>
          <div
            style={{ height: "100vh" }}
            className=" border-white overflow-scroll scrollable-data"
          >
            <ProductCategory />
          </div>
          <div
            className="flex flex-col  overflow-scroll scrollable-data"
            style={{ height: "100vh" }}
          >
            <div className="text-[1.5rem] font-semibold tracking-[0.05rem] pt-4">Buy Fresh Fruits Online</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 py-4  justify-center">
              {/* Render the CardProto component passing productsData as props */}
              {isLoading ? (
                "Loading"
              ) : (
                <Card productsData={productsData} cartData={cartData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
