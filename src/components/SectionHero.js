import React from 'react'
import './SectionHero.css'

import {ReactComponent as MyLogo} from './KGF_logo.svg';
// import {ReactComponent as RubyLogo} from './ruby.svg';
// import {ReactComponent as NodeLogo} from './nodelogo.svg';
// import {ReactComponent as ReactLogo} from './reactlogo.svg';
import RubyLogo from './Ruby'
import NodeLogo from './NodeLogo'
import ReactLogo from './ReactLogo'
import {ReactComponent as Chevron} from './chevron.svg';

import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';

function SectionHero() {
  return (
    <section className="section section-hero">
      <nav className="header-navbar">
        <div className="inner-nav span_8_of_12">
        <Fade top cascade delay={3500}>
          <a href="#" className="logo-container"><MyLogo className="my-logo" /></a>
          <a href="#projects" className="links">projects</a>
          <a href="#about" className="links">about</a>
          <a href="#contact" className="button"><span className="button-text">contact</span></a>
        </Fade>
        </div>
      </nav>

      <div className="main-wrapper span_8_of_12">
        <Fade bottom cascade big duration={1500}>
        <div className="section-hero--text">
          <h1>Hey, I'm Kevin<span className="hand">👋</span></h1>
          <h2>Software Developer</h2>

          <div className="logo-wrapper">
          <RubyLogo />
          <ReactLogo />
          <NodeLogo />
          </div>
        </div>
        </Fade>
        {/* <Zoom> */}
          <Roll delay={2500} duration={2000}>
            <img src="/images/profile_photo.png" alt="Kevin's photo" className="section-hero--hero-image"/>
          </Roll>
        {/* </Zoom> */}
      </div>

      <Fade delay={3000}>
        <div className="section-hero--chevron">
          <Chevron />
        </div>
      </Fade>
    </section>
  )
}

export default SectionHero