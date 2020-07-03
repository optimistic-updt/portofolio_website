import React from 'react';
import './SectionContact.css'
import Fade from 'react-reveal/Fade';

import ContactForm from './ContactForm'

function SectionContact() {
  return(
    <Fade bottom cascade>
      <section id="contact" className="section-contact span_8_of_12">

        <h3>Contact</h3>
        
        <p>I love to connect face-to-face around <span className="connect--how"><em>coffee</em></span> and <span className="connect--how"><em>food</em></span>.</p> 
        <p className="p--socials">
          But if that's not possible, I like to virtually hang on <a href="https://twitter.com/CumulusGround" target="blank">
            Twitter
          </a> and <a href="https://www.linkedin.com/in/kevgarciaf/" target="blank">
            Linkedin
          </a>.
          <p>
            For graphical evidence of my life, you can jump on <a href="https://www.instagram.com/kevinthemix/" target="blank">
            Instagram
            </a>. I'm also developing my essay writing skills on <a href="https://medium.com/@cumulusground" target="blank">
              Medium
            </a>
          </p>
        </p>
      
        <a href="/images/kevin_garcia_fernandez_software_developer_resume.pdf" target="blank" className="button resume-button"><span className="button-text">download resume</span></a>

        <ContactForm />
      </section>
    </Fade>
  )
}


export default SectionContact
