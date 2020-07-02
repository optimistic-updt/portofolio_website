import React from 'react'
import './SectionHero.css'

import RubyLogo from './Ruby'
import NodeLogo from './NodeLogo'
import ReactLogo from './ReactLogo'
import {ReactComponent as Chevron} from './chevron.svg';

import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

function SectionHero() {
  return (
    <section id="home" className="section section-hero">
      <div className="main-wrapper span_8_of_12">
        <Fade bottom cascade big duration={1200}>
        <div className="section-hero--text">
          <h1>Hey, I'm Kevin<span className="hand" role="img">👋</span></h1>
          <h2>Software Developer</h2>

          <div className="logo-wrapper">
          <RubyLogo />
          <ReactLogo />
          <NodeLogo />
          </div>
        </div>
        </Fade>
        <Roll delay={1700} duration={1500}>
          <img src="/images/profile_photo.png" alt="Kevin drinking coffee" className="section-hero--hero-image"/>
        </Roll>
      </div>

      <Fade delay={3000}>
      <div>
        <a href="#projects" className="section-hero--chevron">
          <Chevron />
        </a>
      </div>
      </Fade>
    </section>
  )
}

export default SectionHero