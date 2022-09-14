import React from "react";

const MY_INTEREST = [
  "ReactJS",
  "Typescript",
  "Accessibility",
  "Feature Flag Management",
  "NLP",
  "WebGL",
];

function Learning() {
  return (
    <ul className="stair">
      {MY_INTEREST.map((interest) => (
        <li key={interest}>{interest}</li>
      ))}
    </ul>
  );
}

export default Learning;
