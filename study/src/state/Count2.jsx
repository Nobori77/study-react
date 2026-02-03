import React, { useState } from 'react';

const Count = () => {
  
  // 훅함수 - use...
  // useState(초기값)
  const [number, setNumber] = useState(0)

  const decrease = () => {
    setNumber(number - 1)
  }

  // useState 는 이전값을 저장할수 있다 

  const increase = () => {
    setNumber((prev) => {
      console.log("이전 값", prev)
      return number + 1
    })
  }

  return (
    <div>
      <button onClick={decrease}>-1</button>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default Count;