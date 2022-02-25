import React from "react";

import "./card.styles.scss";

const Card = ({ card }) => {
  const { paragraph, imageUrl } = card;
  return (
    <div className="card">
      <img src={card.imageUrl} alt="" />
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
