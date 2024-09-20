import React from 'react';
import { Link } from 'react-router-dom';
import { githubDark, linkedinDark } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-jetLight text-timberWolf py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          © {new Date().getFullYear()} Ethan Martinez. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/martinezeth" target="_blank" rel="noopener noreferrer">
            <img src={githubDark} alt="GitHub" className="w-6 h-6 transition-colors duration-300 hover:opacity-80" />
          </a>
          <a href="https://linkedin.com/in/martinezethan" target="_blank" rel="noopener noreferrer">
            <img src={linkedinDark} alt="LinkedIn" className="w-6 h-6 transition-colors duration-300 hover:opacity-80" />
          </a>
          <Link to="/attributions" className="text-french hover:text-battleGray transition duration-300">
            Icon Attributions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;