import { useState } from "react";
export default function Work() {
  const [selected, setSelected] = useState(0);
  const experience = [
    {
      company: "Oracle",
      role: "PDO Developer",
      duration: "June 2023",
      info: [
        "PDO, Oracle CAGBU @18.2LPA INR",
        "Placed under campus placement",
        "First to get placed in the entire college",
      ],
    },
    {

      company: "Accellor(previously PopcornApps)",
      role: "Intern",
      duration: "September 2023 - Present",
      info: [
        "Worked on projects using Strapi and NestJS",
      ],
    },
    {
      company: "SkilZen",
      role: "Frontend Engineer",
      duration: "May 2022 - August 2022",
      info: [
        "Worked with NextJS, Tailwind and Directus",
        "Built https://collegeking.dev/",
        "Also worked with integrating backend data to frontend",
      ],
    },
    {
      company: "PopcornApps",
      role: "Intern",
      duration: "April 2021 to April 2022",
      info: ["Worked on Tableau, NodeJS and SQL" ],
    },
  ];
  return (
    <div className="min-h-screen text-white">
      <div className="pt-32 md:pt-[15%]">
        <div className="flex flex-row items-center gap-4 whitespace-nowrap text-light">
          <h3 className="text-[1.5rem]">Previous Work Experience</h3>
          <hr className="text-4xl w-60" />
        </div>
        <div className="flex flex-col md:flex-row pt-4 gap-4">
          <div className="md:hidden flex flex-row overflow-scroll">
            {experience.map((item, idx) => (
              <div
                className={`${
                  idx === selected
                    ? "border-neonBlue text-neonBlue border-b-[3px] "
                    : "border-light border-b-2"
                }  px-3  transition-colors ease-in-out duration-500 py-2`}
                onClick={() => setSelected(idx)}
                key={idx}
              >
                {item.company}
              </div>
            ))}
          </div>
          <div className="hidden md:w-[30%] md:flex md:flex-col">
            {experience.map((item, idx) => (
              <div
                className={`${
                  idx === selected
                    ? "border-neonBlue text-neonBlue border-l-[3px] bg-light bg-opacity-50"
                    : "border-light border-l-2"
                } pl-4  transition-all  py-2`}
                onClick={() => setSelected(idx)}
                key={idx}
              >
                {item.company}
              </div>
            ))}
          </div>
          <div className="flex flex-col pt-6 md:pt-0">
            <h1 className="text-2xl text-light">
              {experience[selected].role}{" "}
              <span className="text-neonBlue">
                @ {experience[selected].company}
              </span>
            </h1>
            <h2 className="text-gray-400 pb-4 font-mono">
              {experience[selected].duration}
            </h2>
            <ul className="list-disc marker:text-neonBlue pl-4">
              {experience[selected].info.map((item) => (
                <li className="text-gray-400" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
