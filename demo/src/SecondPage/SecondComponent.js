import React from "react";
import "./SecondPage.styles.css";

const SecondPage = ( { parallaxClass } ) => {
  console.log(parallaxClass + " parallaxClass")
  return <div className="second-page">
    <div id="secondPageHeader" className={parallaxClass + "2"}>
      <h1 style={{fontWeight: "100"
}}>Основа терапии &#8213; патогенез СД2</h1>
     </div>
      <div id="smallIce" className={parallaxClass + "Ice"}>
<img style={{width: "8vh",
    transform: "rotate(-57deg)"}} src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/small_ice.png?alt=media&token=6c599068-b03f-4c5b-9799-fed5d5e15866'></img>     </div>
  <div id="middleIce" className={parallaxClass + "Ice"}>
<img style={{width: "18vh",
    transform: "rotate(-27deg)"}} src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/small_ice.png?alt=media&token=6c599068-b03f-4c5b-9799-fed5d5e15866'></img>     </div>
    <div id="bigIce" className={parallaxClass + "Ice"}>
<img style={{width: "30vh",
    transform: "rotate(-64deg)"}} src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/small_ice.png?alt=media&token=6c599068-b03f-4c5b-9799-fed5d5e15866'></img>     </div>
     <div id="blurIce" className={parallaxClass + "Ice"}>
<img style={{width: "8vh",
    transform: "rotate(-1deg)"}} src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/floatingbluredice.png?alt=media&token=58bbcca9-5481-4794-af38-5df20cb5d3bf'></img>     </div> 
  </div>;
};

export default SecondPage;
