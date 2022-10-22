import { FiGithub } from "react-icons/fi/index";
import { FaFirefoxBrowser } from "react-icons/fa/index";
import { useState } from "react";
export default function Projects() {
  const [selected, setSelected] = useState(0);
  const projects = [
    {
      name: "My Blog",
      github: "https://github.com/gopal-kaul/gopal-kaul.github.io",
      site: "https://gopal-kaul.github.io/",
      info: "My Portfolio site built in Astro and Tailwind.",
    },
    {
      name: "Freelance work - F+S",
      site: "https://fpluss.in/",
      info: "Some freelance work.",
    },
  ];
  return (
    <div className="min-h-screen text-white">
      <div className="pt-32">
        <div className="flex flex-row items-center gap-4 whitespace-nowrap text-light">
          <h3 className="text-3xl">Projects</h3>
          <hr className="text-4xl w-60" />
        </div>
        <div className="flex flex-col md:flex-row pt-4 gap-4">
          {/* <div className="md:hidden flex flex-row overflow-scroll">
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
          </div> */}
          <div className="hidden md:w-[30%] md:flex md:flex-col">
            {projects.map((item, idx) => (
              <div
                className={`${
                  idx === selected
                    ? "border-neonBlue text-neonBlue border-l-[3px] bg-light bg-opacity-50"
                    : "border-light border-l-2"
                } pl-4  transition-all  py-2`}
                onClick={() => setSelected(idx)}
                key={idx}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col pt-6 md:pt-0">
            <h1 className="text-2xl text-light">{projects[selected].name}</h1>
            <div className="flex flex-row gap-4 mt-2">
              {projects[selected].github !== undefined && (
                <a
                  className="hover:text-neonBlue"
                  href={projects[selected].github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FiGithub />
                </a>
              )}
              {projects[selected].site !== undefined && (
                <a
                  className="hover:text-neonBlue"
                  href={projects[selected].site}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFirefoxBrowser />
                </a>
              )}
            </div>
            <p className="text-gray-400 pb-4 mt-4">
              {projects[selected].info}
            </p> 
            {/* <ul className="list-disc marker:text-neonBlue pl-4">
              {experience[selected].info.map((item) => (
                <li className="text-gray-400" key={item}>
                  {item}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
