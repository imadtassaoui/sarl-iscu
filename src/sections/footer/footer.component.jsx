import React from "react";

import "./footer.styles.scss";

import tw from "../../assets/twitter.svg";
import li from "../../assets/linkedin.svg";

import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        {" "}
        <section>
          <p>
            Ingenierie et services de construction <br /> d’univers
          </p>
        </section>
        <section>
          <p>Nº 54, Bd Marrakech, Etage 2, Bureau Nº 5, Khouribga</p>
          <br />
          <a href="tel:05 23 49 15 65">05 23 49 15 65</a>
        </section>
        <section>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/ing%C3%A9nierie-et-services-de-construction-d-univers/"
          >
            <FaLinkedinIn className="li" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/iscu_sarl"
          >
            <FaTwitter className="tw" />
          </a>
        </section>
      </div>
      <div className="lower">
        <p>
          © 2022 Site réalisé par{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.notamagency.com"
          >
            Notam Agency
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
