import React, { Component } from 'react';

class MenuToggle extends Component {

  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
  }

  render() {
    return (
      <div>
        <button>
          Show menu
        </button>
        
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