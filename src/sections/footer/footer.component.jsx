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
          <p>04 94 40 08 29</p>
        </section>
        <section>
          <p>
            Ingenierie et services de construction d’univers <br />
            Ingenierie et services <br />
            de construction d’univers
          </p>
        </section>
        <section>
          <FaLinkedinIn className="li" />
          <FaTwitter className="tw" />
        </section>
      </div>
      <div className="lower">
        <p>© Site réalisé par Imad Tassaoui</p>
      </div>
    </div>
  );
};

export default Footer;
