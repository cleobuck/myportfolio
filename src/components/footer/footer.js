import React, { Component } from "react";
import styles from "./footer.module.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a href="https://github.com/cleobuck">
          <i className="fab fa-github-alt" aria-label="github profile"></i>
        </a>

        <a href="https://www.facebook.com/cleo.buck">
          <i className="fab fa-facebook" aria-label="facebook profile"></i>
        </a>
        <a href="https://www.linkedin.com/in/cleo-buck/">
          <i className="fab fa-linkedin" aria-label="linkedin profile"></i>
        </a>
        <a href="mailto:cleo.buck@gmail.com">
          <i className="fas fa-envelope-open-text" aria-label="send email"></i>
        </a>

        <i
          class="fas fa-arrow-circle-up"
          aria-label="scroll to top"
          onClick={() => window.scrollTo(0, 0)}
        ></i>
      </footer>
    );
  }
}
