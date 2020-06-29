import React from 'react'
import './SectionAbout.css'
import AboutCategories from './AboutCategories'

import Fade from 'react-reveal/Fade';

class SectionAbout extends React.Component {
  state = {
    activeKey: 0,
    paragraphs: [
      "hey yo",
      "you are"
    ]
  }

  //   handleClick = (e) => {
  //   let { categories } = this.state
  //   //when it's click
  //   let index = categories.indexOf(e.target.textContent)

  //   this.setState({
  //     activeKey: index
  //   })
  // }



  render() {

    return (
      <Fade bottom cascade>
      <section id="about" className="section-about span_8_of_12">
        <h3>About</h3>

        <div className="section-about--wrapper">
          <AboutCategories activeKey={this.state.activeKey} />

          <div className="section-about--display">
            
            <p className="display-text-content">
              {this.state.paragraphs[1]}
            </p>

            {/* <p>I’m an aspiring <span className="full-stack">Full-Stack Software Developer</span> passionate about Ruby, Rails and front-end frameworks such as ReactJs, etc.
              </p>
              <br></br>
              <p>
                I love teaming up with fun, hard-working people who are passionate about what they do, push themselves to grow and have big dreams.
              </p> */}

            {/* <p>
              <p className="list-title">What I Believe In:</p>
              <ul className="values-list">
                <li>Go After Your Dreams</li>
                <li>Make Something of Everyday</li>
                <li>Have Fun</li>
                <li>Do Cool Shit</li>
                <li><a href="https://en.wikipedia.org/wiki/Pareto_principle">80/20 to the Max</a></li>
                <li>Work Hard</li>
                <li>Live Free</li>
              </ul>
            </p> */}
  {/* 
            <p>
              <p>Excited to Dive Deeper Into:</p>
              <ul className="stair">
                <li className="col-right one">Ruby On Rails</li>
                <li className="col-left two">Vue.js</li>
                <li className="col-right three">Python</li>
                <li className="col-right four">NLP</li>
                <li className="col-left five">DocumentDB</li>
                <li className="col-right six">Web Security</li>
                <li className="col-left seven">Android App Development</li>
              </ul>
            </p> */}

            {/* <p>
            <p>
                Having worked in the exciting live music environment,</p> 
                <p>I developed a thorough understanding of managing tight deadlines, efficient problem-solving skills and understanding of technical tools and systems as well as a budget conscious approach to product creation. I gained a deep understanding of how to manage a team in a high stress environment for an extended period of time.
              </p> 
              <p>
                As a Empathic Idealist, I’m now moving into the tech industry to have a greater impact on people’s life and to be at the forefront of exciting changes in our society. Eager and enthusiastic with an open-mind, I cherish new ways of thinking and encourage thoughtful debate to generate new ideas.	
              </p>
            </p> */}

          </div>
        </div>
      </section>
      </Fade>
    )
  }
}


export default SectionAbout