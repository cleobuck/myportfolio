import React, { Component } from 'react';
import profil from '../img/profil.png';

import Background from '../img/background.webp'
import Feather from './feather'


export default class Header extends Component {


    render() {

        // to multiply feathers
      let multiFeather = [];
      for (let i = 0; i < 30 ; i++) {
        multiFeather.push(i);
      }
      const Feathers = multiFeather.map(num => <Feather key={num}/>)


      return (

        <header id="header" style={ {background: `url(${Background}) fixed no-repeat bottom center/cover`}}>
         
          {Feathers}
  
      
         <h1>Hi, I'm Cleo Buck <span>a full-stack web developer  </span>  <a href="#about">view my work  <i className="arrowDown fas fa-arrow-down"></i><i className="arrowRight fas fa-arrow-right"></i></a></h1>
         <div className="profil">
  
         <img src={profil} alt="profile"></img>
         </div>
        </header>
      );
    }
  }



