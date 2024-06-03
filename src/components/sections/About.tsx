

import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";


const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-white mt-4 max-w-6xl text-justify text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

     
    </>
  );
};

export default SectionWrapper(About, "about");
