import React, { Component } from 'react';
import './Result.css';
import { Link } from 'react-router-dom';

class Result extends Component {
  render() {
    return (
        <div> 
          <Link to="/">홈</Link>  
        </div>
    );
  }
}

export default Result;