import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import SocialLinks from "./components/sections/SocialLink";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#428bd0] relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <div className="cursor-grab">
          <Hero />
          </div>
       
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <SocialLinks/>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
