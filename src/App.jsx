import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div>
                <Hero />
              </div>

              <div className="bg-about bg-cover bg-center bg-no-repeat">
                <About />
              </div>

              <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                <Tech />
              </div>

              <Projects />

              <div
                className="bg-experience bg-cover bg-center bg-no-repeat 
                  rounded-tl-[150px] rounded-br-[150px]">
                <div
                  className="bg-experienceLight bg-cover bg-center 
                  bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                  <Experience />
                </div>
              </div>
              <div className="relative z-0">
                <Contact />
              </div>
            </>
          } />
          <Route path="/attributions" element={<Attributions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;