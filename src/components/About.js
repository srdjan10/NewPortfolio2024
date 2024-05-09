import React from "react";
import me from "../pictures/srdjanilic.jpg";

const About = () => {
  return (
    <div class="flex flex-col-reverse md:flex-row mt-5 md:mt-24">
      <div class="mt-0 md:ml-40">
        <img
          src={me}
          alt="Developer's picture"
          class="h-96 rounded-3xl mx-auto p-2"
        />
      </div>
      <div class="md:ml-40">
        <div class="mx-auto sm:mt-1 md:mr-40"></div>
        <h1 class="p-4 font-RalewaySemiBold font-space text-5xl font-bold md:tracking-tighter md:-mt-16  font-Space sm:text-4xl leading-10 tracking-tight text-center md:text-left md:font-bold md:text-7xl md:leading-88">
          Nice to meet you!
          <br />
          I am Srdjan Ilic
          <br />
        </h1>
        <p class="mt-6 font-RalewayMedium mb-4 md:mt-11 text-base font-medium leading-7 font-space text-center md:text-left md:mb-16">
          -Junior Frontend Developer-
        </p>
        <a
          href="#contact"
          rel="noreferrer"
          class='mt-6 mb-4 md:mt-11 text-base font-medium leading-7 font-space text-center md:text-left md:mb-16"'
        >
          <p class="text-2xl font-RalewaySemiBold text-emerald-500">
            Contact me
          </p>
        </a>
        <hr class="mx-auto w-64 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      </div>
    </div>
  );
};
export default About;
