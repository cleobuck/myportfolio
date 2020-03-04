import React, { Component } from "react";
import Background from "img/background.webp";
import Footer from "../footer/footer";
import styles from "./contact.module.scss";

import ScrollAnimation from "react-animate-on-scroll";

export default class Contact extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <section
          className={styles.contact}
          style={{
            background: `url(${Background}) fixed no-repeat bottom center/cover`
          }}
        >
          <p>
            I strive for clean, efficient code and love learning about what
            happens under the hood.
          </p>

          <p> Click on your preferred icon below to contact me</p>

          <Footer />
        </section>
      </ScrollAnimation>
    );
  }
}
