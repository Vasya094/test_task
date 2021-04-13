import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import "./Pulsar.css";
// import ShowWindowDimensions from "./Hooks/ScreenHook";
// import "./SecondPage.styles.css";

var zoomIn = {
  from: {
    backgroundColor: "rgba(222, 158, 90, 1)",
    transform: `scale(0)`,
    border: 0,
  },
  "20%": {
    backgroundColor: "rgba(222, 158, 90, 1)",
  },
  "40%": {
    backgroundColor: "rgba(222, 158, 90, 1)",
    transform: `scale(0.2)`,
    border: "2px solid rgba(196,106, 111, 1)",
  },
  "60%": {
    backgroundColor: "rgba(222, 158, 90, 1)",
    transform: `scale(0.4)`,
    border: "3px solid rgba(196,106, 111, 1)",
  },
  "80%": {
    backgroundColor: "rgba(222, 158, 90, 0.6)",
    transform: `scale(0.7)`,
    border: "4px solid rgba(196,106, 111, 1)",
  },
  to: {
    opacity: 1,
    backgroundColor: "rgba(222, 158, 90, 0.11)",
    transform: `scale(01)`,
    border: "4px solid rgba(166,106, 111, 1)",
  },
};



const Pulsar = ( { big, middle } ) => {
  const size = big ? {  width: "70px",height: "70px"} : middle ? {  width: "40px",height: "40px"} : {  width: "25px",height: "25px"}
  return (
    <div id="container" style={size}>
      <div id="first" style={size} />
      <div id="second" style={size} />
      <div id="third" style={size} />
    </div>
  );
};

export default Pulsar;
