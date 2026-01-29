import React from 'react';

const PropsComponent03 = ({name, age, hobby, fontSize, color}) => {
  const style = {fontSize, color}
  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기

  return (
    <div style={style}>
      <p style={style}>이름: {name}</p>
      <p style={style}>나이: {age}</p>
      <p style={style}>취미: {hobby}</p>
    </div>
  );
};

export default PropsComponent03;