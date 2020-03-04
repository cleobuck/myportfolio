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
          <button
            className="workButton"
            onClick={() => this.props.scrollDown(0)}
          >
            Find out more <i className="fas fa-arrow-right"></i>
          </button>
        </h1>
        <figure>
          <img src={profil} alt="profile"></img>
        </figure>
      </header>
    );
  }
}
