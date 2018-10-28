import React, { Component } from 'react';
import './Result.css';
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
    const { 
      point 
    } = this.state;
    const span1 = {
      color: '#4c80f1',
      fontSize: '4em',
      display: 'block',
    }
    const span2 = {
      fontSize: '2em'
    }
    const span3 = {
      fontSize: '1.5em',
      color: '#878d91'
    }

    return (
      <div className="Result-background">
        <Grid>
          <Row className="Result-top">
            <div className="Result-wrapper">
              <div className="Result-save">
                <span style={span1}>100 P</span>
                <span style={span2}>적립완료</span>
              </div>
              <span style={span3}>보유포인트는 {point} P 입니다.</span>
            </div>
          </Row>
          <Row className="Result-bottom">
            <Col xs={12} md={4}>
              <img src="assets/coffee.jpg" alt="coffee"/>
            </Col>
            <Col xs={12} md={8}>
              {(point >= 100) ? (
                <div>
                  <Row>
                    <Col xs={10} md={10}>
                        <strong>
                        <LinesEllipsis
                            text='아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노아메리카노'
                            maxLine='1'
                            ellipsis=' &middot;&middot;&middot;' //말줄임표
                            trimRight
                            basedOn='letters'
                        />
                        </strong>
                    </Col>
                    <Col xs={2} md={2}>
                      교환 가능
                    </Col>
                  </Row>
                  <Row className="Result-button">
                    <button onClick={this.usePoint}>사용하기</button>
                  </Row>
                </div>
               ) : (
                <div>
                  <font color="#4c80f1">{100-point} P</font> 더 모으면
                  <br/>
                  <strong>아메리카노</strong> 교환 가능
                </div>
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Result;