import React from "react";

const Experience = () => {
  return (
    <section class="bg-center bg-no-repeat bg-[url('/src/pictures/endless-constellation.png')] bg-blend-multiply p-4 text-white font-RalewayRegular">
      <h4
        id="experience"
        class="mt-2 text-2xl md:mt-11 font-medium leading-7 text-center md:text-center md:mb-4"
      >
        Experience
      </h4>
      <div class="relative flex flex-col items-center  max-w-screen-xl px-2 mx-auto md:flex-row sm:px-6 p-8">
        <div class="text-justify items-center mx-auto">
          <h5 class="text-2xl font-extrabold leading-10 tracking-tight text-white sm:text-3xl sm:leading-none md:text-4xl">
            System administrator - 2016-present <br />
            "Institute of Public Health Cacak"
          </h5>
          <p class="max-w-md mx-auto mt-3 text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            <ul class="text-justify text-lg italic">
              <li>
                - Work on the website of the Institute for setting up and
                redesigning pages (HTML, PHP myAdmin).
              </li>
              <li> - Work on Cpanel.</li>
              <li>
                - Creation of software for services and centers (software for
                vehicle records, software for records of equipment of the
                Institute of Public Health, software for keeping records of
                infectious diseases at the level of Moravian district, software
                for calculating the lower and upper limits of the test tube).
              </li>
              <li>
                - Work with existing databases created by the Institute of
                Public Health of Serbia "Dr. Milan Jovanovic Batut" (MS Access)
              </li>
            </ul>
          </p>
          <div class="mt-5 sm:flex md:mt-8"></div>
        </div>
      </div>
      <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <div class="relative w-full p-3 rounded  md:p-8">
            <div class="rounded-lg  text-white w-full">
              <h5 class="text-2xl font-extrabold leading-10 tracking-tight text-white sm:text-3xl sm:leading-none md:text-4xl">
                Software developer - 2014.-2016.
                <br /> "Perfect Software" Cacak
              </h5>
              <ul class="text-justify text-lg italic">
                <li> - Working with Microsoft SQL databases.</li>
                <li>
                  - Design, construction, testing and maintenance of software
                  for existing and new users.
                </li>
                <li>
                  - Consulting and solutions in information systems as well as
                  work with Microsoft Visual FoxPro 9.0.
                </li>
                <li>
                  - Implementation of ideas in software for hotels, car
                  dealerships, markets, shops
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div class="text-left">
            <h5 class="text-2xl font-extrabold leading-10 tracking-tight text-white sm:text-3xl sm:leading-none md:text-4xl">
              System administrator: 2010.-2013. <br />
              Health Center "Dr Dragisa Misovic" Cacak
            </h5>
            <p class="max-w-md mx-auto mt-3 text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              <ul class="text-justify text-lg italic text-white">
                <li> - Maintenance of existing software.</li>
                <li> - Hardware maintenance.</li>
                <li>
                  - Maintenance of a computer network within the entire Health
                  Center in Cacak.
                </li>
                <li>
                  - Participated in the implementation of the HIS (Health
                  Information System).
                </li>
              </ul>
            </p>
            <div class="mt-5 sm:flex md:mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
