import React from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h2 className="header padded-top">
            Contact Me
          </h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="padded-bottom-left">
            <p className="padded-bottom-left"><b>Github:</b> <a href="https://github.com/calvang">https://github.com/calvang</a></p>
            <p className="padded-bottom-left"><b>Email:</b> <a href="example@email.com">example@email.com</a></p>
            <p className="padded-bottom-left"><b>Cell:</b> <a href="1-800-EXAMPLE">1-800-EXAMPLE</a></p>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
