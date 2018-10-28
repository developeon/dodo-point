import React, { Component } from 'react';
import './Enter.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import CryptoJS from  'crypto-js'; // 전화번호를 Hash값으로 암호화
import Keypad from '../components/Keypad';

class Enter extends Component {
  state = {
    phone: '010-',
    recPoint: 0
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeydown, false);
    const min = 10;
    const max = 100;
    const rand = Math.floor(Math.random()*(max-min+1)) + min;
    this.setState({ 
      recPoint: this.state.recPoint + rand
    });
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeydown, false);
  }

  /* 키보드 입력 이벤트  */
  handleKeydown = (e) => {
   let keyId = e.keyCode; // 48~57: 일반 숫자키 코드
                          // 96~105: 숫자키패드 숫자키 코드
                          // 8: Backspace
                          // 13: Enter

   if (keyId >= 96 && keyId <= 105) {
     keyId -= 48; // 숫자키패드의 경우 강제로 숫자값으로 변환
   }
   if ((keyId >= 48 && keyId <= 57)) {
     this.handleDisplay(String.fromCharCode(keyId));
   } else if (keyId === 8) {
     this.handleRemove();
   } else if (keyId === 13) {
     this.handleSubmit();
   } 
  }

  handleClick = (e) => {
    this.handleDisplay(e.target.value);
  }

  handleDisplay = (number) => {
    const {
      phone
    } = this.state;

    if(phone.length > 12) {
      alert("휴대전화 전화번호의 길이를 초과했습니다.");
      return;
    }
    if (phone.length === 3 || phone.length === 8) { // '-' 추가
      this.setState({
        phone : phone.concat("-").concat(number) 
      });
    } else {
      this.setState({
        phone : phone.concat(number) 
      });
    }
  }

  handleRemove = () => {
    if (this.state.phone.length < 3) { // 01X 사용자를 위해 최소길이 2로 지정
      alert("적립은 휴대전화 번호로만 가능합니다");
      return;
    }
    this.setState({
      phone: this.state.phone.slice(0,-1) 
    });
  }

  handleSubmit = () => {
    const { 
      phone,
      recPoint
    } = this.state;
    const hashedPhone = CryptoJS.SHA256(phone).toString() ; 
    const prevPoint = localStorage.getItem(hashedPhone) ? localStorage.getItem(hashedPhone) : 0;

    if (!this.validatePhone(phone)) {
      alert('적립은 휴대전화 번호로만 가능합니다. 휴대전화 번호를 정확히 입력해주세요.');
      return;
    }
    localStorage.setItem(hashedPhone, Number.parseInt(prevPoint) + recPoint);
    this.props.history.push('/result?phone=' + hashedPhone + '&recPoint=' + recPoint);
  }

  /* 휴대전화번호 유효성 체크 */
  validatePhone = (Phone) => {
    const re = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g;
    return re.test(Phone);
  }

  render() {
    const { 
      phone,
      recPoint
    } = this.state;

    return (
      <Grid fluid>
        <Row className="Enter-top">
          휴대전화번호를 눌러주세요.
          <div className="Enter-cancel">
            <Link to="/">취소 X</Link>
          </div>
        </Row>
        <Row className="Eneter-botton">
          <Col className="Enter-left" xs={12} md={4}>
            <div>
              <font size="6">
                <font color="#4c80f1">{recPoint} P</font> 적립
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
          <Col className="Enter-right" xs={12} md={8}>
              <div className="Enter-display">
                <p className="Enter-input">{phone}</p>
                <p className="Enter-terms">이용약관과 개인정보 취급방침에 동의하시면 휴대전화번호 입력 후 아래 적립 버튼을 눌러주세요.</p>
              </div>
              <Keypad
                onClick={this.handleClick}
                onRemove={this.handleRemove}
                onSubmit={this.handleSubmit}
              />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Enter;