import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

import SectionHeader from "../../components/section-header/section-header.component";

import image from "./about.jpg";
import bg from "../../assets/circles2.svg";

import "./about.styles.scss";

const About = () => {
  return (
    <div
      className="about"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "800px",
      }}
    >
      <SectionHeader white>À propos</SectionHeader>
      <div className="container">
        <div className="text">
          <p>
            La société ingénierie et services de construction d’univers a été
            créé en 2021, au Maroc à Khouribga par des personnes qualifiées et
            expérimentées en domaine dans le but à répondre aux exigences à tous
            ceux qui souhaitent confier certaines tâches. <br />
            <br />
            La société ingénierie et services de construction d’univers est
            équipée du matériel nécessaire et adéquat pour objet les travaux de
            génie civil.
          </p>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
