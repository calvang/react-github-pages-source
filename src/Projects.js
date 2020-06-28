import React from 'react';
import logo from './logo.svg';
import './App.css';

class Project extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h2 className="header padded-top">
            My Projects
          </h2>
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="padded-bottom">
            Add your personal Projects here!
          </h4>
        </div>
      </div>
    );
  }
}

export default Project;
