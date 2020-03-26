import React from "react";
import "./styles.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import SkillMeter from "../components/SkillMeter";

const MENU = [
  {
    id: 1,
    title: "hello"
  },
  {
    id: 2,
    title: "resume"
  },
  {
    id: 3,
    title: "projects"
  },
  {
    id: 4,
    title: "testimonial"
  },
  {
    id: 5,
    title: "contact"
  }
];

const RESUME_DATA = [
  {
    id: 1,
    title: "University of Minnesota Twin Cities",
    date: "2006 - 2005",
    description:
      "Awesome developer, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
  },
  {
    id: 2,
    title: "University of Minnesota Twin Cities",
    date: "2012 - 2019",
    description:
      "Awesome developer, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua"
  }
];

const EMPLOYMENT_DATA = [
  {
    id: 1,
    title: "CybSafe - CS Aware",
    date: "2019 - 2020",
    description:
      "Project focused on alerting and teaching Credit Suisse bank employees about fraud, cyber attacks and best practices."
  },
  {
    id: 2,
    title: "CybSafe - Phishtray",
    date: "2019 - 2020",
    description:
      "Open-source project for the UK government to teach people how to detect and act on internet pishings attacks."
  }
];

const SKILL_DATA = [
  {
    id: 1,
    label: "html",
    percent: 90
  },
  {
    id: 2,
    label: "css 3",
    percent: 90
  },
  {
    id: 3,
    label: "javascript",
    percent: 80
  },
  {
    id: 4,
    label: "react",
    percent: 90
  },
  {
    id: 5,
    label: "redux",
    percent: 70
  },
  {
    id: 6,
    label: "git / github",
    percent: 80
  },
  {
    id: 7,
    label: "node",
    percent: 60
  },
  {
    id: 8,
    label: "mongodb",
    percent: 50
  }
];

const Home = () => {
  return (
    <div className="main">
      <Header menu={MENU} />

      <section className="border-b border-gray-200 sm:pt-20" id="hello">
        <div className="container mx-auto px-6 sm:px-4 pb-20">
          <h3 className="text-4xl mb-6">Hi_</h3>

          <p className="roboto sm:w-4/5 text-lg leading-relaxed mb-12 text-gray-700">
            I am Junior Web developer able to build a Web presence from the
            ground up - from concept, navigation, layout and programming to UX
            and SEO. Skilled at writing well-designed, testable and efficient
            code using current best practices in Web development. Fast learner,
            hard worker and team player who is proficient in an array of
            scripting languages and multimedia Web tools.
          </p>

          <Button
            label="Download CV"
            link="https://www.google.com"
            blank
            icon={faDownload}
          />
        </div>
      </section>

      <section id="resume">
        <div className="container mx-auto px-6 sm:px-4 sm:pt-20">
          <h3 className="text-4xl mb-6">Resume_</h3>

          <p className="roboto sm:w-4/5 text-lg leading-relaxed mb-12 text-gray-700">
            I am Junior Web developer able to build a Web presence from the
            ground up - from concept, navigation, layout and programming to UX
            and SEO. Skilled at writing well-designed, testable and efficient
            code using current best practices in Web development. Fast learner,
            hard worker and team player who is proficient in an array of
            scripting languages and multimedia Web tools.
          </p>

          <h4 className="uppercase text-1xl text-gray-500 my-12 tracking-widest">
            Education
          </h4>

          {RESUME_DATA?.map(item => (
            <Card
              {...item}
              last={RESUME_DATA.length === item.id}
              key={item.id}
            />
          ))}

          <h4 className="uppercase text-1xl text-gray-500 my-12 tracking-widest">
            Employment
          </h4>

          {EMPLOYMENT_DATA?.map(item => (
            <Card
              {...item}
              last={RESUME_DATA.length === item.id}
              key={item.id}
            />
          ))}

          <h4 className="uppercase text-1xl text-gray-500 my-12 tracking-widest">
            General Skills
          </h4>

          <div className="grid grid-cols-2 gap-6">
            {SKILL_DATA?.map(item => (
              <SkillMeter
                key={item.id}
                label={item.label}
                percent={item.percent}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container mx-auto px-6 sm:px-4 sm:pt-20">
          <h3 className="text-4xl mb-6">Projects_</h3>

          <ul className="flex mb-12">
            <li className="mr-4 text-xs">
              <button className="uppercase text-gray-600 hover:text-indigo-700">
                All_
              </button>
            </li>
            <li className="mr-4 text-xs">
              <button className="uppercase text-gray-600 hover:text-indigo-700">
                Mobile Apps_
              </button>
            </li>
            <li className="mr-4 text-xs">
              <button className="uppercase text-gray-600 hover:text-indigo-700">
                Websites_
              </button>
            </li>
            <li className="mr-4 text-xs">
              <button className="uppercase text-gray-600 hover:text-indigo-700">
                Landing Pages_
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
