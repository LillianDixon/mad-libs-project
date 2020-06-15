import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home';
import SickDayForm from './forms/sick-day-form';
import SickDayResults from './results/sick-day-results';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/sick-day-form" component={SickDayForm}/>
              <Route path="/sick-day-result" component={SickDayResults}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
