import React from "react";
import { Pager } from "react-bootstrap";

import ReactPageScroller from "../../src";
import SecondComponent from "./SecondPage/SecondComponent";
import ThirdComponent from "./ThirdPage/ThirdComponent";
import FourthComponent from "./FourthComponent";

import "./index.css";
import FirstPage from "./FirstPage/FirstComponent";

export default class PageContain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
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

    return (
      <div className="demo-page-contain">
        <h3 className="demo-page-contain__hint">
          You need to focus or hover page scroller to make scroll, keys or touch
          work
        </h3>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth * 0.4}
          containerHeight={window.innerHeight * 0.5}
          customPageNumber={this.state.currentPage}
        >
          <FirstPage />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
      </div>
    );
  }
}
