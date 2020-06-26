import React from 'react'
import './SectionHero.css'

import {ReactComponent as MyLogo} from './KGF_logo.svg';
import {ReactComponent as RubyLogo} from './ruby.svg';
import {ReactComponent as ReactLogo} from './reactlogo.svg';
import {ReactComponent as NodeLogo} from './nodelogo.svg';
import {ReactComponent as Chevron} from './chevron.svg';

function SectionHero() {
  return (
    <section className="section section-hero">
      <nav className="header-navbar">
        <div className="inner-nav span_8_of_12">
          <MyLogo className="my-logo"/>
          <a href="#projects">projects</a>
          <a href="#about">about</a>
          <a href="#contact" className="button"><span className="button-text">contact</span></a>
        </div>
      </nav>

      <div className="main-wrapper span_8_of_12">
        <div className="section-hero--text">
          <h1>Hey, I'm Kevin<span>👋</span></h1>
          <h2>Software Developer</h2>

          <div className="logo-wrapper">
          <RubyLogo className="logo" />
          <ReactLogo className="logo" />
          <NodeLogo className="logo" />
          </div>
        </div>

        <img src="/images/profile_photo.png" alt="Kevin's photo" className="section-hero--hero-image"/>
      </div>

      <div className="section-hero--chevron">
        <Chevron />
      </div>
    </section>
  )
}

export default SectionHero