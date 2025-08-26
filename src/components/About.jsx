//About.jsx
import React from "react";


const About = () => {
  return (
    // Main container with full width/height and background
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      {/*Content container with cyan background*/}
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/*Title section using grid */}
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
            {/*Content section with responsive grid*/}
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Esmeralda Quezada, nice to meet you. Please take a peak around see if you like my work.
              </p>
            </div>
            <div>
              <p>
                I'm a recent web developer in training by The Knowledge house as a fellow in the full stack web developer cohort. I stumbled upon the tkh in a previous internship in technology as I was exploring a career change into technology and was trying to learn more of technology and its many career opportunities. At first I was going for a different cohort in tkh and I can say Im beyond grateful I did not end up in that cohort as I enjoy web development more than the career paths I had tried before. In web development I have gone from 0 knowledge to now being able to know and understand HTML, CSS, java-script, node.js, React and having some projects under my belt and I’m very grateful to tkh for that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;