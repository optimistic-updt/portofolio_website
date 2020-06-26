import React from 'react';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="inner-footer span_8_of_12">
        <div className="footer--text">
          <p>Built by me using ReactJS. Design help from <a href="https://www.kiranraszka.com/">Kiran</a></p>
          <p className="copyright">
            &copy; Kevin Garcia-Fernandez 2020. All rights reserved.
          </p>
        </div>

        <span className="icons">
          <a href="https://twitter.com/CumulusGround" target="blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          <a href="https://www.linkedin.com/in/kevgarciaf/" target="blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
          <a href="https://github.com/CumulusGround" target="blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          <a href="https://www.instagram.com/kevinthemix/" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          <a href="https://medium.com/@cumulusground" target="blank"><FontAwesomeIcon icon={faMediumM} size="2x" /></a>   
        </span>
      </div>
    </footer>
  )
}

export default Footer