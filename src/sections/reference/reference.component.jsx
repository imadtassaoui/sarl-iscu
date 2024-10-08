import React, { useEffect } from "react";
import Aos from "aos";

import CustomButton from "../../components/custom-button/custom-button.component";
import SectionHeader from "../../components/section-header/section-header.component";
import ImageSlider from "../../components/slider/image-slider.component";

import { sliderData } from "../../components/slider/image-data";

import "./reference.styles.scss";

import bg from "../../assets/circles1.svg";

const Reference = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="reference"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SectionHeader>Références</SectionHeader>
      <div className="container">
        <div className="text" data-aos="fade-up">
          <p>
            La société ISCU vous propose ici quelques références de chantier de
            grande ampleur ou à valeur technique ajoutée.
          </p>
        </div>
        <ImageSlider slides={sliderData} data-aos="fade-up" />
        <div className="button" data-aos="fade-up">
          <a href="#contact">
            <CustomButton className="button"> Contactez-nous</CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reference;
