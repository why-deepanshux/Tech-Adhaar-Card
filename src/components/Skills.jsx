import React from "react";
const Skills = () => {
  const skills = {
    "Programming Languages": [
      "C",
      "C++",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
    ],
    "Frontend Technologies": [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "ShadCN",
      "Ant Design (Ant UI)",
      "React",
      "Next.js",
    ],
    "Backend & Databases": ["Node.js", "Express.js", "MongoDB", "SQL"],
  };

  return (
    <div className="w-full mt-4 p-2">
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
      <div className="flex flex-col gap-[2rem] justify-evenly">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col justify-between gap-[2rem] p-2 border-2 retro-shadow w-[95%] scroll-animation"
          >
            <div className="text-xl font-semibold">{category}</div>
            <div className="flex flex-row flex-wrap gap-[0.5rem]">
              {items.map((skill) => (
                <span key={skill} className="px-2 py-1 border text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
