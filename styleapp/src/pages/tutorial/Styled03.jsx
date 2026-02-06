import React from 'react';
import S from './style';

const Styled03 = () => {

  // box 3개를 생성하고
  // 사용자가 "가로"로 값을 넘기면 가로로 배치
  // 사용자가 "세로"로 값을 넘기면 세로로 배치

  return (
    <S.BoxWrapper direction={"세로"}>
      <S.Box />
      <S.Box />
      <S.Box />
    </S.BoxWrapper>
  );
};

export default Styled03;