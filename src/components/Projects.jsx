import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, playButtonArrowhead, playButtonArrowheadHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  features,
  images,
  repo,
  demo,
  techStack,
  index,
  active,
  handleClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getAllTechnologies = (techStack) => {
    if (!techStack) return [];
    return Object.values(techStack).flat();
  };

  return (
    <>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
          } flex items-center justify-center min-w-[170px] cursor-pointer card-shadow transition-all duration-300 h-[480px]`}
        onClick={() => handleClick(id)}>

        <div className={`absolute top-0 left-0 z-10 h-full w-full rounded-[24px] transition-all duration-300 ${active === id ? 'bg-black/50' : 'bg-jetLight opacity-[0.5]'
          }`} />

        <img
          src={images[currentImageIndex]}
          alt={name}
          className="absolute w-full h-full object-cover rounded-[24px]"
        />

        {active !== id ? (
          <div className="flex items-center justify-start pr-[4.5rem]">
            <h3
              className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
              whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
              absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
              leading-none z-20">
              {name}
            </h3>
          </div>
        ) : (
          <div className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(0,0,0,0.75)] rounded-b-[24px] z-20">

            {/* Image controls */}
            {images.length > 1 && (
              <div className="absolute bottom-[95%] left-0 right-0 flex justify-center gap-2 pb-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full ${currentImageIndex === idx ? 'bg-white' : 'bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Controls for image and repo */}
            <div className="absolute top-4 right-4 flex gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFullImage(true);
                }}
                className="bg-night p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">🔍</span>
              </button>

              {repo && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(repo, '_blank');
                  }}
                  className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                    flex justify-center items-center cursor-pointer
                    sm:opacity-[0.9] opacity-[0.8]">
                  <img
                    src={github}
                    alt="source code"
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4 overflow-y-auto max-h-[calc(480px-200px)] pr-2">
              <h2 className="font-bold sm:text-[32px] text-[24px] 
                text-timberWolf uppercase font-beckman">
                {name}
              </h2>

              <div className="space-y-4">
                <p className="text-timberWolf sm:text-[14px] text-[12px] 
                  max-w-3xl sm:leading-[24px] leading-[18px]
                  font-poppins tracking-[1px] whitespace-pre-line">
                  {description}
                </p>

                {features && features.length > 0 && (
                  <div className="mt-4">
                    <div className="text-timberWolf font-semibold mb-2">Key Features:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {features.map((feature, index) => (
                        <li key={index} className="text-timberWolf sm:text-[14px] text-[12px] 
                          font-poppins tracking-[1px] pl-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {techStack && (
                <div className="pt-2 border-t border-gray-600">
                  <div className="text-timberWolf text-[13px] font-poppins">
                    {getAllTechnologies(techStack).join(' • ')}
                  </div>
                </div>
              )}

              {demo && (
                <button
                  className="live-demo flex justify-between 
                  sm:text-[16px] text-[14px] text-timberWolf 
                  font-bold font-beckman items-center py-5 pl-2 pr-3 
                  whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
                  w-[125px] h-[46px] rounded-[10px] glassmorphism 
                  hover:bg-battleGray hover:text-eerieBlack 
                  transition duration-[0.2s] ease-in-out"
                  onClick={() => window.open(demo, '_blank')}
                  onMouseOver={() => {
                    document
                      .querySelector('.btn-icon')
                      .setAttribute('src', playButtonArrowheadHover);
                  }}
                  onMouseOut={() => {
                    document
                      .querySelector('.btn-icon')
                      .setAttribute('src', playButtonArrowhead);
                  }}>
                  <img
                    src={playButtonArrowhead}
                    alt="playButtonArrowhead"
                    className="btn-icon sm:w-[34px] sm:h-[34px] 
                      w-[30px] h-[30px] object-contain"
                  />
                  LIVE DEMO
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>

      {/* Full Image Modal */}
      {showFullImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center 
            justify-center z-50 p-4"
          onClick={() => setShowFullImage(false)}>
          <div className="relative max-w-7xl w-full">
            <div className="flex justify-center items-center">
              <img
                src={images[currentImageIndex]}
                alt={name}
                className="max-h-[90vh] max-w-full object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 bg-white/10 p-2 rounded-full 
                      hover:bg-white/20 transition-colors">
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 bg-white/10 p-2 rounded-full 
                      hover:bg-white/20 transition-colors">
                    →
                  </button>
                </>
              )}
            </div>
            <div className="text-center mt-4">
              <p className="text-white">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Selected Works</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex mb-20">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project demonstrates my ability
          to solve complex problems, work with different technologies, and
          effectively manage project development.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[20px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');