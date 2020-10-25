import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./Project.css";

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Project = ({ imgURL, link, title, description, keyword }) => {
  const projectRef = useRef(null);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const calc = (x, y) => {
    const boxHeight = projectRef.current.clientHeight;
    const distanceFromTopOfBox = y - projectRef.current.offsetTop;

    const boxWidth = projectRef.current.clientWidth;
    const distanceFromLeftOfBox = x - projectRef.current.offsetLeft;
    return [
      -(distanceFromTopOfBox - boxHeight / 2) / 20,
      (distanceFromLeftOfBox - boxWidth / 2) / 20,
      1.05,
    ];
  };

  return (
    <a href={link} target="blank" ref={projectRef}>
      <animated.div
        className="project-square"
        // onMouseMove={({ clientX: x, pageY: y }) => set({ xys: calc(x, y) })}
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
