import React from "react";
import { Pager } from "react-bootstrap";

import ReactPageScroller from "./page-scroller";
import SecondComponent from "./SecondPage/SecondComponent";
import ThirdComponent from "./ThirdPage/ThirdComponent";

import "./index.css";
import Dots from "./Dots/Dots";
import FirstPage from "./FirstPage/FirstComponent";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>,
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();
    console.log(pagesNumbers);
    return (
      <div id="scrollArea">
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
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <FirstPage />
          <SecondComponent />
          <ThirdComponent />
        </ReactPageScroller>
        {/* <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager> */}
        <Dots slides={[1, 2, 3]} activeSlide={this.state.currentPage} />
      </div>
    );
  }
}
