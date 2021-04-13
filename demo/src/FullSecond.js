import React from "react";
import ReactDOM from "react-dom";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import styled from "styled-components";
import Pulsar from "../Pulsar/Pulsar";
import Dots from "./Dots/Dots";
import FirstPage from "./FirstPage/FirstComponent";
import ReactPageScroller from "./page-scroller";
import SecondPage from "./SecondPage/SecondComponent";
import TherdPage from "./ThirdPage/ThirdComponent";



const SecondCont = styled(ParallaxLayer)`
  position: absolute;
  background-size: auto;
  background-repeat: no-repeat;
  will-change: transform;
  height: 100%;
  width: 1680px;
  transform: translate3d(0px, 0px, 0px) !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ThirdCont = styled(ParallaxLayer)`
  position: absolute;
  background-size: auto;
  background-repeat: no-repeat;
  will-change: transform;
  height: 100%;
  width: 1680px;
  transform: translate3d(0px, 0px, 0px) !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

class FullSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = (number) => {
    this.setState({ currentPage: number });
  };

 

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>
      );
    }

    return [...pageNumbers];
  };
  render() {
    return (
      <div>
        <Parallax
          //ref={(ref) => (this.parallax = ref)}
          pages={3}
          scrolling={false}
          horizontal
          style={{ position: "fixed" }}
        >
          {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}

          {/* <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: "url(images/Backgrounds/2ndBG.jpg)",
              backgroundSize: "cover",
            }}
          /> */}

          {/* <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
            />
          </ParallaxLayer> */}
          {/* <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div> <img src={url('server')} style={{ width: '20%' }} /></div>
        </ParallaxLayer> */}


          
          {/* 
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer> */}

          {/* <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img src={url("earth")} style={{ width: "60%" }} />
          </ParallaxLayer> */}

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundImage: "url(./images/Backgrounds/2ndBG.jpg)",
            }}
          />
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
            className="hey"
            pageOnChange={this.handlePageChange}
            onBeforePageScroll={this.handleBeforePageChange}
            customPageNumber={this.state.currentPage}
          >
            <ParallaxLayer
              offset={0}
              speed={0}
              //      onClick={() => this.parallax.scrollTo(1)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <img src={url('server')} style={{ width: '20%' }} /> */}
              <FirstPage >
              <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
              left: "19%",
              height: "100%",
              width: "0px",
            }}
          >
            <Pulsar size={70} top={38} left={57.5} style={{ width: '20%' }} />
          </ParallaxLayer>
              </FirstPage>
            </ParallaxLayer>

            <SecondCont
              offset={0}
              speed={0.1}
              style={{ transform: "translate3d(0px, 0px, 0px) !important" }}
              // onClick={() => this.parallax.scrollTo(2)}
            >
              <SecondPage />
            </SecondCont>

            <ThirdCont
              offset={0}
              speed={0.1}
              style={{ transform: "translate3d(0px, 0px, 0px) !important" }}
              //      onClick={() => this.parallax.scrollTo(0)}
            >
              <TherdPage />
            </ThirdCont>
          </ReactPageScroller>
        </Parallax>
        <Dots slides={[1, 2, 3]} activeSlide={this.state.currentPage} />
      </div>
    );
  }
}

export default FullSecond;
