import React, { useEffect } from "react";
import Aos from "aos";

import "./section-header.styles.scss";

const SectionHeader = ({ children, white }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="section-header" data-aos="fade-up">
      <h1 className={white ? "white" : ""}>{children}</h1>
      <div className="line"></div>
    </div>
  );
};

export default SectionHeader;
