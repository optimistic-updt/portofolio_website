import React from "react";
import { useSpring, animated } from "react-spring";
import "./Project.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 8) / 20,
  (x - window.innerWidth / 8) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Project = ({ imgURL, link, title, description, keyword }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <a href={link} target="blank">
      <animated.div
        className="project-square"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
          backgroundImage: `url(${imgURL})`,
        }}
      >
        <div className="project-overlay">
          <h6>{title}</h6>

          <div className="body-animation">
            <p>{description}</p>
            <p className="project-overlay--keyword">Keywords:</p>
            <p>{keyword}</p>
          </div>
        </div>
      </animated.div>
    </a>
  );
};

export default Project;
