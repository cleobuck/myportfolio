import React, { Component } from 'react';
import Jeux from './img/jeux.webp'
import Yurms from './img/yurms.webp'
import AllezCine from './img/allezcine.webp'
import Becodechat from './img/chatbecode.webp'
import Todolist from './img/todolist.webp'


export default class Portfolio extends Component {
    render() {
      return (
        <section id="portfolio">
         	<h2>My projects</h2>

           <div>
             <a href="https://shoote.herokuapp.com/"><img src={Jeux} alt="project screenshot"/></a>
             <a href="https://cleobuck.github.io/yurms/"><img src={Yurms} alt="project screenshot"/></a>
             <a href="https://cleobuck.github.io/allezcinev3/"><img src={AllezCine} alt="project screenshot"/></a>
             <a href="https://becodechat.herokuapp.com/"><img src={Becodechat} alt="project screenshot"/></a>
             <a href="https://quicktodolist.herokuapp.com/index.php"><img src={Todolist} alt="project screenshot"/></a>
           </div>
           
        </section>
      );
    }
  }