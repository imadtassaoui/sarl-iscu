import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, message, name, type }) => {
  return (
    <div className="form-input">
      <div className="group">
        <input
          className={message ? "message input" : "input"}
          type={type}
          name={name}
          placeholder={label}
          required
        />
        {label ? <label>{label}</label> : null}
      </div>
    </div>
  );
};

export default FormInput;
