import React from 'react';
import GithubIcon from '../../icons/GithubIcon';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-center py-10">
        <div className="flex justify-center h-20">
          <div className="flex items-center justify-center">
              <h1 className="text-6xl font-bold  text-blue-400">Finger to Finger</h1>
          </div>

          <div className="flex items-center justify-center px-8">
              <a href="https://github.com/FranciszekaMateu/finger-TO-finger" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
              <GithubIcon/>
              GitHub
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
