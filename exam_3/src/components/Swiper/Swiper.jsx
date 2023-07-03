import React from "react";
import Button from "../Button/Button";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
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
        <div className="slide">
          <div className="slide-content">
            <h2 className="slide-content_title">Why Groot's Line at the End of 'Guardians of the Galaxy Vol. 3' Matters</h2>
            <p className="slide-content_text">And more importantly, why could we understand it?</p>
            <Button  className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.groot})` }}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.halk})` }}></div>
          <div className="slide-content">
            <h2 className="slide-content_title">Hulk's Incredible Strength Shatters Records</h2>
            <p className="slide-content_text">Witness the astonishing power of the Hulk as he smashes through box office records and leaves audiences in awe.</p>
            <Button  className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="slide-content">
            <h2 className="slide-content_title">Black Widow: A Heroine's Journey</h2>
            <p className="slide-content_text">Explore the captivating story of Black Widow as she navigates a world of espionage, redemption, and sacrifice.</p>
            <Button  className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.blackWidow})` }}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.cap})` }}></div>
          <div className="slide-content">
            <h2 className="slide-content_title">Captain America: The Symbol of Freedom</h2>
            <p className="slide-content_text">Discover the unwavering courage and unwavering spirit of Captain America as he fights for justice and defends the values of liberty.</p>
            <Button  className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="slide-content">
            <h2 className="slide-content_title">Iron Man's Technological Marvels</h2>
            <p className="slide-content_text">Step into the world of Iron Man and marvel at the cutting-edge technology that powers his armored suit and fuels his heroism.</p>
            <Button  className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.ironMan})` }}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.pantera})` }}></div>
          <div className="slide-content">
            <h2 className="slide-content_title">Black Panther: Wakanda Forever</h2>
            <p className="slide-content_text">Explore the rich and vibrant world of Wakanda as Black Panther takes on the mantle of the protector and defends his nation from threats.</p>
            <Button className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="slide-content">
            <h2 className="slide-content_title">Thor: God of Thunder, Protector of Realms</h2>
            <p className="slide-content_text">Join Thor on his epic quest to safeguard the Nine Realms and discover the true meaning of heroism and sacrifice.</p>
            <Button  className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.tor})` }}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="slide-image" style={{ backgroundImage: `linear-gradient(to right, #000000, #434343), url(${images.gamora})` }}></div>
          <div className="slide-content">
            <h2 className="slide-content_title">Gamora: The Deadliest Woman in the Galaxy</h2>
            <p className="slide-content_text">Uncover the enigmatic past and formidable skills of Gamora as she navigates a treacherous universe filled with danger and deception.</p>
            <Button  className="mrvl-main-button" text="Learn more" onClick={handleClick} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;


// import React from "react";
// // import Button from "../Button/Button";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination, Autoplay } from "swiper";
// import images from "./constants";
// import MySwiperSlide from "../SwiperSlide";
// import "../../styles/components/swiper/swiper.scss";
// import "../../styles/components/button/button.scss";
// import "swiper/css";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";

// SwiperCore.use([Autoplay, Pagination]);

// function SwiperComponent() {
//   const slides = [
//     {
//       title: "Why Groot's Line at the End of 'Guardians of the Galaxy Vol. 3' Matters",
//       text: "And more importantly, why could we understand it?",
//       image: images.groot,
//       link: "/series",
//     },
//     // Додайте решту слайдів за аналогією з першим
//   ];

//   return (
//     <Swiper
//       modules={[Pagination, Autoplay]}
//       pagination={{ clickable: true }}
//       slidesPerView={1}
//       spaceBetween={10}
//       autoplay={{ delay: 3000 }}
//     >
//       {slides.map((slide, id) => (
//         <MySwiperSlide key={""}>
//           <Link to={slide.link}>
//             <SwiperSlide title={slide.title} text={slide.text} image={slide.image} />
//           </Link>
//         </MySwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default SwiperComponent;

