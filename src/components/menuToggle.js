import React, { Component } from 'react';

export default class MenuToggle extends Component {

  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      showToggle: true
    }

   
  }

  showMenu = event => {
    event.preventDefault();
    
    this.setState({ showMenu: true, showToggle: false }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({ showMenu: false, showToggle: true }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div className={"toggleMenu " + (!this.state.showToggle? "toggleFull": "")} >

        {
           this.state.showToggle? 
         <button class="closedMenu" onClick={this.showMenu}>
         <i className=" fas fa-bars"></i>
              
          </button>:  <button class="openMenu" onClick={this.showMenu}>
         <i className="fas fa-bars"></i>
              
          </button>
    
        }
       
        
        {
          this.state.showMenu
            ? (
        <div className="menu">

           <a href="#header">Home</a>
           <a href="#about" >About</a>
           <a href="#portfolio">Portfolio</a>
           <a href="#contact">Contact</a>

        </div>):(null)
        }

      </div>
    );
  }
}