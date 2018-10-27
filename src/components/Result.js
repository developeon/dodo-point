import React, { Component } from 'react';
import './Result.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis';

class Result extends Component {
  state = {
    point: '0'
  }

  componentDidMount(){
    const phone = new URLSearchParams(this.props.location.search).get('phone');
    this.setState({
      point : localStorage.getItem(phone) ? localStorage.getItem(phone) : 0
    })
  }

  usePoint = () => {
    alert("포인트를 상품으로 교환하셨습니다.");
  }

  render() {
    const { point } = this.state;
    const backgroundDiv = {
      backgroundColor: '#e1e4e6'
    }
    const span1 = {
      color: '#4c80f1',
      fontSize: '4em'
    }
    const span2 = {
      fontSize: '2em'
    }
    const span3 = {
      fontSize: '1.5em',
      color: '#878d91'
    }

    return (
      <div style={backgroundDiv}>
      <Grid>
        <Row className="point">
          <div className="content">
            <div className="save-point">
              <span style={span1}>100 P</span>
              <br/>
              <span style={span2}>적립완료</span>
            </div>
            <div className="after-point">
              <span style={span3}>보유포인트는 {point} P 입니다.</span>
            </div>
          </div>
        </Row>
        <Row className="item">
          <Col xs={12} md={4}>
            <img src="assets/coffee.jpg" alter="coffee"/>
          </Col>
          <Col xs={6} md={8}>
            {(point >= 100) ? (
              <div>
               <Row>
               <Col xs={12} md={10}>
                  <strong>
                  <LinesEllipsis
                      text='아메리카노아메리카노아메리카노아카노아메리카노아메리카노아메리카노'
                      maxLine='1'
                      ellipsis=' &middot;&middot;&middot;'
                      trimRight
                      basedOn='letters'
                  />
                  </strong>
                </Col>
                <Col xs={6} md={2}>
                  교환 가능
                </Col>
               </Row>
               <Row className="button-wrapper">
                <button onClick={this.usePoint}>사용하기</button>
               </Row>
              </div>
            ) : (
              <div>
                <font color="#4c80f1">5 P</font> 더 모으면
                <br/>
                <strong>아메리카노</strong> 교환 가능
              </div>
            )
            }
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Result;