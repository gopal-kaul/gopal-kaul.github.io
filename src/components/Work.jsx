import { useState } from "react";
export default function Work() {
  const [selected, setSelected] = useState(0);
  const experience = [
    {
      company: "Oracle",
      role: "PDO Developer",
      duration: "June 2023",
      info: ["Point 1", "Point 2", "Point 3"],
    },
    {
      company: "SkilZen",
      role: "Frontend Engineer",
      duration: "May 2022 to August 2022",
      info: ["Point 1", "Point 2", "Point 3"],
    },
    {
      company: "PopcornApps",
      role: "Intern",
      duration: "April 2021 to April 2022",
      info: ["Point 1", "Point 2", "Point 3"],
    },
  ];
  return (
    <div className="min-h-screen text-white">
      <div className="pt-32">
        <h3 className="text-3xl text-light">Previous Work Experience</h3>
        <div className="flex flex-row pt-4 gap-4">
          <div className="md:w-1/4 w-full flex flex-col">
            {experience.map((item, idx) => (
              <div
                className={`${
                  idx === selected
                    ? "border-neonBlue text-neonBlue border-l-[3px] "
                    : "border-light border-l-2"
                }  pl-4  transition-all  py-2`}
                onClick={() => setSelected(idx)}
                key={item}
              >
                {item.company}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-light">
              {experience[selected].role}{" "}
              <span className="text-neonBlue">
                @ {experience[selected].company}
              </span>
            </h1>
            <h2 className="text-gray-400 pb-4">
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
