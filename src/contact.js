import React, { Component } from 'react';
import ContactImg from './img/contact.webp'
import Footer from './footer'
import Form from './form'

export default class Contact extends Component {
    render() {
      return (

          <section id="contact">
            <div>

              <img src={ContactImg} alt="contact"></img>

              <Form/>
            </div>

            <Footer/>

          </section>

         
         
        );
    }
  }