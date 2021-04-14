import React from "react";
import "./SecondPage.styles.css";

const SecondPage = ( { parallaxClass } ) => {
  console.log(parallaxClass + "2")
  return <div className="second-page">
    <div id="secondPageHeader" className={parallaxClass + "2"}>
      <h1>Основа терапии &#8213; патогенез СД2</h1>
     </div>
  {/*    <div id="smallIce" className={parallaxClass + "2"}>
<img style={{width: "38vh",
    transform: "rotate(-57deg)"}} src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/small_ice.png?alt=media&token=6c599068-b03f-4c5b-9799-fed5d5e15866'></img>     </div>
   <div id="middleIce" className={parallaxClass + "2"}>
<img src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/small_ice.png?alt=media&token=6c599068-b03f-4c5b-9799-fed5d5e15866'></img>     </div>
    <div id="bigIce" className={parallaxClass + "2"}>
<img src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/small_ice.png?alt=media&token=6c599068-b03f-4c5b-9799-fed5d5e15866'></img>     </div>
    <div id="blurIce" className={parallaxClass + "2"}>
<img src='https://firebasestorage.googleapis.com/v0/b/test-task-6934a.appspot.com/o/small_ice.png?alt=media&token=6c599068-b03f-4c5b-9799-fed5d5e15866'></img>     </div> */}
  </div>;
};

export default SecondPage;
