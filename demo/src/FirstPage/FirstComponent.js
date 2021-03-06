import React, { useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Pulsar from "../../Pulsar/Pulsar";
import "./FirstPage.styles.css";
import ParallaxImage from "../Palax/Size";
import { ParallaxLayer, Parallax } from "react-spring/addons";



const FirstPage = ( { parallaxClass } ) => {
  const [className, setClassName] = React.useState('');
  const [topPul, setTopPul] = React.useState(0);
 
  return (
    <div className="first-page"  >
      {/* <div className="lay back"></div> */}
      <div id="test-header">
        <h1 id="firstPageHeader" className={parallaxClass.slice(0,-1)}>Всегда ли цели терапии СД2 на поверхности?</h1>
        </div>
      <div id='pulscont1' className={parallaxClass.slice(0,-1)}>
        <p id="bigPulsarText">Цель по HbA1c</p>
      <Pulsar big={true} />
      </div>
      <div id='pulscont2' className={parallaxClass.slice(0,-1)}>
        <p id="middlePulsarText">Гипогликемия</p>
      <Pulsar middle={true} />
      </div>
      <div id='pulscont3' className={parallaxClass.slice(0,-1)}>
        <p id="firstSmallPulsarText">Осложнения СД</p>
      <Pulsar  />
      </div>
      <div id='pulscont4' className={parallaxClass.slice(0,-1)}>
        <p id="secondSmallPulsarText">СС риски</p>
      <Pulsar  />
      </div>
      </div>
  );
};

export default FirstPage;
