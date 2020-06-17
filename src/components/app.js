import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import ForcePower from "./forms/power-of-force";
import DarkSidePower from "./forms/power-of-dark-side";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/power-of-force" component={ForcePower}/>
              <Route path="/power-of-dark-side" component={DarkSidePower}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
