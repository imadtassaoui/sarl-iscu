import React from "react";

import SectionHeader from "../../components/section-header/section-header.component";
import ContactForm from "../../components/contact-form/contact-form.component";

import { FaPhone, FaMapMarker } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="info">
        <SectionHeader white>Contact</SectionHeader>
        <div className="text">
          <p>SOCIETE INGENIERIE ET SERVICES DE CONSTRUCTION D’UNIVERS </p>
          <div className="cred">
            <p>
              <a href="tel:05 23 49 15 65">
                <FaPhone className="icon" />
                05 23 49 15 65
              </a>
            </p>
            <p>
              <IoMdMail className="icon" />
              sarl.iscu@gmail.com
            </p>
            <p>
              <FaMapMarker className="icon" />
              Nº 54, Bd Marrakech, Etage 2, Bureau Nº 5, Khouribga
            </p>
            <div className="map"></div>
          </div>
        </div>
      </div>
      <div className="form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
