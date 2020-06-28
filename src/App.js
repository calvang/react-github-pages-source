import React from 'react';
import Navbar from "./Navbar";
import Bottombar from  "./Bottombar";
import Routes from "./Routes";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes />
      <Bottombar />
    </div>
  );
}

export default App;
