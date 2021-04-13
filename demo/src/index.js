import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import FullPage from "./FullPage";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import { ParallaxProvider } from 'react-scroll-parallax';

//import "./index.css";

//import "./index.css";
import ParallaxImage from "./Palax/Size";
import FullSecond from "./FullSecond";
import App from "./Parallax";
import Mate from "./Mat";


ReactDOM.render(<FullPage />, document.getElementById( "root" ) );
