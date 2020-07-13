import React from 'react'
import './SectionHero.css'

import RubyLogo from './Ruby'
import NodeLogo from './NodeLogo'
import ReactLogo from './ReactLogo'
import {ReactComponent as Chevron} from './chevron.svg';

import Fade from 'react-reveal/Fade';


function SectionHero() {
  return (
    <Fade top>
      <section id="home" className="section section-hero">
        <Fade bottom cascade big duration={1200} delay={800}>
          <div className="section-hero--text span_8_of_12">
            <h1>Hey, I'm Kevin<span className="hand" role="img">👋</span></h1>
            <h2>Software Developer</h2>

            <div className="logo-wrapper">
            <RubyLogo />
            <ReactLogo />
            <NodeLogo />
            </div>
          </div>
        </Fade>

        <Fade delay={3000}>
          <div className="chevron-position">
            <a href="#projects" className="section-hero--chevron">
              <Chevron />
            </a>
          </div>
        </Fade>
      </section>
    </Fade>
  )
}

export default SectionHero