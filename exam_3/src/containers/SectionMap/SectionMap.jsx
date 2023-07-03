import React from "react";
import MapComponent from "../../components/Map/M-map";


function SectionMap() {
  return (
    <section className="mrvl_map">
    <div className="mrvl_map_content">
      <span>Dear Marvel Fans,</span>
      <span>We cordially invite you to visit the largest cinema in Ukraine for the upcoming premiere of the Marvel movie. Located at Veluka Vasylkivska Street, 38 (Велика Васильківська, 19, Київ, Україна.), this state-of-the-art theater offers an immersive cinematic experience like no other.</span>
      <span>Join us for an unforgettable adventure as we delve into the Marvel universe on the big screen. The theater is conveniently marked on the map above, ensuring you can easily find your way. Don't miss the chance to witness the excitement and action of the latest Marvel masterpiece.</span>
      <span>See you at the cinema!</span>
    </div>
    <MapComponent/>
  </section>
  );
};

export default SectionMap;