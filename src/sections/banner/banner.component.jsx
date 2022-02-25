import React from "react";

import banner from "./banner.jpg";

import CustomButton from "../../components/custom-button/custom-button.component";

import "./banner.styles.scss";

const Banner = () => {
  return (
    <div className="banner">
      <h1>SPÉCIALISTE DE L'ETUDE DES SOLS </h1>
      <a href="#services">
        {" "}
        <CustomButton>En savoir plus</CustomButton>
      </a>
    </div>
  );
};

export default Banner;
