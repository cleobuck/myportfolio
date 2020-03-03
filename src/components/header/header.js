import React, { Component } from "react";
import profil from "img/profil.png";

import Background from "img/background.webp";
import Feather from "./feather";
import styles from "./header.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header
        className={styles.header}
        id="header"
        style={{
          background: `url(${Background}) fixed no-repeat bottom center/cover`
        }}
      >
        {Array.from(Array(30).keys()).map(num => (
          <Feather key={num} />
        ))}

        <h1>
          Hi, I'm Cleo Buck <span>a full-stack web developer </span>
          <a href="#about">
            view my work <i className="arrowRight fas fa-arrow-right"></i>
          </a>
        </h1>
        <div className={styles.profil}>
          <img src={profil} alt="profile"></img>
        </div>
      </header>
    );
  }
}
