import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Menu from './components/menu'
import MenuToggle from './components/menuToggle'



export default class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <MenuToggle/>
       <Menu/>
       <About/>
       <Portfolio/>
     
       <Contact/>
       
      </div>
    );
  }
}


