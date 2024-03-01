import React, { useEffect, useState } from "react";

const Modal = ({ show, handleConfirm, modalHeading, product }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  //console.log("product", product);
  const modalClassName = isVisible
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  return (
    <div className={modalClassName}>
      <div className="fixed inset-0 bg-gray-500 opacity-75 "></div>
      <div className="bg-white w-[250px] md:w-2/6 p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out">
        {product?<div><h2 className="text-lg font-semibold mb-4 line-clamp-2">Confirm </h2>
        <h4>Do you want to remove <span className="font-semibold text-green-600">"{product}"</span> from cart..?</h4></div>:<div className="font-semibold">{modalHeading}</div>}

        {/* <p></p> */}
        <div className=" mt-5 flex justify-between">
        <button
            className=" font-bold py-2 px-4 rounded bg-btnBack hover:bg-btnHover text-gray-800 "
            onClick={() => handleConfirm(false)}
          >
            No
          </button>
          <button
            className=" font-bold py-2 px-4 rounded bg-gray-300 hover:bg-gray-400 text-gray-800 "
            onClick={() => handleConfirm(true)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
