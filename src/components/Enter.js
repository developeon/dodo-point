import React, { Component } from 'react';
import './Enter.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class Enter extends Component {
  state = {
    phone: '010'
  }

  handleChange = (e) => {
    if(this.state.phone.length > 12) {
      alert("휴대전화 전화번호의 길이를 초과했습니다.");
      return;
    }
    if (this.state.phone.length === 3 || this.state.phone.length === 8) {
      this.setState({
        phone : this.state.phone.concat("-").concat(e.target.value) 
      });
    } else {
      this.setState({
        phone : this.state.phone.concat(e.target.value) 
      });
    }
  }

  handleRemove = () => {
    this.setState({
      phone : this.state.phone.slice(0,-1) 
    });
  }

  handleSubmit = () => {
    const { phone } = this.state;
    if (!this.validatePhone(phone)) {
      alert('적립은 휴대전화 번호로만 가능합니다. 휴대전화 번호를 정확히 입력해주세요.');
      return;
    }
    const prevPoint = localStorage.getItem(phone) ? localStorage.getItem(phone) : 0;
    const nextPoint = Number.parseInt(prevPoint) + 100;
    localStorage.setItem(phone, nextPoint);
    this.props.history.push('/result?phone=' + this.state.phone);
  }

  validatePhone = (Phone) => {
    const re = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g;
    return re.test(Phone);
  }

  render() {
    const { phone } = this.state;
    return (
      <Grid fluid>
        <Row>
          <div className="alter">
            휴대전화번호를 눌러주세요.
            <div className="back"><Link to="/" className="back-link">취소 X</Link></div>
          </div>
          
        </Row>
        <Row>
          <Col className="info-box" xs={12} md={4}>
            <div>
              <font size="6">
                <font color="#4c80f1">100P</font> 적립
              </font>
            </div>
            <div>
              <font size="5">
                Kakao<strong>Talk</strong>
              </font>
              <p/>
              <font size="3">입력하신 휴대번호로 매장의 카카오톡 알림톡이 전송됩니다.</font>
            </div>
          </Col>
          <Col className="keypad-box" xs={12} md={8}>
              <div className="phone-box">
                <p className="input">{phone}</p>
                <p className="terms">이용약관과 개인정보 취급방침에 동의하시면 휴대전화번호 입력 후 아래 적립 버튼을 눌러주세요.</p>
              </div>
              <div className="keypad-group">
                <button onClick={this.handleChange} value="1">1</button>
                <button onClick={this.handleChange} value="2">2</button>
                <button onClick={this.handleChange} value="3">3</button>
              </div>
              <div className="keypad-group">
                <button onClick={this.handleChange} value="4">4</button>
                <button onClick={this.handleChange} value="5">5</button>
                <button onClick={this.handleChange} value="6">6</button>
              </div>
              <div className="keypad-group">
                <button onClick={this.handleChange} value="7">7</button>
                <button onClick={this.handleChange} value="8">8</button>
                <button onClick={this.handleChange} value="9">9</button>
              </div>
              <div className="keypad-group">
                <button onClick={this.handleRemove}>&larr;</button>
                <button onClick={this.handleChange} value="0">0</button>
                <button id="save-button" onClick={this.handleSubmit}>적립</button>
              </div>
          </Col>
      </Row>
      </Grid>
    );
  }
}

export default Enter;