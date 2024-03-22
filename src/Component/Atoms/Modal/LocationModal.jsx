import React, { useEffect, useRef, useState } from "react";
import { KEY } from "./key";
import { useDispatch } from "react-redux";
import { updateLocation } from "./recent.slice";

const LocationModal = ({ show, handleConfirm, handleLocationChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const apiKey = KEY; // Replace with your Google Maps API key
  const mapApi = "https://maps.googleapis.com/maps/api/js";

  const inputSearch = useRef();
  const dispatch = useDispatch();

  function loadAsyncScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      Object.assign(script, {
        type: "text/javascript",
        async: true,
        src,
      });
      script.addEventListener("load", () => resolve(script));
      document.head.appendChild(script);
    });
  }

  const initialMapScript = () => {
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApi}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  const initialAutoComplete = () => {
    if (!inputSearch.current) return;

    const autocompleteInstance = new window.google.maps.places.Autocomplete(
      inputSearch.current
    );
    autocompleteInstance.setFields(["address_component", "geometry"]);

    autocompleteInstance.addListener("place_changed", () => {
      const place = autocompleteInstance.getPlace();
      setSelectedLocation(place.address_components);
      setIsVisible(false);
      handleConfirm();
    });

    setAutocomplete(autocompleteInstance);
  };

  const modalClassName = isVisible
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  useEffect(() => {
    initialMapScript().then(() => initialAutoComplete());
    setIsVisible(show);
    const addressString = selectedLocation
      ? selectedLocation.map((component) => component.long_name).join(", ")
      : "";
    if (addressString) {
      dispatch(updateLocation(addressString));
      localStorage.setItem("locationData", addressString);
      handleLocationChange(addressString);
    }
  }, [selectedLocation, show]);

  return (
    <div className={modalClassName}>
      <div className="fixed inset-0 bg-gray-500 opacity-75 "></div>
      <div className="bg-white md:h-[50vh] md:w-[37rem] h-full w-full md:rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center p-2 border-b ">
          <button onClick={handleConfirm} className="md:invisible block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              style={{ height: "1.25rem", width: "1.25rem" }}
              color="#000"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15.5 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div className="text-[14px] text-center font-semibold tracking-[0.085rem]">
            Your Location
          </div>
          <button className="hidden md:flex" onClick={handleConfirm}>
          
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
          <div className="block md:hidden"></div>
        </div>

        <div className="w-[100%] p-4 flex flex-col gap-[20px]">
          <div className="flex items-center gap-2 p-2 w-[100%] border h-[40px] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.9rem"
              height="0.9rem"
              fill="none"
              viewBox="0 0 15 15"
            >
              <path
                fill="#858585"
                fillRule="evenodd"
                d="M2 6.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM6.5 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm4.767 9.407a.5.5 0 00-.727.686l2.597 2.751a.5.5 0 00.727-.686l-2.597-2.751z"
                clipRule="evenodd"
                style={{ height: "0.9rem", width: "0.9rem" }}
              ></path>
              <path
                fill="#858585"
                d="M11.267 10.407l.218-.206-.218.206zm-.727.686l.218-.206-.218.206zm2.597 2.751l-.218.206.218-.206zm.707.02l-.206-.218.206.219zm.02-.706l-.218.206.218-.206zM6.5 1.7a4.8 4.8 0 00-4.8 4.8h.6a4.2 4.2 0 014.2-4.2v-.6zm4.8 4.8a4.8 4.8 0 00-4.8-4.8v.6a4.2 4.2 0 014.2 4.2h.6zm-4.8 4.8a4.8 4.8 0 004.8-4.8h-.6a4.2 4.2 0 01-4.2 4.2v.6zM1.7 6.5a4.8 4.8 0 004.8 4.8v-.6a4.2 4.2 0 01-4.2-4.2h-.6zm-.4 0a5.2 5.2 0 015.2-5.2V.7A5.8 5.8 0 00.7 6.5h.6zm5.2 5.2a5.2 5.2 0 01-5.2-5.2H.7a5.8 5.8 0 005.8 5.8v-.6zm5.2-5.2a5.2 5.2 0 01-5.2 5.2v.6a5.8 5.8 0 005.8-5.8h-.6zM6.5 1.3a5.2 5.2 0 015.2 5.2h.6A5.8 5.8 0 006.5.7v.6zm4.266 9.305a.2.2 0 01.283.008l.436-.412a.8.8 0 00-1.13-.033l.411.437zm-.008.282a.2.2 0 01.008-.282l-.412-.437a.8.8 0 00-.032 1.131l.436-.412zm2.597 2.751l-2.597-2.75-.436.411 2.597 2.751.436-.412zm.283.008a.2.2 0 01-.283-.008l-.436.412a.8.8 0 001.13.033l-.411-.437zm.008-.282a.2.2 0 01-.008.282l.412.437a.8.8 0 00.032-1.131l-.436.412zm-2.597-2.751l2.597 2.75.436-.411-2.597-2.751-.436.412z"
              ></path>
            </svg>
            <input
              className="h-[35px] w-[100%] border-none outline-none p-2"
              ref={inputSearch}
              type="text"
              placeholder="Search a new address"
            />
          </div>

          <div className="flex  gap-4 text-btnBack">
            <div className="pt-1">
              <img
                src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/google-map/current-location-marker-icon.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 items-start ">
              <div className="font-semibold">Current Location</div>
              <button>Using GPS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
