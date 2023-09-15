import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import m1 from "./assets/m1.png";
import m2 from "./assets/m2.png";
import m3 from "./assets/m3.png";
import m4 from "./assets/m4.png";
import m5 from "./assets/m5.png";
import m6 from "./assets/m6.png";

const images = [
  [m1, m2],
  [m3, m4],
  [m5, m6],
];

const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={true} // Show dots
      showArrows={true} // Show navigation arrows
      showStatus={false}
    >
      {images.map((slideImages, index) => (
        <div className="slide" key={index}>
          {slideImages.map((image, imageIndex) => (
            <img
              className="image"
              key={imageIndex}
              src={image}
              alt={`Slide ${index + 1} Image ${imageIndex + 1}`}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
