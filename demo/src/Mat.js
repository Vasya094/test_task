import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Mate extends Component {
  componentDidMount() {
    M.Parallax.init(this.Parallax1);
    M.Parallax.init(this.Parallax2);
  }

  render() {
    return (
      <div>
        <div className="parallax-container">
          <div
            ref={Parallax => {
              this.Parallax1 = Parallax;
            }}
            className="parallax"
          >
            <img src="https://materializecss.com/images/parallax1.jpg" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <div
          ref={Parallax => {
            this.Parallax2 = Parallax;
          }}
          className="parallax-container"
        >
          <div className="parallax">
            <img src="https://materializecss.com/images/parallax2.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Mate;
