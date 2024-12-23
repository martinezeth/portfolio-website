import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-[250px] sm:w-[250px] card-gradient p-[1px] rounded-[20px] shadow-card sm:mx-0 mx-auto">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="-mt-[4rem] px-6 sm:px-0">
      <motion.div
        variants={textVariant()}
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: isMobile ? 0 : 0.25 }}>
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: isMobile ? 0 : 0.25 }}
        className="mt-4 text-taupe text-[18px] leading-[30px]">
        <span className="block indent-8 sm:indent-8">
          As a recent Computer Science graduate from Sonoma State University, I combine technical expertise with a passion for developing innovative software solutions that address real-world challenges. My academic journey has been complemented by hands-on experience in various cutting-edge technologies and development methodologies.
        </span>
        <span className="block indent-8 mt-4">
          In my role as a Student Researcher, I focused on computer vision applications, notably contributing to the analysis of NASA's 2017 Eclipse MegaMovie using machine learning algorithms. Previously, as an XR Student Developer, I designed and implemented immersive VR educational applications, demonstrating my ability to work with emerging technologies.
        </span>
        <span className="block indent-8 mt-4">
          I approach each project with creativity and technical precision. I'm excited about the possibilities that lie at the intersection of technology and real-world problems. My goal is to continue growing as a developer, taking on challenges that push the boundaries of what's possible in software development.
        </span>
      </motion.p>

      <motion.div
        className="mt-20 flex flex-wrap gap-10 justify-center sm:justify-start items-center"
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: isMobile ? 0 : 0.25 }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');