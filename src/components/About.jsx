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
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
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
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        As a recent Computer Science graduate from Sonoma State University, I've developed a passion for creating innovative software solutions that make a real impact. My journey in tech has been diverse and exciting - from developing immersive VR educational applications to building web-based crisis management platforms.

        My experience as a Student Researcher allowed me to dive deep into computer vision, working on projects like analyzing NASA's 2017 Eclipse MegaMovie using machine learning algorithms. This experience, combined with my role as an XR Student Developer, has honed my skills in cutting-edge technologies and problem-solving.

        I'm proficient in a range of programming languages including Python, C++, Swift, and JavaScript, and I'm always eager to learn more. Whether it's developing iOS apps, working with React and Node.js, or utilizing tools like Firebase and AWS, I approach each project with creativity and technical precision.

        I'm excited about the possibilities that lie at the intersection of technology and real-world problems. My goal is to continue growing as a developer, taking on challenges that push the boundaries of what's possible in software development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
