import React from "react";
import "./SectionContact.css";
import Fade from "react-reveal/Fade";

import ContactForm from "./ContactForm";

function SectionContact() {
  return (
    <Fade bottom cascade>
      <section id="contact" className="section-contact span_8_of_12">
        <h3>Contact</h3>

        <p>
          I love to connect face-to-face around{" "}
          <span className="connect--how">
            <em>coffee</em>
          </span>{" "}
          and{" "}
          <span className="connect--how">
            <em>food</em>
          </span>
          .
        </p>
        <p className="p--socials">
          But if that&apos;s not possible, I like to virtually hang on{" "}
          <a href="https://twitter.com/optimistic_updt" target="blank">
            Twitter
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/kevgarciaf/" target="blank">
            Linkedin
          </a>
          .
        </p>
        <p>
          For graphical evidence of my life, you can jump on{" "}
          <a href="https://www.instagram.com/optimistic_update/" target="blank">
            Instagram
          </a>
          .
        </p>

        <a
          href="/images/kevin-gf-resume-2022.pdf"
          target="blank"
          className="button resume-button"
        >
          <span className="button-text">download resume</span>
        </a>

        <ContactForm />
      </section>
    </Fade>
  );
}

export default SectionContact;
