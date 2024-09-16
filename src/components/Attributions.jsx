import React from 'react';
import { Link } from 'react-router-dom';

const Attributions = () => {
  return (
    <div className="bg-flashWhite min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-eerieBlack mb-8">Attributions</h1>
        <div className="bg-white shadow-md rounded p-6 text-battleGray">
          <h2 className="text-2xl font-semibold text-eerieBlack mb-4">Icons</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="https://www.flaticon.com/free-icons/education" title="education icons" className="text-french hover:text-battleGray">Education icons created by Freepik - Flaticon</a>
            </li>
            <li>
              <a href="https://www.flaticon.com/free-icons/play" title="play icons" className="text-french hover:text-battleGray">Play icons created by Freepik - Flaticon</a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-eerieBlack mb-4 mt-6">Images</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="https://www.pexels.com/@eric-thurber-2062658/" title="Eric Thurber on Pexels" className="text-french hover:text-battleGray">Background image for the 'Technologies' section by Eric Thurber from</a>  <a href="https://www.pexels.com/photo/time-lapse-photo-of-city-during-night-3688579/" title="Pexels" className="text-french hover:text-battleGray">Pexels</a>
            </li>
          </ul>

        </div>
        <Link to="/" className="mt-8 inline-block text-french hover:text-battleGray transition duration-300">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Attributions;