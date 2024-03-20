import { Link } from "react-router-dom";
import "./MainHeader.css";
import { useEffect, useState } from "react";
import LocationModal from "../Atoms/Modal/LocationModal";
import { useDispatch, useSelector } from "react-redux";
import { updateRecentSearch } from "../Atoms/Modal/recent.slice";
const MainHeader = ({
  cartData,
  widthVal,
  address,
  logoImage,
  profile,
  cart,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [storedLoc, setStoredLoc] = useState("");
  console.log("storedLoc", storedLoc);
  const dispatch = useDispatch();

  const valueArray = useSelector((state) => state.recent_search.data);
  const cartCount = cartData.data.reduce((acc, curr) => acc + curr.count, 0);
  ////console.log("cartCount", cartCount);
  const storedValue = localStorage.getItem("locationData");
  useEffect(() => {
    if (!storedValue) {
      setShowModal(true);
    }
  }, []);

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const handleLocation = () => {
    setShowModal(!showModal);
  };
  const handleConfirm = () => {
    setShowModal(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (inputVal.trim() !== "") {
      const updatedData = [...valueArray, inputVal];
      dispatch(updateRecentSearch(updatedData));
      setInputVal("");

      localStorage.setItem("valueArray", JSON.stringify(updatedData));
    }
  };

  return (
    <div>
      <div
        className=" flex justify-center border-b border-gray-300"
        style={{
          background: "linear-gradient(rgb(255, 196, 196), rgb(245 241 247))",
        }}
      >
        <div
          style={{ width: "1200px" }}
          className="md:flex md:justify-between flex   justify-center gap-6 items-center py-4"
        >
          <Link className="md:block hidden" to={"/"}>
            <img
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/header/primary-logo.svg"
              width={90}
              height={30}
              alt=""
            />
          </Link>

          {/* Profile Link */}

          {/* Address Section */}
          {address && (
            <div className="mb-4 md:mb-0">
              <h4>Delivery in 8 Mins</h4>
              <div onClick={handleLocation} className="flex cursor-pointer">
                <div className="w-[250px] truncate text-xs ">
                  {storedValue ? storedValue : "Select Location"}
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    style={{ height: 16, width: 16 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Search Input */}
          <form onSubmit={submitForm} className="md:block hidden  ">
            <div
              className="p-4 gap-3 bg-white flex items-center rounded"
              style={{ width: widthVal, height: "40px" }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#383837"
                    fillRule="evenodd"
                    d="M2 6.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM6.5 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm4.767 9.407a.5.5 0 00-.727.686l2.597 2.751a.5.5 0 00.727-.686l-2.597-2.751z"
                    clipRule="evenodd"
                    style={{ height: 18, width: 18 }}
                    color="#383837"
                  ></path>
                  <path
                    fill="#383837"
                    d="M11.267 10.407l.218-.206-.218.206zm-.727.686l.218-.206-.218.206zm2.597 2.751l-.218.206.218-.206zm.707.02l-.206-.218.206.219zm.02-.706l-.218.206.218-.206zM6.5 1.7a4.8 4.8 0 00-4.8 4.8h.6a4.2 4.2 0 014.2-4.2v-.6zm4.8 4.8a4.8 4.8 0 00-4.8-4.8v.6a4.2 4.2 0 014.2 4.2h.6zm-4.8 4.8a4.8 4.8 0 004.8-4.8h-.6a4.2 4.2 0 01-4.2 4.2v.6zM1.7 6.5a4.8 4.8 0 004.8 4.8v-.6a4.2 4.2 0 01-4.2-4.2h-.6zm-.4 0a5.2 5.2 0 015.2-5.2V.7A5.8 5.8 0 00.7 6.5h.6zm5.2 5.2a5.2 5.2 0 01-5.2-5.2H.7a5.8 5.8 0 005.8 5.8v-.6zm5.2-5.2a5.2 5.2 0 01-5.2 5.2v.6a5.8 5.8 0 005.8-5.8h-.6zM6.5 1.3a5.2 5.2 0 015.2 5.2h.6A5.8 5.8 0 006.5.7v.6zm4.266 9.305a.2.2 0 01.283.008l.436-.412a.8.8 0 00-1.13-.033l.411.437zm-.008.282a.2.2 0 01.008-.282l-.412-.437a.8.8 0 00-.032 1.131l.436-.412zm2.597 2.751l-2.597-2.75-.436.411 2.597 2.751.436-.412zm.283.008a.2.2 0 01-.283-.008l-.436.412a.8.8 0 001.13.033l-.411-.437zm.008-.282a.2.2 0 01-.008.282l.412.437a.8.8 0 00.032-1.131l-.436.412zm-2.597-2.751l2.597 2.75.436-.411-2.597-2.751-.436.412z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="rounded outline-none placeholder-text-custom"
                value={inputVal}
                onChange={handleInput}
                placeholder="Search for"
                style={{ width: widthVal }}
              />
            </div>
          </form>
          {profile && (
            <div className="mb-4 md:mb-0 md:block hidden">
              <Link
                to={""}
                className="items-center flex-col flex justify-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 26 26"
                >
                  <circle
                    cx="12.5"
                    cy="11.168"
                    r="3.5"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                  ></circle>
                  <circle
                    cx="12.5"
                    cy="13.5"
                    r="10.5"
                    stroke="#000"
                    strokeWidth="1.6"
                  ></circle>
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                    d="M19.5 21.324c-.413-1.24-1.323-2.337-2.588-3.119C15.646 17.424 14.095 17 12.5 17c-1.595 0-3.146.424-4.412 1.205-1.265.782-2.175 1.878-2.588 3.119"
                  ></path>
                </svg>
                <div>{profile}</div>
              </Link>
            </div>
          )}
          {/* Cart Link */}
          {cart && (
            <div>
              <Link to={"/cart"} className=" relative ">
                {/* Cart icon */}
                <img
                  src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.0/images/header/cart.svg"
                  className=""
                  alt=""
                />
                <div>{cart}</div>
                <span className="absolute -top-2 -right-1">
                  <span className="relative flex h-4 w-4">
                    {cartCount > 0 && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#9e38ae] opacity-75 p-2.5 animate-ping-short"></span>
                    )}
                    <span className="relative inline-flex rounded-full h-4 w-4 p-2.5 text-[10px] bg-skin-primary-violet text-white text-sm items-center justify-center">
                      {cartCount > 0 && cartCount}
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <LocationModal
        show={showModal}
        handleConfirm={handleConfirm}
        handleLocationChange={(location) => setStoredLoc(location)}
      />
    </div>
  );
};

export default MainHeader;
