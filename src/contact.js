import React, { Component } from 'react';
import ContactImg from './img/contact.webp'

export default class Contact extends Component {
    render() {
      return (
        <section id="contact">
         	
          <div>
            <img src={ContactImg} alt="contact"></img>

            <form>
            <h2>Contact</h2>
              <input type="text" value="name"></input>
              <input type="text" value="Email"></input>
              <input type="text" value="Subject"></input>
              <input type="text" value="Details"></input>
              <textarea name="comment" rows="4" cols="25">Your message</textarea>
              <input type="submit" value="send"></input>
           </form>
          </div>

           
        </section>
      );
    }
  }