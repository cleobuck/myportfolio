import React from "react";
import flask from "img/flask.png";
import styles from "./skills.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function Skills(props) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className={`${styles.skills} bop`}>
        <p>
          Because less is more, I decided to pick my favourite languages and
          tools:
        </p>
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
            <i class="fab fa-sass"></i>
            SASS
          </span>

          <span>
            <i className="fab fa-js-square"></i>
            Javascript
          </span>

          <span>
            <i className="fab fa-react"></i>
            React
          </span>

          <span>
            <i class="fab fa-python"></i>
            Python
          </span>

          <span>
            <img src={flask} alt="flask icon" />
            Flask
          </span>
        </div>
        <i
          class="fas fa-arrow-circle-down"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        ></i>
      </section>
    </ScrollAnimation>
  );
}
