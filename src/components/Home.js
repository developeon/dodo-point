import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import Marquee from 'react-text-marquee';

class Home extends Component {
  render() {
    return (
        <Grid fluid> 
          <Row className="Home-image">
            <Carousel>
              <Carousel.Item>
                <img alt="슬라이드이미지_00" src="assets/main_00.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="슬라이드이미지_01" src="assets/main_01.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="슬라이드이미지_02" src="assets/main_02.jpg" />
              </Carousel.Item>
            </Carousel>
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