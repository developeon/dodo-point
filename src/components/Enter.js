import React, { Component } from 'react';
import './Enter.css';
import { Link } from 'react-router-dom';

class Enter extends Component {
  render() {
    return (
      <div> 
        <Link to="/">홈</Link> 
        <Link to="/result">적립 결과 화면으로 이동</Link> 
      </div>
    );
  }
}

export default Enter;