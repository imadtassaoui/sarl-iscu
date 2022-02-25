import React from "react";

import "./section-header.styles.scss";

const SectionHeader = ({ children, white }) => {
  return (
    <div className="section-header">
      <h1 className={white ? "white" : ""}>{children}</h1>
      <div className="line"></div>
    </div>
  );
};

export default SectionHeader;
