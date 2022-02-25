import React, { useState } from "react";

import emailjs from "@emailjs/browser";

import "./contact-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import MessageSent from "../message-sent/message-sent.component";

const ContactForm = () => {
  const [current, toggleCurrent] = useState(false);

  const toggleMessage = () => {
    console.log(current);
    return toggleCurrent(!current);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbd9xtl",
        "template_oew05cu",
        e.target,
        "user_NZCwJAgQlXojJTF6faigE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toggleMessage();
  };
  return (
    <div className="contact-form">
      {current ? (
        <div>
          <form onSubmit={sendEmail}>
            <div className="form-section">
              <FormInput label="Nom" name="name" type="text" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Sujet" name="subject" type="text" />
              <FormInput label="Message" name="message" type="text" message />
              <button type="submit">Envoyer</button>
            </div>
            <div className="button"></div>
          </form>
        </div>
      ) : (
        <MessageSent toggle={toggleMessage} />
      )}
    </div>
  );
};

export default ContactForm;
