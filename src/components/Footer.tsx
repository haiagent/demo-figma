import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4 md:px-8">
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/jaseunda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in hover:text-blue-300 transition-colors duration-300"></i>
          </a>
          <a
            href="https://github.com/jaseunda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hover:text-gray-300 transition-colors duration-300"></i>
          </a>
          <a
            href="https://twitter.com/jaseunda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter hover:text-blue-400 transition-colors duration-300"></i>
          </a>
        </div>
        <p className="mt-4 text-center text-sm font-light">
          © {new Date().getFullYear()} Jaseunda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;