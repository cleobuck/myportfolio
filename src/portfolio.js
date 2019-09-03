import React, { Component } from 'react';
import Jeux from './img/jeux.webp'
import Yurms from './img/yurms.webp'
import AllezCine from './img/allezcine.webp'
import Becodechat from './img/chatbecode.webp'


export default class Portfolio extends Component {
    render() {
      return (
        <section id="portfolio">
         	<h2>My projects</h2>

           <div>
             
             <a href="https://shoote.herokuapp.com/" className="game"><img src={Jeux} alt="project screenshot"/></a>
             <a href="https://cleobuck.github.io/yurms/" className="yurms"><img src={Yurms} alt="project screenshot"/></a>
             <a href="https://cleobuck.github.io/allezcinev3/"className="allezcine"><img src={AllezCine} alt="project screenshot"/></a>
             <a href="https://becodechat.herokuapp.com/" className="becodechat"><img src={Becodechat} alt="project screenshot"/></a>
           </div>
           
        </section>
      );
    }
  }