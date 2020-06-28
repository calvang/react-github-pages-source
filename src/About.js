import React from 'react';
import logo from './logo.svg';
import './App.css';

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h2 className="header padded-top">
            About Me
          </h2>
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="padded-bottom">
            Put a short biographical blurb here!
          </h4>
        </div>
      </div>
    );
  }
}

export default About;
