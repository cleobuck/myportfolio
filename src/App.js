import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />

        <Contact />
      </div>
    );
  }
}
