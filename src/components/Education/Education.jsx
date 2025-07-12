import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
          The details of my current academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full mb-12 flex justify-center"
          >
            <div className="w-full sm:max-w-2xl bg-gray-900 border border-gray-500 transition-transform duration-300 hover:scale-[1.025] hover:shadow-[0_5px_8px_rgba(168,85,247,0.5)] backdrop-blur-md p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* ✅ Responsive, non-shrinking logo */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
