import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, githubDark, linkedinDark } from '../assets';

const SocialIcon = ({ href, src, alt, isActive, setActive }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`transition-colors duration-300 ${isActive ? 'opacity-80' : 'opacity-100'}`}
    onMouseEnter={() => setActive(alt)}
    onMouseLeave={() => setActive(null)}
  >
    <img
      src={src}
      alt={alt}
      className="w-[30px] h-[30px] object-contain cursor-pointer"
    />
  </a>
);

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [activeSocial, setActiveSocial] = useState(null);

  const handleNavClick = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (toggle) setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          <span className="text-eerieBlack font-opensans text-[24px] font-[500] tracking-wider">
            Ethan Martinez
          </span>
        </Link>
        <div className="flex items-center">
          <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                  } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
                onClick={() => handleNavClick(nav.id)}>
                {nav.title}
              </li>
            ))}
          </ul>
          <div className="hidden sm:flex items-center ml-10 gap-5">
            <SocialIcon
              href="https://github.com/martinezeth"
              src={githubDark}
              alt="GitHub"
              isActive={activeSocial === 'GitHub'}
              setActive={setActiveSocial}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/martinezethan/"
              src={linkedinDark}
              alt="LinkedIn"
              isActive={activeSocial === 'LinkedIn'}
              setActive={setActiveSocial}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`fixed top-0 right-0 w-[70%] h-full bg-flashWhite z-20 transition-transform 
                transform ${toggle ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}>
              <div className="flex justify-end p-4">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col gap-6 items-start mt-6 px-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                      } text-[18px] font-semibold font-opensans 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => handleNavClick(nav.id)}>
                    {nav.title}
                  </li>
                ))}
              </ul>
              <div className="flex mt-6 gap-5 px-4">
                <SocialIcon
                  href="https://github.com/martinezeth"
                  src={githubDark}
                  alt="GitHub"
                  isActive={activeSocial === 'GitHub'}
                  setActive={setActiveSocial}
                />
                <SocialIcon
                  href="https://www.linkedin.com/in/martinezethan/"
                  src={linkedinDark}
                  alt="LinkedIn"
                  isActive={activeSocial === 'LinkedIn'}
                  setActive={setActiveSocial}
                />
              </div>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[30px] h-[30px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;