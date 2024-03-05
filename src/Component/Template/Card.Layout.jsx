import { useEffect, useState } from "react";
import Card from "../Molecule/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Products/Products.Slice";
import MainHeader from "../Molecule/MainHeader";

import ProductCategory from "../Molecule/ProductCAtegory";
import "/src/Component/Atoms/Button/CustomInstruction/CartCusIns.css";
import { removeFromRecentSearch } from "../Atoms/Modal/recent.slice";

const CardLayout = () => {
  const cartList = useSelector((state) => state.myCart);
  const cartData = cartList;
  //////console.log("cardDataCardLayout", cartData);
  

  const [isLoading, setIsLoading] = useState(true);
  const [recent, setRecent] = useState([]);
  const dispatch = useDispatch();
  // const searchData = useSelector((state) => state.recent_search.locationData);
  // console.log("location", searchData);
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
  ////////console.log("productsData");
  useEffect(() => {
    const recentDataFromLocalStorage =
      JSON.parse(localStorage.getItem("valueArray")) || [];
    setRecent(recentDataFromLocalStorage);
  }, []);
  const valArr = useSelector((state) => state.recent_search.data);
  console.log("valArrvalArr",valArr);

  const removeFromRecent = (itemToRemove) => {
    dispatch(removeFromRecentSearch(itemToRemove))
  };
  
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
      <div className="flex justify-center" style={{ height: "100vh" }}>
        <div className="flex justify-center ">
          <div className="  overflow-scroll scrollable-data">
            <ProductCategory />
          </div>

          <div
            className="flex flex-col pt-3  overflow-scroll scrollable-data"
            // style={{ height: "100vh" }}
          >
            <div className="flex  items-center gap-3">
              {valArr.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-300 text-center  rounded-full gap-2 px-3  flex items-center justify-between"
                >
                  <div>{item}</div>
                  <button
                    className="  flex   items-center "
                    onClick={() => removeFromRecent(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill="#130022"
                        fillOpacity="0.4"
                        fillRule="evenodd"
                        d="M15.75 9a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0zM5.47 12.53a.75.75 0 010-1.06L7.94 9 5.47 6.53a.75.75 0 011.06-1.06L9 7.94l2.47-2.47a.75.75 0 111.06 1.06L10.06 9l2.47 2.47a.75.75 0 11-1.06 1.06L9 10.06l-2.47 2.47a.75.75 0 01-1.06 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-[1.5rem] font-semibold tracking-[0.05rem] pt-4">
              Buy Fresh Fruits Online
            </div>
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
