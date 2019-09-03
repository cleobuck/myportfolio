import React, { Component } from 'react';

export default class About extends Component {
    render() {
      return (
        <section id="about">
         <p> 
           After exploring the world on and off for ten years, I found a new adventure: web development. I love back-end as much as front-end coding. These are my skills: 
         </p>
         <div>
           <span>
           <i class="fab fa-html5"></i>
           HTML
           </span>

           <span>
            
            <i class="fab fa-css3-alt"></i>
            CSS
           </span>

           <span>
           <i class="fab fa-js-square"></i>
            Javascript
           </span>

           <span>
           <i class="fab fa-react"></i>
            React
           </span>

           <span>
           <i class="fab fa-node-js"></i>
            NodeJS
           </span>

           <span>

           <i class="fab fa-php"></i>
            Php
           </span>
           
         </div>
        </section>
      );
    }
  }