import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Enter from './components/Enter';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home }/>
          <Route path="/enter" component={ Enter }/>
          <Route path="/result" component={ Result }/>
        </div>
      </Router>
    );
  }
}

export default App;