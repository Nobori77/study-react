import React from 'react';
import S from './style';

const Styled02 = () => {
  return (
    // 동적 스타일 적용
    <div>
      <S.Strong color={"blue"}>파란색</S.Strong>
      <S.Strong color={"orange"}>주황색</S.Strong>
      <S.Strong color={"green"}>초록색</S.Strong>
      <S.Strong color={"pink"}>핑크색</S.Strong>

      {/* 
        box 박스의 굵기
        1px, 2px, 3px
      */}

      <S.Div box={"1px"} />
      <S.Div box={"5px"} />
      <S.Div box={"10px"} />
      <S.Div box={"30px"} />

    </div>
  );
};

export default Styled02;