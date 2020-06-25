import React from "react";
import ControlledCarousel from "./components/Tour/carosel";
import ControlledCarousel2 from "./components/Tour/carosel2";
import ControlledCarousel3 from "./components/Tour/carosel3";
import ControlledCarousel4 from "./components/Tour/carosel4";

const tourData = [
  {
    id: 1,
    city: "Tokyo",
    img: "./img/newyork.jpeg",
    name: "new york bridge tour",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    data: <ControlledCarousel />,
  },
  {
    id: 2,
    city: "paris",
    img: "./img/paris.jpeg",
    name: "paris lights tour",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    moreInfo:
      "Fugiat qui est veniam nisi ipsum velit esse quis pariatur non exercitation do nostrud. Laborum in sit ea laboris eiusmod ipsum anim occaecat veniam et excepteur commodo amet nulla. Ad tempor et laborum sit irure deserunt fugiat consequat adipisicing. Et aliquip nisi commodo est commodo cillum id labore ipsum adipisicing qui pariatur culpa do. Ex ullamco occaecat in incididunt. Non eu laborum ut anim Lorem et adipisicing consectetur id sit tempor cillum cillum ut.",
    data: <ControlledCarousel2 />,
  },
  {
    id: 3,
    city: "london",
    img: "./img/london.jpeg",
    name: "london royal palace tour",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    data: <ControlledCarousel3 />,
  },
  {
    id: 4,
    city: "New-york",
    img: "./img/tokyo.jpeg",
    name: "tokyo sushi tour",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi",
    data: <ControlledCarousel4 />,
  },
];
export default tourData;
