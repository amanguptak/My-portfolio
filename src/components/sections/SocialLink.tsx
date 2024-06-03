
import GithubIcon from '../../assets/github-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';

import { Link } from 'react-router-dom';

const SocialLinks = () => {
  return (
    <section id="contact" className=" m-20 mb-0 grid md:grid-cols-2  py-24 gap-4 relative">
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-gray-200 mb-4 max-w-md">
          {' '}
          Hey there! I&apos;d love to discuss about web development. Feel free to reach out to me my
          inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link to="https://github.com/amanguptak" target="_blank">
            <img
              src={GithubIcon}
              className="bg-gray-800 rounded-full"
              alt="Github Icon"
              loading="lazy"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/aman-gupta-7577691b5" target="_blank">
            <img src={LinkedinIcon} alt="Linkedin Icon" className="bg-blue-600 rounded-md" />
          </Link>
          <Link to="https://gitlab.com/amanguptaofficial932" target="_blank">
            <img
              className="mt-1 mx-1"
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/gitlab_tile_logo_icon_170092.png"
              alt="Linkedin Icon"
              height={40}
              width={40}
              loading='lazy'
            />
          </Link>
        </div>
      </div>
      <div className="">
        <h5 className="text-xl font-bold text-white my-2 text-end">Contact Me</h5>
        <div className="justify-end items-end flex">
          <ul className="list-none text-gray-200  ">
            <li className="flex">
              <p className="my-2">amanofficial9294@gmail.com</p>
              <img
                className="mt-1 mx-1 ml-2 p-2"
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                alt="Linkedin Icon"
                height={40}
                width={40}
              />
            </li>

            <li className="flex items-end justify-end">
              <p className="my-2"> amangupta041</p>
              <Link
                to="https://twitter.com/amangupta041?t=UVyLQ5ZY9ZRQKfy4WmtUmw&s=09"
                target="_blank"
              >
                <img
                  className="mt-1 mx-1 ml-2 p-1 rounded-lg"
                  src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
                  alt="Linkedin Icon"
                  height={40}
                  width={40}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
