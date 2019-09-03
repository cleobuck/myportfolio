import React, { Component } from 'react';

export default class About extends Component {
    render() {
      return (
        <section id="about">
         <p> 
           After exploring the world for years, I found a new adventure: web development. I strive for clean, efficient code and I love learning about what's happening under the hood. These are my skills: 
         </p>
         <div>

           <div>
              <span>
              <i className="fab fa-html5"></i>
              HTML
              </span>

              <span>
                
                <i className="fab fa-css3-alt"></i>
                CSS
              </span>

              <span>
              <i className="fab fa-js-square"></i>
                Javascript
              </span>

          </div>

          <div>
              <span>
              <i className="fab fa-react"></i>
                React
              </span>

            <span>
            <i className="fab fa-node-js"></i>
              NodeJS
            </span>

            <span>

            <i className="fab fa-php"></i>
              Php
            </span>

           </div>

         </div>
         
        </section>
      );
    }
  }