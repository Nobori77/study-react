import React from 'react';
import BasicButton from '../../components/button/BasicButton';

const Styled05 = () => {

  // (심화) 컴포넌트 제작

  return (
    <div>
      <BasicButton size={"large"} font={"h3"} variant={"main"}>로그인</BasicButton>
      <BasicButton size={"full"} shape={"large"} font={"h5"} variant={"sub"}>로그아웃</BasicButton>
    </div>
  );
};

export default Styled05;