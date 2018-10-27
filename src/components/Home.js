import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div> 
          <Link to="/enter">전화번호 입력 화면으로 이동</Link> 
        </div>
    );
  }
}

export default Home;