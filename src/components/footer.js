import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
      return (
        <footer>
            <a href="https://github.com/cleobuck"><i className="fab fa-github-alt"></i></a>
            <a href="https://codepen.io/cleobuck"><i className="fab fa-codepen"></i></a>
            <a href="https://www.facebook.com/cleo.buck"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/cleo-buck/"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:cleo.buck@gmail.com"><i className="fas fa-envelope-open-text"></i></a>
        </footer>
      );
    }
  }