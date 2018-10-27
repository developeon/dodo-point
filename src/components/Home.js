import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Marquee from 'react-text-marquee';

class Home extends Component {
  render() {
    return (
        <Grid fluid> 
          <Row className="Home-image">
            <img src="assets/dodo-point.jpg" alt="dodo-point-image"/>
          </Row>
          <Row className="Home-navbar">
            <Col xs={2} md={2} className="Home-logo-wrapper">
              <img src="assets/logo.png" alt="dodo-point-logo" />
            </Col>
            <Col xs={8} md={8}>
              <Marquee 
                className="Home-marquee"
                text='cd coffee (본점)' 
                hoverToStop={true}
                loop={true}
              />
            </Col>
            <Col xs={2} md={2} className="Home-button-wrapper">
              <Link to="/enter"><button className="Home-button">포인트 적립</button></Link>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default Home;