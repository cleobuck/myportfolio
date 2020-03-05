import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./about.module.scss";

export default class About extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <section className={`${styles.about} bop`}>
          <p>
            After exploring the world for years, I found a new adventure: web
            development. I dove into a sea of markup, stylesheet and programming
            languages. Here are some of the projects I completed as part of my
            course
          </p>
          <i
            class="fas fa-sort-down"
            aria-label="scroll down"
            onClick={() => this.props.scrollDown(1)}
          ></i>
        </section>
      </ScrollAnimation>
    );
  }
}
