import React from "react";

import card1 from "../pictures/1.jpg";
import card2 from "../pictures/2.png";
import card3 from "../pictures/3.png";
import card4 from "../pictures/4.png";
import card5 from "../pictures/5.png";

const Galery = () => {
  return (
    <div class="grid grid-rows-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <img
          class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out md:hover:scale-150"
          src={card1}
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out md:hover:scale-150"
          src={card2}
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out md:hover:scale-150"
          src={card3}
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out md:hover:scale-150"
          src={card4}
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out md:hover:scale-150"
          src={card5}
          alt=""
        />
      </div>
    </div>
  );
};
export default Galery;
