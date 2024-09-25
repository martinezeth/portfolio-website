import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Grabbing endpoint from environment variables
    const getFormEndpoint = import.meta.env.VITE_GETFORM_ENDPOINT;

    fetch(getFormEndpoint, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then(() => {
        setLoading(false);
        setShowOverlay(true); // Show overlay on success

        setForm({
          name: '',
          email: '',
          message: '',
        });

        // Remove the overlay after 4 seconds
        setTimeout(() => {
          setShowOverlay(false);
        }, 4000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please try again.');
      });
  };


  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>


        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 font-poppins"
          action={import.meta.env.VITE_GETFORM_ENDPOINT}
          method="POST"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
              required
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>

      {showOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-eerieBlack py-4 px-8 rounded-lg shadow-lg">
            <p className="text-lg font-bold">Thank you!</p>
            <p>I will get back to you as soon as possible.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');