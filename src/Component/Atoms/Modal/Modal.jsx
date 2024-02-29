import React, { useEffect, useState } from "react";

const Modal = ({ show, handleConfirm }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  const modalClassName = isVisible ? "fixed inset-0 flex items-center justify-center z-50" : "hidden";

  return (
    <div className={modalClassName}>
      <div className="fixed inset-0 bg-gray-500 opacity-75 "></div>
      <div className="bg-white w-[250px] md:w-2/6 p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out">
        <h2 className="text-lg font-semibold mb-4">Please check one more time</h2>
        {/* <p className="mb-4">Do you want to remove this from the cart?</p> */}
        <div className="flex justify-between">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleConfirm(false)}
          >
            No
          </button>
          <button
            className="bg-btnHover hover:bg-btnBack text-white font-bold py-2 px-4 rounded"
            onClick={() => handleConfirm(true)}
          >
            Yes, delete from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
