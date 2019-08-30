import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
      return (
        <nav >
         	<a href="#header">Home</a>
           <a href="#about" >About</a>
           <a href="#portfolio">Portfolio</a>
           <a href="#contact">Contact</a>
        </nav>
      );
    }
  }