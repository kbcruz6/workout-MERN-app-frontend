import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full p-3 flex flex-col gap-2 items-center justify-center bg-gray-100 dark:bg-slate-900 dark:text-white duration-300">
      {/*//! Social media */}
      <div className="flex flex-row gap-2">
        <a
          href="https://www.linkedin.com/in/agustin-frontend-react/"
          target="_blank"
          className="hover:text-slate-500 duration-300"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/kbcruz6"
          target="_blank"
          className="hover:text-slate-500 duration-300"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="mailto:agustin.tcw@gmail.com"
          target="_blank"
          className="hover:text-slate-500 duration-300"
        >
          <HiOutlineMail size={25} />
        </a>
      </div>

      {/*//! COPY */}
      <div className="duration-300">
        © 2023 | Created by{" "}
        <a
          href="https://portfolio-agustincruz.vercel.app/"
          target="_blank"
          className="hover:text-slate-500 font-bold "
        >
          Agustin Cruz
        </a>
      </div>
      <p className="duration-300">All rights reserved</p>
    </div>
  );
};

export default Footer;
