import React from "react";

import "./SectionWork.css";
import Fade from "react-reveal/Fade";

const JOBS = [
  {
    id: "tapestry",
    company: "Tapestry.ai",
    website: "https://tapestry.ai",
    image: "/images/tapestry.png",
    title: "Front-end Developer",
    date: "May 2021 - Present",
    description:
      "Tapestry provides tools that enable you to easily access and share high quality real-time insights in relation to the performance of your products, categories and markets.",
  },
  {
    id: "smart",
    company: "Smart Studio",
    website: "https://www.linkedin.com/company/smartstudioai/",
    image: "/images/smartstudio.png",
    title: "Junior Front-end Developer",
    date: "July 2020 - May 2021",
    description:
      "Smart Studio is a consulting company leveraging the power of AI to drive value for their customers.",
  },
  {
    id: "Sound",
    company: "Live Sound Engineer / Tour Manager",
    website: "",
    image: "/images/print_kevin_A.jpg",
    title: "Freelance",
    date: "July 2013 - Present",
    description:
      "Tour managed, production managed & did sound internationaly for various australian & international bands such as Xavier Rudd, Wolfmother, the Growlers, Tijuana Cartel, etc... ",
  },
];

function SectionWork() {
  return (
    <Fade bottom cascade>
      <section id="Work" className="section section-work span_8_of_12">
        <h3>Work</h3>

        <ul className="section-work-work-list">
          {JOBS.map((job) => (
            <li key={job.id} className="section-work-work-list-item">
              <a
                href={job.website}
                className="section-work-work-list-item-website-card"
                style={{ backgroundImage: `url("${job.image}")` }}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">
                  Link to {job.company}&apos;s website
                </span>
              </a>

              <div className="section-work-work-list-item-text-block">
                <h5 className="section-work-work-list-item-company">
                  {job.company}
                </h5>
                <h6 className="section-work-work-list-item-job-title">
                  {job.title}
                </h6>
                <p className="section-work-work-list-item-job-dates">
                  {job.date}
                </p>
                <p className="section-work-work-list-item-job-description">
                  {job.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Fade>
  );
}

export default SectionWork;
