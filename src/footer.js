import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
      return (
        <footer>
            <a href="https://github.com/cleobuck"><i class="fab fa-github-alt"></i></a>
            <a href="https://codepen.io/cleobuck"><i class="fab fa-codepen"></i></a>
            <a href="https://www.facebook.com/cleo.buck"><i class="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/cleo-buck/"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:cleo.buck@gmail.com"><i class="fas fa-envelope-open-text"></i></a>
        </footer>
      );
    }
  }