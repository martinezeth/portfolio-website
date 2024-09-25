import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
  Attributions
} from './components';

const App = () => {
  return (
    <Router>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div id="about" className="bg-about bg-cover bg-center bg-no-repeat">
                <About />
              </div>
              <Projects />
              <div
                id="experience"
                className="bg-experience bg-cover bg-center bg-no-repeat 
                  rounded-tl-[150px] rounded-br-[150px]">
                <div
                  className="bg-experienceLight bg-cover bg-center 
                  bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                  <Experience />
                </div>
              </div>
              <div id="tech" className="bg-tech bg-cover bg-center bg-no-repeat">
                <Tech />
              </div>
              <div id="contact" className="relative z-0 -mt-20">
                <Contact />
              </div>
            </>
          } />
          <Route path="/attributions" element={<Attributions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;