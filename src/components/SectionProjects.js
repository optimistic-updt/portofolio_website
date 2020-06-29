import React from 'react'
import './SectionProjects.css'
import Project from './Project'
import Fade from 'react-reveal/Fade';



function SectionProjects() {
  return (
    <Fade bottom cascade>
    <section id="projects" className="section section-projects span_8_of_12">
    
      <h3>Projects</h3>

      <div className="projects-wrapper">
  
        <Project 
          title="Lifeboard Dashboard" 
          description="Dashboard create from the ground-up in ReactJS" 
          keyword="React, JavaScript, APIs, Modern CSS"
          link="http://lifeboard.surge.sh/"
          imgURL="/images/project-dashboard.png"   
        />

        <Project 
          title="Magic Melbourne Moments" 
          description="Group Project: A curated tourist website for Melbourne" 
          keyword="NodeJS, APIs"
          link="https://magic-melbourne-moments.herokuapp.com/"
          imgURL="/images/project-melbourne.png"   
        />

        <Project 
          title="Social Tracker" 
          description="Record people you meet and their link to each others. (You can login as t@t.com, PW: 321321)" 
          keyword="Ruby, Sinatra, Postgres, Bcrypt"
          link="https://pods-network.herokuapp.com/"
          imgURL="/images/project-pod.png"
            // login as t@t.com 321321   
        />

        <Project 
          title="Tic-Tac-Doh" 
          description="A simpson-themed Tic-Tac-Toe" 
          keyword="JavaScript, CSS animation, DOM"
          link="https://cumulusground.github.io/Tic-Tac-Doh/"
          imgURL="/images/project-tic-tac-doh.png"   
        />

        <Project 
          title="Breakout Game" 
          description="A simple breakout game using HTML Canva and JS" 
          keyword="HTML Canva, JavaScript"
          link="https://cumulusground.github.io/Breakout-Game/"
          imgURL="/images/game-breakout.png"   
        />

        <Project 
          title="Personal Portofolio" 
          description="My own website designed in React" 
          keyword="React, JavaScript, AWS, Google Analytics"
          link="https://kevgarcia.me"
          imgURL="https://www.placecage.com/300/300"   
        />

      </div>
    </section>
    </Fade>
  )
}


export default SectionProjects