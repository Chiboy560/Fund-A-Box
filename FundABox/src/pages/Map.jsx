import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBj5BiUpn_KCk-olCVGnWretgcTE3HXDJA",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const center = { lat: 41.7, lng: -86.2 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center,
        zoom: 10,
      });

      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        location: center,
        radius: 10000,
        query: "food distribution", // You could also try "garden supply"
      };

      service.textSearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          results.forEach((place) => {
            if (place.geometry && place.geometry.location) {
              const marker = new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name,
              });

              const info = new window.google.maps.InfoWindow({
                content: `
                  <div>
                    <h2 class="text-lg font-bold">${place.name}</h2>
                    <p>${place.formatted_address || ""}</p>
                  </div>
                `,
              });

              marker.addListener("click", () => {
                info.open(map, marker);
              });
            }
          });
        } else {
          console.error("Places search failed:", status);
        }
      });
    });
  }, []);

  return (
  <div className="flex justify-center items-start min-h-screen bg-gray-100 px-4 py-2">
    <div className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-5xl h-[550px]">
      <h1 className="text-3xl font-semibold text-center mt-2 mb-4">Nearby Food Distribution Centers</h1>  
        <div id="map" className="w-full h-full" />
      </div>
    </div>

  );
};

export default Map;
