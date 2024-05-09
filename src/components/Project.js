import React from "react";

import Galery from "./Galery";

const Project = () => {
  return (
    <section class=" bg-center bg-no-repeat bg-[url('/src/pictures/tortoise-shell.png')] bg-blend-multiply text-white    p-2 ">
      <div class="md:mx-44 mx-4 flex flex-col mt-4 mb-10 md:mb-32 font-RalewayExtraLight">
        <h4
          id="project"
          class="mt-2 text-2xl md:mt-11 font-medium leading-7 text-center md:text-center md:mb-4 p-4"
        >
          Projects
        </h4>
        <Galery />
      </div>
    </section>
  );
};
export default Project;
