import React, { Component } from 'react';
import profil from './img/profil.png';
import Feathers from './feathers';
import Background from './img/background.webp'

export default class Header extends Component {
    render() {


      return (

        <header id="header" style={ {background: `url(${Background}) no-repeat bottom center/cover`}}>
          <div>
          <Feathers/>

        
          </div>

         <h1>Hi, I'm Cleo Buck <span>a full-stack web developper</span> <a href="#about">view my work</a></h1>
         <div className="profil">
  
         <img src={profil} alt="profile"></img>
         </div>
        </header>
      );
    }
  }


