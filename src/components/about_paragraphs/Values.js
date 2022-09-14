import React from "react";

const VALUES = [
  {
    value: "Go After Your Dreams",
    link: "https://en.wikipedia.org/wiki/The_Alchemist_(novel)",
  },
  {
    value: "80/20 to the Max",
    link: "https://en.wikipedia.org/wiki/Pareto_principle",
  },
  {
    value: "Do Cool Shit",
    link: "https://www.youtube.com/watch?v=dylrDOcXEJ0&ab_channel=LoadedAmbassadors",
  },
  {
    value: "Freedom",
    link: "https://quoteinvestigator.com/2011/10/15/liberty-fist-nose/#:~:text=%E2%80%9CYour%20right%20to%20swing%20your,than%20thirty%2Dfive%20additional%20years.",
  },
  { value: "Deepening Experience" },
  { value: "Have Fun With It" },
  {
    value: "Spend Time Outside",
    link: "https://unsplash.com/s/photos/mountain",
  },
];

function Values() {
  return (
    <ul className="values-list">
      {VALUES.map((value) => {
        return (
          <li key={value.value}>
            {value.link ? (
              <a href={value.link} target="_blank" rel="noreferrer">
                {value.value}
              </a>
            ) : (
              value.value
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Values;
