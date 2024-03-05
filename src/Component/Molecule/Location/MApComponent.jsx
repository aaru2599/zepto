import React, { useEffect, useRef } from "react";

const MapComponent = () => {
  const apiKey = "AIzaSyCQm-Y5c0_E4JHaVIzy1Ed0qjA0sCDTUYA";
  const mapApi = "https://maps.googleapis.com/maps/api/js";

  const inputSearch = useRef();

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

 
  
};

export default MapComponent;
