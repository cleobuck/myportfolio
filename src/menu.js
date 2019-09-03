import React, { Component } from 'react';
import classnames from "classnames";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: false
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
    render() {
      return (
        <nav className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })} >
         	<a href="#header">Home</a>
           <a href="#about" >About</a>
           <a href="#portfolio">Portfolio</a>
           <a href="#contact">Contact</a>
        </nav>
      );
    }
  }