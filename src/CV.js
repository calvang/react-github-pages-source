import React from 'react';
import logo from './logo.svg';
import './App.css';

class CV extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h2 className="header padded-top">
            My Resume/CV
          </h2>
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="padded-bottom">
            Stylize your CV here (or import a pdf)!
          </h4>
        </div>
      </div>
    );
  }
}

export default CV;
