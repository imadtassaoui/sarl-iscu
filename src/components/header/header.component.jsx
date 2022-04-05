import React, { useState } from "react";

import logo from "../../logo.png";

import "./header.styles.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import MessageSent from "../message-sent/message-sent.component";

const links = [
  {
    id: 1,
    text: "Accueil",
    url: "#home",
  },
  {
    id: 2,
    text: "Services",
    url: "#services",
  },
  {
    id: 3,
    text: "À propos",
    url: "#about",
  },
  {
    id: 4,
    text: "Références",
    url: "#references",
  },
  {
    id: 5,
    text: "Contact",
    url: "#contact",
  },
];

const Header = () => {
  const [current, toggleHam] = useState(false);

  const toggle = () => {
    toggleHam(!current);
  };
  return (
    <div className="header">
      <a className="logo" href="#home">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <GiHamburgerMenu className="ham" onClick={toggle} />

      <ul className={current ? "active" : "deactive"}>
        {links.map((link) => {
          return (
            <a onClick={toggle} href={link.url}>
              <li key={link.id}>{link.text}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
