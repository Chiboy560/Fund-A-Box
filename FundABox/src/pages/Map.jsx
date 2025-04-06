// components/Map.jsx
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader"

//https://maps.googleapis.com/maps/api/js?key=AIzaSyBj5BiUpn_KCk-olCVGnWretgcTE3HXDJA`
const Map = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBj5BiUpn_KCk-olCVGnWretgcTE3HXDJA",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);

  return (
    <div className="h-screen w-full">
      <div id="map" className="h-full w-full" />
    </div>
  );
};

export default Map;