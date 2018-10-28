import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Enter from './pages/Enter';
import Result from './pages/Result';
import NoMatch from './pages/NoMatch';

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