import React, { Component } from "react";
import Jeux from "img/jeux.webp";
import Yurms from "img/yurms.webp";
import AllezCine from "img/allezcine.webp";
import Becodechat from "img/chatbecode.webp";
import Background from "img/background2.webp";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./portfolio.module.scss";

export default class Portfolio extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <section
          className={`${styles.portfolio} bop`}
          id="portfolio"
          style={{
            background: `url(${Background}) fixed no-repeat top center/cover`
          }}
        >
          <h2>PROJECTS</h2>

          <div className={styles.portfolioContainer}>
            <div className={styles.portfolioGroups}>
              <a href="https://shoote.herokuapp.com/" className="game">
                <img src={Jeux} alt="project screenshot" />

                <div className={styles.projectContent}>
                  <h2> Shooting game </h2>
                  <p> Javascript and Phaser3</p>
                </div>
              </a>

              <a href="https://cleobuck.github.io/yurms/">
                <img src={Yurms} alt="project screenshot" />

                <div className={styles.projectContent}>
                  <h2> Yurm's restaurant </h2>
                  <p> HTML/CSS, bootstrap, javascript </p>
                </div>
              </a>
            </div>

            <div className={styles.portfolioGroups}>
              <a
                href="https://cleobuck.github.io/allezcinev3/"
                className="allezcine"
              >
                <img src={AllezCine} alt="project screenshot" />

                <div className={styles.projectContent}>
                  <h2> Allez Cine </h2>
                  <p> Boostrap, Javascript</p>
                </div>
              </a>

              <a
                href="https://becodechat.herokuapp.com/"
                className="becodechat"
              >
                <img src={Becodechat} alt="project screenshot" />

                <div className={styles.projectContent}>
                  <h2> Becode Chat </h2>
                  <p> NodeJS, socketIO </p>
                </div>
              </a>
            </div>
          </div>

          <i
            class="fas fa-arrow-circle-down"
            onClick={() => this.props.scrollDown(2)}
          ></i>
        </section>
      </ScrollAnimation>
    );
  }
}
