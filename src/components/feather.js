import React, { Component } from 'react';
import feather from '../img/feather.png';


export default class Feather extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      top: `${Math.floor(Math.random() * 100) + 1}%`,
        left:  `${Math.floor(Math.random() * 100) + 1}%`,
        transform: `rotate(${Math.floor(Math.random() * 400) + 1}deg)`
    }
  }
  
  render() {
    
      return (
        <img src={feather} alt="feather"  className="feather" style={ {top: this.state.top, left:this.state.left, transform: this.state.transform} }/>
      );
      }
  }