import React, { Component } from 'react';
import './Result.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis';

class Result extends Component {
  state = {
    nowPoint: 0,
    recPoint: 0
  }

  componentDidMount(){
    const phone = new URLSearchParams(this.props.location.search).get('phone');
    const recPoint = new URLSearchParams(this.props.location.search).get('recPoint');
    
    this.setState({
      nowPoint : localStorage.getItem(phone) ? localStorage.getItem(phone) : 0,
      recPoint : recPoint ? recPoint : 0
    })
  }

  usePoint = () => {
    alert("포인트를 상품으로 교환하셨습니다.");
  }

  render() {
    const { 
      nowPoint,
      recPoint
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
        <Grid fluid>
          <Row className="Result-top">
            <div className="Result-wrapper">
                <Link className="Result-link" to="/">홈 X</Link>
              <div className="Result-save">
                <span style={span1}>{recPoint} P</span>
                <span style={span2}>적립완료</span>
              </div>
              <span style={span3}>보유포인트는 {nowPoint} P 입니다.</span>
            </div>
          </Row>
          <Row className="Result-bottom">
            <Col xs={12} md={4}>
              <img src="assets/coffee.jpg" alt="coffee"/>
            </Col>
            <Col xs={12} md={8}>
              {(nowPoint >= 100) ? (
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
                  <font color="#4c80f1">{100-nowPoint} P</font> 더 모으면
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