import React, { useState, useRef } from "react";
import { Pager } from "react-bootstrap";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import ReactTouchEvents from "react-touch-events";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ReactPageScroller from 'react-page-scroller';
// import ReactPageScroller from "./page-scroller";
import SecondComponent from "./SecondPage/SecondComponent";

import "./index.css";
import Dots from "./Dots/Dots";
import FirstPage from "./FirstPage/FirstComponent";
import TherdPage from "./ThirdPage/ThirdComponent";

const FullPage = () => {
  const firstPageContainer = useRef();

  const [currentPage, setCurrentPage] = useState(0);
  const [trans, setTrans] = useState(0);
  const [parallaxClass, setParallaxClass] = useState("");
  const handlePageChange = ( event ) => {
    console.log( event, ': number after ', currentPage, ': currentPage after' )
    
    
    setCurrentPage(number);
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
          {i}
        </Pager.Item>
      );
    }

    return [...pageNumbers];
  };

  const beforeHandler = ( num ) => {
    setTrans(num )
    console.log(num, ': num before', currentPage, ': currentPage before')
    if ( num===1 && currentPage ===0 )
    {
      setParallaxClass('test')
    }
    
    if ( num===0 && currentPage ===1 )
    {
      setParallaxClass('kest')
    }
    if ( num===0 && currentPage ===1 )
    {
      setParallaxClass('kest2')
    }
    if ( num===2 && currentPage ===1 )
    {
      setParallaxClass('kest3')
    }
    if ( num===1 && currentPage ===2 )
    {
      setParallaxClass('test3')
    }
    setTimeout(() => {
      console.log("object")
    }, 1000);
    setTrans(num )
    setCurrentPage(num )
  }
  

  const pagesNumbers = getPagesNumbers();
  return (
    <div>
    <ReactPageScroller
      style={{
        maxWidth: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        width: "100%",
        webkitBoxSizing: "border-box",
        mozBoxSizing: "border-box",
        boxSizing: "border-box",
        }}
        renderAllPagesOnFirstRender
        onBeforePageScroll={beforeHandler}
        
        className="hey"
      customPageNumber={currentPage}
   >
      <FirstPage parallaxClass={parallaxClass}> </FirstPage>

        <SecondComponent parallaxClass={parallaxClass} />
        <TherdPage parallaxClass={parallaxClass} />
      
       
      
    </ReactPageScroller>
    <Dots slides={[0, 1, 2]} activeSlide={trans} />
     </div>
  );
};

export default FullPage;
