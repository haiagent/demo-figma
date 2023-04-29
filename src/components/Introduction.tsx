import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-fixed h-screen relative" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="container mx-auto px-4 md:px-0 h-full flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-4">Hi, I'm Jaseunda</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">
          I'm a web developer with expertise in React, TypeScript, and Tailwind CSS. I'm passionate about creating high-quality, visually appealing, and user-friendly websites and applications.
        </p>
        <div className="flex justify-center">
          <a href="#projects" className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-base md:text-lg lg:text-xl py-3 px-6 md:px-8 lg:px-10 rounded-md transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600">
            View My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;