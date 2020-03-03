import React, { Component } from "react";
import ContactImg from "img/contact.webp";
import Footer from "../footer/footer";
import styles from "./contact.module.scss";

import ScrollAnimation from "react-animate-on-scroll";

export default class Contact extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <section className={styles.contact}>
          <div>
            <img src={ContactImg} alt="contact"></img>
          </div>

          <Footer />
        </section>
      </ScrollAnimation>
    );
  }
}
