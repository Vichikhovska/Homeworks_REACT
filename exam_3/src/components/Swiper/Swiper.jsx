import React from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import MySwiperSlide from "../SwiperSlide/SwiperSlide"
import SwiperCore, { Pagination, Autoplay } from "swiper";

//constants
import images from "./constants";

//styles
import "../../styles/components/swiper/swiper.scss";
import "../../styles/components/button/button.scss"
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";


SwiperCore.use([Autoplay, Pagination]);

const handleClick = () => {
  console.log("Button clicked!");
};

function SwiperComponent() {
  return(
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{ delay: 3000 }}
      speed={2000}
    >
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.groot}
          title = "Why Groot's Line at the End of 'Guardians of the Galaxy Vol. 3' Matters"
          text = "And more importantly, why could we understand it?"
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.halk}
          title = "Hulk's Incredible Strength Shatters Records"
          text = "Witness the astonishing power of the Hulk as he smashes through box office records and leaves audiences in awe."
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.blackWidow}
          title = "Black Widow: A Heroine's Journey"
          text = "Explore the captivating story of Black Widow as she navigates a world of espionage, redemption, and sacrifice."
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.cap}
          title = "Captain America: The Symbol of Freedom"
          text = "Discover the unwavering courage and unwavering spirit of Captain America as he fights for justice and defends the values of liberty."
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.ironMan}
          title = "Iron Man's Technological Marvels"
          text = "Step into the world of Iron Man and marvel at the cutting-edge technology that powers his armored suit and fuels his heroism."
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.pantera}
          title = "Black Panther: Wakanda Forever"
          text = "Explore the rich and vibrant world of Wakanda as Black Panther takes on the mantle of the protector and defends his nation from threats."
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.tor}
          title = "Thor: God of Thunder, Protector of Realms"
          text = "Join Thor on his epic quest to safeguard the Nine Realms and discover the true meaning of heroism and sacrifice."
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
      <SwiperSlide>
        <MySwiperSlide 
          image = {images.gamora}
          title = "Gamora: The Deadliest Woman in the Galaxy"
          text = "Uncover the enigmatic past and formidable skills of Gamora as she navigates a treacherous universe filled with danger and deception."
          handleClick = {handleClick}>
        </MySwiperSlide>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
