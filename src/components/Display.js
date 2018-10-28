import React from 'react';
import './Display.css';

function Display({phone}){
  return (
    <div className="Display-display">
      <p className="Display-input">{phone}</p>
      <p className="Display-terms">이용약관과 개인정보 취급방침에 동의하시면 휴대전화번호 입력 후 아래 적립 버튼을 눌러주세요.</p>
    </div>
  );
}

export default Display;