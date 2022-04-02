import React, { useEffect } from "react";

import Aos from "aos";

import "./card.styles.scss";
import "aos/dist/aos.css";

const Card = ({ card }) => {
  const { paragraph, imageUrl } = card;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="card" data-aos="fade-up">
      <img src={card.imageUrl} alt="" />
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
