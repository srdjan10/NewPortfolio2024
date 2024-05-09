import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandFirebase } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <section class=" bg-center bg-no-repeat bg-[url('/src/pictures/quantum-gradient.png')] bg-blend-multiply  p-2">
      <div class="md:mx-44 mx-4 flex flex-col mt-16 mb-20 md:mb-32 font-RalewayExtraLight">
        <h4
          id="skills"
          class="mt-2 font-RalewaySemiBold text-2xl md:mt-11 font-medium leading-7 text-center md:text-center md:mb-4"
        >
          Skills
        </h4>
        <div class="flex flex-col gap-6 md:mt-16 md:flex-row justify-between ">
          <div class="md:mr-8">
            <h2 class=" text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left  font-bold text-2xl leading-10 mt-10 md:mt-0 ">
              HTML <FaHtml5 class="mx-auto" />
            </h2>
          </div>
          <div class="md:mr-8">
            <h2 class="text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-bold text-2xl leading-10">
              CSS <FaCss3Alt class="mx-auto" />
            </h2>
          </div>
          <div class="md:mr-8">
            <h2 class="text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-bold text-2xl leading-10">
              Tailwind <RiTailwindCssFill class="mx-auto" />
            </h2>
          </div>
          <div class="md:mr-8">
            <h2 class="text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-bold text-2xl leading-10">
              JavaScript-basic <IoLogoJavascript class="mx-auto" />
            </h2>
          </div>
        </div>
        <div class="flex flex-col gap-6 justify-between md:mt-14 md:flex-row">
          <div>
            <h2 class="text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left  font-bold text-2xl leading-10 mt-6 md:mt-0">
              React <FaReact class="mx-auto" />
            </h2>
          </div>
          <div>
            <h2 class="text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-bold text-2xl leading-10 mt-6 md:mt-0">
              Github <FaGithub class="mx-auto" />
            </h2>
          </div>
          <div>
            <h2 class="text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-bold text-2xl leading-10 mt-6 md:mt-0">
              SQL <BsFiletypeSql class="mx-auto" />
            </h2>
          </div>
          <div>
            <h2 class="text-black font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-bold text-2xl leading-10 mt-6 md:mt-0">
              Firebase <TbBrandFirebase class="mx-auto" />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
