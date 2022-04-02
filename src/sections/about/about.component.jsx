import React, { useEffect } from "react";
import Aos from "aos";

import CustomButton from "../../components/custom-button/custom-button.component";

import SectionHeader from "../../components/section-header/section-header.component";

import image from "./about.jpg";
import bg from "../../assets/circles2.svg";

import "./about.styles.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
      <SectionHeader data-aos="fade-up" white>
        À propos
      </SectionHeader>
      <div className="container" data-aos="fade-up">
        <div className="text">
          <p>
            Créé en 2021, ISCU est un bureau d’études pluridisciplinaire dont
            l’activité principale est le génie maritime et fluvial et
            l’aménagement du littoral. <br />
            Il est situé à 54 Rue Marrakech, Khouribga, Maroc Grâce à une équipe
            expérimentée composée d’ingénieurs spécialisés en Génie maritime,
            Génie Civil, Ouvrages de bâtiment, VRD…, ISCU est en mesure
            d’identifier les exigences de chaque projet. <br />
            Lors de chaque mission, le bureau d’études ISCU est orienté par la
            recherche d’un développement durable et favorise une démarche
            itérative et partenariale prenant en compte les objectifs du Maître
            d’Ouvrage. <br />
            Le projet ainsi finalisé permet d’apporter une réponse optimisée
            résultant d’une alchimie entre les différents besoins techniques,
            économiques, environnementaux, paysagers, sociaux et juridiques.
            <br /> <br />
            ISCU est une ent prise indépendante à échelle humaine ce qui lui
            confère une autonomie et une réactivité dans la gestion de ses
            projets en Maroc comme à l‘international. <br />
            Dans le cadre de son développement le bureau d’études ISCU a été
            amené à prendre des participations dans différents bureaux d’études
            afin d’élargir ses compétences dans des domaines complémentaires
            tels que la modélisation hydrodynamique, la gestion des risques
            environnementaux et l’aménagement paysager.
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
