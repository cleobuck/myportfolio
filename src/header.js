import React, { Component } from 'react';
import profil from './img/profil.png';

export default class Header extends Component {
    render() {
      return (
        <header id="header">
         <h1>Hi, I'm Cleo Buck <span>a full stack web developper</span> </h1>
         <div class="profil">
         <img src={profil} alt="profile"></img>
         </div>
        </header>
      );
    }
  }