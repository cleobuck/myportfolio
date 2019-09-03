import React, { Component } from 'react';
import feather from './img/feather.png';


export default class Test extends Component {
    render() {

        let styles = {
            top: `${Math.floor(Math.random() * 90) + 1}%`,
            left:  `${Math.floor(Math.random() * 75) + 1}%`,
            transform: `rotate(${Math.floor(Math.random() * 400) + 1}deg)`
        }
    
      return (
        <img src={feather} alt="feather"  className="feather" style={styles}/>
      );
    }
  }