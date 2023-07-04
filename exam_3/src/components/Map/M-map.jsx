import React from "react";

//styles
import "../../styles/components/map/map.scss";
import "../../styles/containers/section-map.scss";


const MapComponent = () => {
  React.useEffect(() => {
    const cinemaUkraineCoordinates = { lat: 50.437675, lng: 30.516797 };

    let map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: cinemaUkraineCoordinates,
      mapId: "285423a7365129ed",
    });

    let marker = new window.google.maps.Marker({
      position: cinemaUkraineCoordinates,
      map: map,
      title: "Кінотеатр Україна",
    });
  }, []);

  return <div id="map"></div>;
};

export default MapComponent;
