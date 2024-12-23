import { motion } from 'framer-motion';
import { styles } from '../styles';
import { abstractspiderweb } from '../assets';

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[60vh] mx-auto overflow-hidden">
      {/* Background Image and Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={abstractspiderweb}
          alt="abstract network"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`absolute inset-0 ${styles.paddingX} 
        max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}>
        <div className="flex flex-col justify-center items-center mt-5 ml-3">
          <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
          <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
        </div>

        <div className="z-10 mt-[100px]">
          <h1
            className={`${styles.heroHeadText} text-timberWolf font-poppins uppercase`}>
            Hi, I'm{' '}
            <span
              className="sm:text-battleGray sm:text-[90px] 
              text-timberWolf xs:text-[50px] text-[40px] 
              font-mova font-extrabold uppercase 
              drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Ethan.
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-timberWolf`}>
            A Computer Science graduate passionate about
            developing innovative software solutions.
            From VR applications to web platforms,
            I bring creativity and technical skills
            to every project.
          </p>
        </div>
      </motion.div>

      {/* Scroll Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute xs:bottom-10 bottom-[80px] w-full 
        flex justify-center items-center sm:bottom-10">
        <div
          onClick={handleScrollToAbout}
          className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2 cursor-pointer sm:bottom-auto">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-taupe mb-1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;