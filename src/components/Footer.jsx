import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-jetLight text-timberWolf py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          © {new Date().getFullYear()} Ethan Martinez. All rights reserved.
        </div>
        <div>
          <Link to="/attributions" className="text-french hover:text-battleGray transition duration-300">
            Icon Attributions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;