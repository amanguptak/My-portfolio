import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import useReadMore from "../../hooks/useReadmore";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  previewLink,
}) => {

  const { text, isReadMore, toggleReadMore}= useReadMore(description)
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className={`bg-slate-200 w-full rounded-2xl p-5 sm:w-[360px] h-${isReadMore ? '[500px]' : 'fit'}  cursor-pointer`}>
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover border-2 p-2 border-[#428bd0]"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex space-x-2 justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(previewLink, "_blank")}
                title="preview-link"
                className="bg-sky-400 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/712/564/original/3d-render-illustration-of-project-management-analysis-result-icon-png.png"
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-gray-600">{name}</h3>
            <p className="text-gray-600 mt-2 text-[14px]">{text}</p>
            <button className="text-sky-400" onClick={toggleReadMore}>
        {isReadMore ? 'Read More' : 'Read Less'}
      </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full" id="projects">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-white mt-3 max-w-5xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid lg:grid-cols-3 gap-2 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
