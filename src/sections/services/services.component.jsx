import React from "react";

import Card from "../../components/card/card.component";
import SectionHeader from "../../components/section-header/section-header.component";

import { cards } from "../../components/card/cards-data";

import "./services.styles.scss";

import bg from "../../assets/circles1.svg";

const Services = () => {
  return (
    <div
      className="services"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SectionHeader>Services</SectionHeader>
      <div className="container">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Services;
