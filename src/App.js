import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Enter from './components/Enter';
import Result from './components/Result';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/enter" component={Enter}/>
          <Route path="/result" component={Result}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;