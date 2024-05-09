import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const MenuP = () => {
  return (
    <header class=" flex flex-col md:flex-row items-center justify-between md:mx-40 mt-5 ">
      <h2 class="text-4xl font-bold font-RalewayMedium leading-8 tracking-tighter md:mr-96 ">
        srdjanilic
      </h2>
      <div class="flex flex-row gap-8 items-center font-RalewayExtraLight mt-5 md:mt-0  sm:pb-15 ">
        <a href="#about" rel="noreferrer">
          <p class="hover:font-RalewaySemiBold transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110">
            About
          </p>
        </a>
        <a href="#skills" rel="noreferrer">
          <p class="hover:font-RalewaySemiBold transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110">
            Skills
          </p>
        </a>
        <a href="#experience" rel="noreferrer">
          <p class="hover:font-RalewaySemiBold transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110">
            Experience
          </p>
        </a>
        <a href="#project" rel="noreferrer">
          <p class="hover:font-RalewaySemiBold transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110">
            Project
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/srdjan-ilic-112b90238/"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <FaLinkedinIn
              size="30px"
              class="transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110"
            />
          </p>
        </a>
        <a href="https://github.com/srdjan10/" target="_blank" rel="noreferrer">
          <p>
            <FaGithub
              size="30px"
              class=" transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110"
            />
          </p>
        </a>
        <a href="https://sr-rs.facebook.com/" target="_blank" rel="noreferrer">
          <p>
            <FaFacebookF
              size="30px"
              class="transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110"
            />
          </p>
        </a>
      </div>
    </header>
  );
};
export default MenuP;
