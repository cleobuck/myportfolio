import React, { Component } from "react";
import "./App.scss";
import "./animations.scss";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/Skills";

export default class App extends Component {
  state = {
    viewHeight: ""
  };

  componentDidMount() {
    this.setState({ viewHeight: window.innerHeight });
  }

  scrollDown = pageNum => {
    const start = pageNum * this.state.viewHeight;
    const finish = start + this.state.viewHeight;
    window.scrollTo(start, finish);
  };

  render() {
    return (
      <div className="App">
        <Header scrollDown={this.scrollDown} />
        <About scrollDown={this.scrollDown} />
        <Portfolio scrollDown={this.scrollDown} />
        <Skills scrollDown={this.scrollDown} />
        <Contact viewHeight={this.props.viewHeight} />
      </div>
    );
  }
}
