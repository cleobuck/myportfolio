import React, { Component } from 'react';
import './App.css';
import Header from './header'
import About from './about'
import Portfolio from './portfolio'
import Contact from './contact'
import Menu from './menu'
import Footer from './footer'

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Menu/>
       <About/>
       <Portfolio/>
     
       <Contact/>
       <Footer/>
      </div>
    );
  }
}


