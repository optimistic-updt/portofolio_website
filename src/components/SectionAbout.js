import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./SectionAbout.css";

import AboutCategories from "./AboutCategories";
import Who from "./about_paragraphs/Who";
import Values from "./about_paragraphs/Values";
import Learning from "./about_paragraphs/Learning";
import BackgroundStory from "./about_paragraphs/Background";

import Fade from "react-reveal/Fade";

function SectionAbout() {
  const [activeKey, setActiveKey] = useState(0);
  const [categories, setCategories] = useState([
    "who am i?",
    "what do i believe in?",
    "What interests me",
    "my story",
  ]);

  // const [height, setHeight] = useState(null);

  // const calcHeight = (el) => {
  //   const height = el.innerHeight;
  //   console.log(height);
  //   setHeight(height);
  // };

  const handleClick = (e) => {
    let index = categories.indexOf(e.target.textContent);
    setActiveKey(index);
  };

  let paragraphContent;
  switch (activeKey) {
    case 0:
      paragraphContent = <Who />;
      break;
    case 1:
      paragraphContent = <Values />;
      break;
    case 2:
      paragraphContent = <Learning />;
      break;
    case 3:
      paragraphContent = <BackgroundStory />;
      break;
    default:
      paragraphContent = <Who />;
      break;
  }

  return (
    <Fade bottom cascade>
      <section id="about" className="section-about span_8_of_12">
        <h3>About</h3>

        <div className="section-about--wrapper">
          <AboutCategories
            activeKey={activeKey}
            categories={categories}
            handleClick={handleClick}
          />

          <div className="section-about--display">{paragraphContent}</div>
        </div>
      </section>
    </Fade>
  );
}

export default SectionAbout;
