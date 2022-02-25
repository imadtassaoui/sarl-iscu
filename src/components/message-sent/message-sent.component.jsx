import React from "react";

import { FaCheckCircle } from "react-icons/fa";

import "./message-sent.styles.scss";

const MessageSent = ({ toggle }) => {
  return (
    <div className="message-sent">
      <FaCheckCircle />
      <h4>Votre message a été bien envoyé</h4>
      <h5 onClick={toggle}>Renvoyer un message.</h5>
    </div>
  );
};

export default MessageSent;
