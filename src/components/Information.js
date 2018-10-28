import React from 'react';

function Information({recPoint}){
  return (
    <>
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
    </>
  );
}

export default Information;

