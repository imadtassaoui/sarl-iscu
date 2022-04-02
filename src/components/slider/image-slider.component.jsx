import React, { useState, useEffect } from "react";
import Aos from "aos";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import "./image-slider.styles.scss";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="image-slider" data-aos="fade-up">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div key={slide.id}>
            {index === current && <img src={slide.image} alt="reference" />}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
