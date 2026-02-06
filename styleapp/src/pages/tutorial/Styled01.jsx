import React from 'react';
import S, { StyledDiv, StyleP } from './style';
import MyComponent from './MyComponent';

const Styled01 = () => {

  // div 생성
  // width, height, 100px 의 정사각형 박스생성
  // background-color 는 마음대로

  return (
    <div>
      <S.StyledP> 스타일 넣기 </S.StyledP>
      <S.StyledDiv />
      <MyComponent />
    </div>
  );
};

export default Styled01;