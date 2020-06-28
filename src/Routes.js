import React from 'react';
import Home from './Home';
import About from './About';
import CV from  './CV';
import Projects from './Projects';
import Contact from './Contact';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Projects' component={Projects}></Route>
          <Route exact path='/CV' component={CV}></Route>
          <Route exact path='/About' component={About}></Route>
          <Route exact path='/Contact' component={Contact}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
