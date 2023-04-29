import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-8 text-gray-800">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="https://via.placeholder.com/300"
            alt="Jaseunda"
            className="w-full h-64 md:h-auto md:w-96 mx-auto md:mx-0 md:rounded-md shadow-lg"
          />
          <div>
            <p className="mb-4 text-lg tracking-wide text-gray-700">
              Hi! I'm Jaseunda, a passionate Web Developer with experience in React, TypeScript, and Tailwind CSS. I enjoy learning new technologies and creating visually appealing, responsive web applications that provide a great user experience.
            </p>
            <p className="text-lg tracking-wide text-gray-700">
              My journey in web development began by creating small projects and applications, and gradually progressed to more complex tasks. Throughout my career, I have had the opportunity to work on a variety of projects, ranging from small personal websites to large e-commerce platforms.
            </p>
            <h3 className="mt-8 mb-4 text-2xl text-gray-800">Skills</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <li className="text-gray-700">React</li>
              <li className="text-gray-700">TypeScript</li>
              <li className="text-gray-700">Tailwind CSS</li>
              <li className="text-gray-700">JavaScript</li>
              <li className="text-gray-700">HTML5</li>
              <li className="text-gray-700">CSS3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;