import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, type }) => {
  return (
    <div className="custom-button" type={type}>
      {children}
    </div>
  );
};

export default CustomButton;
